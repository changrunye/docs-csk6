# 中断

## 概述

中断有下面关键属性：

- 触发中断的请求信号（ISR）
- 中断优先级
- 中断服务函数
- 中断服务函数的参数

中断向量表(vector table)用来关联中断请求和中断服务函数。在任何时刻，一个中断请求只对应一个中断服务函数。

可以用同一个函数，来处理多个中断请求。这些中断请求可以是同一个外设不同类型的中断， 也可以是多个外设的中断。中断函数通过参数值来确定是哪个中断信号触发的。


内核提供了默认的中断服务函数对未用到的中断。如果有非法中断触发，中断服务函数产生一个系统致命错误。


内核支持**中断嵌套**(interrupt nesting)。高优先级的中断可以抢占正在执行的低优先级中断，高优先级执行完中断服务函数后，会继续执行低优先级中断。


中断服务函数在内核的中断上下文中执行。内核中断上下文具有自己的专用堆栈。如果使能了**中断嵌套**，中断上下文堆栈的大小，必须能够满足多个并发 ISR 的中断处理。


:::note

很多内核接口只能在线程中使用，而不能在中断中使用。如果一个函数允许被线程和中断调用，可以用 [k_is_in_isr()](https://docs.zephyrproject.org/latest/kernel/services/interrupts.html#c.k_is_in_isr)来判断上下文是否在中断中，从而进行不同的处理

:::

## 中断屏蔽


当在线程中执行时间敏感或关键操作时，需要阻止中断处理，这种操作称之为 **中断屏蔽**。


在线程中可以使用中断锁(IRQ lock)暂时屏蔽中断请求处理。即使中断锁已经生效，但仍可以再次调用，所以调用者不需要知道是否已经生效。线程释放锁的次数，必须与调用锁的次数相同，才能真正的恢复该线程运行时的中断响应。


:::note

中断锁是线程特有的。如果线程A进行了锁中断的操作后再睡眠(睡眠若干毫秒)，线程A被挂起，准备执行B线程，那么线程A中的中断锁就不再生效。

这意味着在执行线程B时，中断仍然可以被触发，除非在线程B中调用中断锁。

当再次执行线程A，内核将重新使能中断锁，确保线程A不会被中断直到线程A释放中断锁。

如果线程A没有睡眠，但此时一个高优先级线程B就绪，中断锁将禁止任何可能的抢占。只有线程A释放了中断锁，线程B才有可能被调度运行。

:::

还有另一种做法，在线程中临时**禁用**某个中断请求，这样当对应中断信号产生时，不会执行中断服务函数。但在线程处理后，尽快重新**使能**该中断请求，这样才能恢复其中断处理的响应。


:::note

禁用中断请求可以防止所有线程被中断抢占，而不仅仅是禁用IRQ的线程。

:::

### 零延迟中断


通过中断锁来屏蔽中断可能会增加中断延迟。然而，对于某些需要低延迟的场景，高中断延迟是不可接受的。


内核允许对延迟有要求的中断在使用中断锁后仍能触发。这些中断被定义为零延迟中断(Zero Latency Interrupts)。


零延迟中断需要使能[CONFIG_ZERO_LATENCY_IRQS](https://docs.zephyrproject.org/latest/kconfig.html#CONFIG_ZERO_LATENCY_IRQS)。另外，需要在[IRQ_CONNECT](https://docs.zephyrproject.org/latest/kernel/services/interrupts.html#c.IRQ_CONNECT) 或 [IRQ_DIRECT_CONNECT](https://docs.zephyrproject.org/latest/kernel/services/interrupts.html#c.IRQ_DIRECT_CONNECT)中配置为 **`IRQ_ZERO_LATENCY`** 。


零延迟中断用于直接管理硬件中断，不会经过Zephyr内核。在零延迟中断服务函数中使用内核API，需要用户去保证API使用的正确性。零延迟中断不得修改从正常Zephyr上下文调用的内核API所检查的任何数据，也不得产生需要同步处理的异常(例如内核panic)。


## 中断工作转移


中断服务函数应该快速执行，以确保系统正常运行。如果需要执行耗时的处理，中断处理函数应该将一些或所有的处理都分担给一个辅助线程(helper thread)，从而恢复内核对其他中断的响应能力。

内核支持多种方法去分担中断服务函数的处理给线程。

- 在中断服务函数中使用内核对象(如FIFO、LIFO或信号量)通知辅助线程执行与中断相关的处理。
- 在中断服务函数中指示系统工作队列线程执行工作项([工作队列](workqueue.md))。


中断服务函数执行完成后，内核会执行一次 **上下文切换**，尽可能保证立即执行辅助线程。但由于线程优先级的关系，也可能调度到其他的优先级更高的线程或协程。