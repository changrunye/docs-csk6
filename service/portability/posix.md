# POSIX 支持

可移植操作系统接口 (POSIX) 是由 IEEE 计算机组织制定一系列的标准，用于维护操作系统之间的兼容性。Zephyr 实现了嵌入式 PSE51 和 PSE52 以及 BSD Sockets API 的子集。

Zephyr 支持 POSIX 后，可以将现有的 POSIX 兼容的应用程序移植到 Zephyr 内核上运行，从而利用 Zephyr 特性和功能。此外，设计用于与 POSIX 线程兼容的操作系统的库可以移植到基于 Zephyr 内核的应用程序，并且仅需要少量或无需修改。

![](../images/posix.svg)

POSIX API 子集是一个越来越流行的 OSAL (操作系统抽象层)，用于 IoT 和嵌入式应用程序，可以在 Zephyr、AWS:FreeRTOS、TI-RTOS 和 NuttX 中看到。

Zephyr 支持 POSIX 的优点包括：

- 为非嵌入式程序员提供熟悉的 API，尤其是 Linux 程序员
- 支持重用 (可移植性) 基于 POSIX API 的现有库
- 提供适用与小型 (MCU) 嵌入式系统的高效 API 子集

## 系统概览

### 功能单元

系统概要是由组件概要定义的，它指定了可以组合实现应用平台的功能单元。功能单元是一组定义好的可以实现的服务。如果实现，标准要求所有单元服务都必须实现。

最小实时系统概要实现必须支持 IEEE Std 1003.1(亦称 POSIX.1-2017)中定义的以下功能单元。

| 需求 | 支持 | 备注 |
| ---- | ---- | ---- |
| POSIX_C_LANG_JUMP |  |  |
| POSIX_C_LANG_SUPPORT | yes |  |
| POSIX_DEVICE_IO |  |  |
| POSIX_FILE_LOCKING |  |  |
| POSIX_SIGNALS |  |  |
| POSIX_SINGLE_PROCESS |  |  |
| POSIX_THREADS_BASE | yes |  |
| XSI_THREAD_MUTEX_EXT | yes |  |
| XSI_THREADS_EXT | yes |  |

### 功能选项

POSIX 1003.1 标准定义了一个最小的 Unix 操作系统接口，任何操作系统只有符合这一标准，才有可能运行 Unix 程序。其中有一些功能选项，要实现相关的功能得照着标准的功能选项要求来实现。

以下列表显示了在 Zephyr 中实现的功能选项。

| 需求 | 支持 |
| ---- | ---- |
| _POSIX_CLOCK_SELECTION |  |
| _POSIX_FSYNC |  |
| _POSIX_MEMLOCK |  |
| _POSIX_MEMLOCK_RANGE |  |
| _POSIX_MONOTONIC_CLOCK |  |
| _POSIX_NO_TRUNC |  |
| _POSIX_REALTIME_SIGNALS |  |
| _POSIX_SEMAPHORES | yes |
| _POSIX_SHARED_MEMORY_OBJECTS |  |
| _POSIX_SYNCHRONIZED_IO |  |
| _POSIX_THREAD_ATTR_STACKADDR |  |
| _POSIX_THREAD_ATTR_STACKSIZE |  |
| _POSIX_THREAD_CPUTIME |  |
| _POSIX_THREAD_PRIO_INHERIT | yes |
| _POSIX_THREAD_PRIO_PROTECT |  |
| _POSIX_THREAD_PRIORITY_SCHEDULING | yes |
| _POSIX_THREAD_SPORADIC_SERVER |  |
| _POSIX_TIMEOUTS |  |
| _POSIX_TIMERS |  |
| _POSIX2_C_DEV |  |
| _POSIX2_SW_DEV |  |

## 功能单元 

本节描述在 Zephyr 中（部分或者全部）实现的功能单元（固定的接口集）。请参考标准中的每个接口的完整描述。

### POSIX_THREADS_BASE

本配置文件的基本假设是系统由一个单一的（隐式）进程和多个线程组成。因此，标准要求所有基本线程服务，但与多进程相关的除外。

| API | 支持 |
| ---- | ---- |
| pthread_atfork() | yes |
| pthread_attr_destroy() | yes |
| pthread_attr_getdetachstate() | yes |
| pthread_attr_getschedparam() | yes |
| pthread_attr_init() | yes |
| pthread_attr_setdetachstate() | yes |
| pthread_attr_setschedparam() | yes |
| pthread_cancel() | yes |
| pthread_cleanup_pop() |  |
| pthread_cleanup_push() |  |
| pthread_cond_broadcast() | yes |
| pthread_cond_destroy() |  |
| pthread_cond_init() | yes |
| pthread_cond_signal() | yes |
| pthread_cond_timedwait() | yes |
| pthread_cond_wait() | yes |
| pthread_condattr_destroy() |  |
| pthread_condattr_init() |  |
| pthread_create() | yes |
| pthread_detach() | yes |
| pthread_equal() |  |
| pthread_exit() | yes |
| pthread_getspecific() | yes |
| pthread_join() | yes |
| pthread_key_create() | yes |
| pthread_key_delete() | yes |
| pthread_kill() | yes |
| pthread_mutex_destroy() | yes |
| pthread_mutex_init() | yes |
| pthread_mutex_lock() | yes |
| pthread_mutex_trylock() | yes |
| pthread_mutex_unlock() | yes |
| pthread_mutexattr_destroy() |  |
| pthread_mutexattr_init() |  |
| pthread_once() | yes |
| pthread_self() | yes |
| pthread_setcalcelstate() |  |
| pthread_setcanceltype() |  |
| pthread_setspecific() | yes |
| pthread_sigmask() |  |
| pthread_testcancel() |  |

### XSI_THREAD_EXT

XSI_THREADS_EXT 功能单元是必需的，因为它提供了控制线程栈的函数。这对于任何实时应用程序是有用的。

本表列出了 Zephyr 中的服务支持状态：

| API | 支持 |
| ---- | ---- |
| pthread_attr_getguardsize() |  |
| pthread_attr_getstack() | yes |
| pthread_attr_setguardsize() |  |
| pthread_attr_setstack() | yes |
| pthread_getconcurrency() |  |
| pthread_setconcurrency() |  |

### XSI_THREAD_MUTEX_EXT

XSI_THREAD_MUTEX_EXT 功能单元是必需的，因为它具有在错误的应用程序使用下控制互斥锁行为的选项。

下表列出了 Zephyr 中的服务支持状态：

| API | 支持 |
| ---- | ---- |
| pthread_mutexattr_gettype() | yes |
| pthread_mutexattr_settype() | yes |

### POSIX_C_LANG_SUPPORT

POSIX_C_LANG_SUPPORT 功能单元包含通用 ISO C 库。

这是作为 Zephyr 中可用的最小 C 库的一部分实现的。

| API | 支持 |
| ---- | ---- |
| abs() | yes |
| asctime() |
| asctime_r() |
| atof() |
| atoi() | yes |
| atol() |
| atoll() |
| bsearch() | yes |
| calloc() | yes |
| ctime() |
| ctime_r() |
| difftime() |
| div() |
| feclearexcept() |
| fegetenv() |
| fegetexceptflag() |
| fegetround() |
| feholdexcept() |
| feraiseexcept() |
| fesetenv() |
| fesetexceptflag() |
| fesetround() |
| fetestexcept() |
| feupdateenv() |
| free() | yes |
| gmtime() | yes |
| gmtime_r() | yes |
| imaxabs() |
| imaxdiv() |
| isalnum() | yes |
| isalpha() | yes |
| isblank() |
| iscntrl() |
| isdigit() | yes |
| isgraph() | yes |
| islower() |
| isprint() | yes |
| ispunct() |
| isspace() | yes |
| isupper() | yes |
| isxdigit() | yes |
| labs() | yes |
| ldiv() |
| llabs() | yes |
| lldiv() |
| localeconv() |
| localtime() | yes |
| localtime_r() |
| malloc() | yes |
| memchr() | yes |
| memcmp() | yes |
| memcpy() | yes |
| memmove() | yes |
| memset() | yes |
| mktime() | yes |
| qsort() |
| rand() | yes |
| rand_r() |
| realloc() | yes |
| setlocale() |
| snprintf() | yes |
| sprintf() | yes |
| srand() | yes |
| sscanf() |
| strcat() | yes |
| strchr() | yes |
| strcmp() | yes |
| strcoll() |
| strcpy() | yes |
| strcspn() |
| strerror() | yes |
| strerror_r() | yes |
| strftime() |
| strlen() | yes |
| strncat() | yes |
| strncmp() | yes |
| strncpy() | yes |
| strpbrk() |
| strrchr() | yes |
| strspn() |
| strstr() | yes |
| strtod() |
| strtof() |
| strtoimax() |
| strtok() |
| strtok_r() | yes |
| strtol() | yes |
| strtold() |
| strtoll() | yes |
| strtoul() | yes |
| strtoull() | yes |
| strtoumax() |
| strxfrm() |
| time() | yes |
| tolower() | yes |
| toupper() | yes |
| tzname() |
| tzset() |
| va_arg() |
| va_copy() |
| va_end() |
| va_start() |
| vsnprintf() | yes |
| vsprintf() | yes |
| vsscanf() |  |

### POSIX_SINGLE_PROCESS

POSIX_SINGLE_PROCESS 功能单元包含用于单进程应用程序的服务。

| API | 支持 |
| ---- | ---- |
| confstr() |  |
| environ |  |
| errno |  |
| getenv() |  |
| setenv() |  |
| sysconf() |  |
| uname() |  |
| unsetenv() |  |

### POSIX_SIGNALS

信号服务是基于 POSIX 的系统中的基本机制，是错误和事件处理所必需的。

| API | 支持 |
| ---- | ---- |
| abort() | yes |
| alarm() |  |
| kill() |  |
| pause() |  |
| raise() |  |
| sigaction() |  |
| igaddset() |  |
| sigdelset() |  |
| sigemptyset() |  |
| sigfillset() |  |
| igismember() |  |
| signal() |  |
| sigpending() |  |
| sigprocmask() |  |
| igsuspend() |  |
| sigwait() |  |

### POSIX_DEVICE_IO

| API | 支持 |
| ---- | ---- |
| flockfile() |
| ftrylockfile() |
| funlockfile() |
| getc_unlocked() |
| getchar_unlocked() |
| putc_unlocked() |
| putchar_unlocked() |
| clearerr() |
| close() |
| fclose() |
| fdopen() |
| feof() |
| ferror() |
| fflush() |
| fgetc() |
| fgets() |
| fileno() |
| fopen() |
| fprintf() | yes |
| fputc() | yes |
| fputs() | yes |
| fread() |
| freopen() |
| fscanf() |
| fwrite() | yes |
| getc() |
| getchar() |
| gets() |
| open() | yes |
| perror() | yes |
| printf() | yes |
| putc() | yes |
| putchar() |
| puts() | yes |
| read() | yes |
| scanf() |
| setbuf() |
| etvbuf() |
| stderr |
| stdin |
| stdout |
| ungetc() |
| vfprintf() | yes |
| vfscanf() |
| vprintf() | yes |
| vscanf() |
| write() |