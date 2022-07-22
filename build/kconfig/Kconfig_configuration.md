# 设置Kconfig配置

The [menuconfig](./Kconfig_gui.md) interfaces can be used to test out configurations during application development. This page explains how to make settings permanent.  
[menuconfig](./Kconfig_gui.md) 可用于在应用程序开发期间测试配置，本页说明如何进行永久设置。

An auto-generated list of all Kconfig options can be found in the Kconfig symbol reference.  
可以在[Kconfig搜索页](https://docs.zephyrproject.org/latest/build/kconfig/setting.html)中找到所有 Kconfig 选项的自动生成列表。

:::info
Before making changes to Kconfig files, it’s a good idea to also go through the Kconfig - Tips and Best Practices page.  
在对 Kconfig 文件进行更改之前，最好也浏览一下Kconfig - [小贴士与最佳实践](./Kconfig_tips_and_demo.md)。
:::

## 可见和不可见的选项

When making Kconfig changes, it’s important to understand the difference between visible and invisible symbols.  
在进行Kconfig更改时，了解可见和不可见选项之间的区别非常重要

* A visible symbol is a symbol defined with a prompt. Visible symbols show up in the interactive configuration interfaces (hence visible), and can be set in configuration files.  
* 可见选项是用来提示配置定义的，可见选项显示在交互式配置界面中（因此可见），并且可以在配置文件中设置。

Here’s an example of a visible symbol:  
这是个可见选项的示例：
```
config FPU
   bool "Support floating point operations"
   depends on HAS_FPU
```

The symbol is shown like this in menuconfig, where it can be toggled:  
选项在`menuconfig`显示如下，可以进行切换
```
[ ] Support floating point operations
```

* An invisible symbol is a symbol without a prompt. Invisible symbols are not shown in the interactive configuration interfaces, and users have no direct control over their value. They instead get their value from defaults or from other symbols.  
* 不可见选项是没有提示的选项。交互界面中不显示不可见选项，用户无法直接控制选项值。然而，他们可以从默认值或其他选项中获取值。

Here’s an example or an invisible symbol:
这是一个不可见选项的实例：
```
config CPU_HAS_FPU
   bool
   help
     This symbol is y if the CPU has a hardware floating point unit.
```

In this case, CPU_HAS_FPU is enabled through other symbols having select CPU_HAS_FPU.  
在这种情况下，`CPU_HAS_FPU`通过其他选项启用。`select CPU_HAS_FPU`

## 在配置文件中设置选项

Visible symbols can be configured by setting them in configuration files. The initial configuration is produced by merging a *_defconfig file for the board with application settings, usually from prj.conf. See The Initial Configuration below for more details.  
可见选项可以通过配置文件设置来配置。初始配置是通过board中的 `xxx_defconfig` 文件和应用程序中的 `prj.conf` 合并而成。有关详细信息，请参考下面详细的[初始配置](#config_init)。

Assignments in configuration files use this syntax:  
配置文件中的使用语法如下：
```
CONFIG_<symbol name>=<value>
```
There should be no spaces around the equals sign.  
等号周围不应该有空格。

boolsymbols can be enabled or disabled by setting them toyorn,respectively. TheFPUsymbol from the example above could be enabled likethis:  
布尔类型选项可以设置**y**或**n**去启用或禁止。上面示例中FPU选项就是这样启用：
```
CONFIG_FPU=y
```

:::info
A boolean symbol can also be set tonwith a comment formatted likethis:  # CONFIG_SOME_OTHER_BOOL is not set
This is the format you will see in the merged configuration inzephyr/.config.
This style is accepted for historical reasons: Kconfig configuration filescan be parsed as makefiles (though Zephyr doesn’t use this). Havingn-valued symbols correspond to unset variables simplifies tests in Make.  

布尔型选项也可以设置n如下格式的注释:`# CONFIG_SOME_OTHER_BOOL is not set`
这是您将在合并配置`zephyr/build/zephyr/.config`中看到的格式.这种风格之所以被使用是因为历史原因：Kconfig配置文件可以被解析为makefile（尽管Zephyr不使用这个）。有**n**-与未设置变量对应的值选项简化了Make中的测试。
:::

Other symbol types are assigned like this:  
其他选项类型设置如下：
```
CONFIG_SOME_STRING="cool value"
CONFIG_SOME_INT=123
```

Comments use a #:  
注释使用：  
```
# This is a comment
```

Assignments in configuration files are only respected if the dependencies forthe symbol are satisfied. A warning is printed otherwise. To figure out whatthe dependencies of a symbol are, use one of theinteractiveconfiguration interfaces(you can jump directly to a symbol with/), or look up the symbol in theKconfig symbol reference.  
只有满足选项的依赖关系时，才会考虑配置文件的赋值。否则将会打印警告。想要知道选项依赖关系是什么，请使用[交互式配置界面](./Kconfig_gui.md)(您可以使用 `/` 跳转)，或在[Kconfig搜索页](https://docs.zephyrproject.org/latest/build/kconfig/setting.html)

## <span id="config_init">初始配置</span>

The initial configuration for an application comes from merging configurationsettings from three sources:  
应用程序的初始配置来自于合并三个来源设置：

1. A `BOARD` -specific configuration file stored in `boards/<architecture>/<BOARD>/<BOARD>_defconfig`   
一个 `BOARD` 特定配置文件存储在 `boards/<architecture>/<BOARD>/<BOARD>_defconfig`

2. Any CMake cache entries prefix with `CONFIG_`  
任何CMake条目的前缀为 `CONFIG_`

3. The application configuration  
应用程序设置 `./prj.conf`

The application configuration can come from the sources below. By default,`prj.conf`is used.  
应用程序配置可以来自一下源。默认情况下`prj.conf`使用。


1. If`CONF_FILE`is set, the configuration file(s) specified in it aremerged and used as the application configuration.`CONF_FILE`can be setin various ways: 
   1. InCMakeLists.txt, before callingfind_package(Zephyr)
   2. By passing `-DCONF_FILE=<conf file(s)>` , either directly or viawest
   3. From the CMake variable cache
1. 如果`CONF_FILE`设置后，其中指定的配置文件将合并用作应用程序配置。 `CONF_FILE` 可通过多种方式设置：
    1. 在 `CMakeLists.txt`, 在调用之前`find_package(Zephyr)`
    2. 通过传递 `-DCONF_FILE=<conf file(s)>`, 或`lisa zep`
    3. 来自 CMake 变量缓存

2. Otherwise if `CONF_FILE` is set, and a single configuration file of theform `prj_<build>.conf` is used, then if file `boards/<BOARD>_<build>.conf` exists in same folder as file `prj_<build>.conf` , the result of
2. 如果`CONF_FILE` 被设置，并且单个配置文件形式 `prj_<build>.conf` 被使用，那么如果文件 `boards/<BOARD>_<build>.conf` 与文件存在同一文件夹中  `prj_<build>.conf` ,是用 `prj_<build>.conf` 和 `boards/<BOARD>_<build>.conf` 合并而来

3. Otherwise,`prj_<BOARD>.conf`is used if it exists in the applicationdirectory.  
3. 如果`prj_<BOARD>.conf`存在应用目录中，它会被使用。

4. Otherwise, if`boards/<BOARD>.conf`exists in the applicationdirectory, the result of merging it withprj.confis used.
4. 如果`boards/<BOARD>.conf`存在于应用程序目录中，则结果与prj.conf合并使用。 

5. Otherwise, if board revisions are used and`boards/<BOARD>_<revision>.conf`exists in the applicationdirectory, the result of merging it with`prj.conf`and`boards/<BOARD>.conf`is used.
5. 如果board版本使用`boards/<BOARD>_<revision>.conf`存在应用程序目录中，则结果与`prj.conf`和`boards/<BOARD>.conf`合并使用。

6. Otherwise,`prj.conf`is used if it exists in the applicationdirectory
6. 如果`prj.conf`存在应用目录中，则使用它。

If a symbol is assigned both in`<BOARD>_defconfig`and in theapplication configuration, the value set in the application configuration takesprecedence.  
如果在`<BOARD>_defconfig`和应用配置中都指定了选项，则应用配置中的赋值优先使用。

The merged configuration is saved tozephyr/.configin the builddirectory.  
合并后的配置保存在`zephyr/build/zephyr/.config`构建目录中。

As long aszephyr/.configexists and is up-to-date (is newer than anyBOARDand application configuration files), it will be used in preferenceto producing a new merged configuration.zephyr/.configis also theconfiguration that gets modified when making changes in theinteractiveconfiguration interfaces.  
只要 `zephyr/build/zephyr/.config`存在并配置是最新的，它都优先级高于任何BOARD和应用程序配置文件的合并配置。`zephyr/build/zephyr/.config`也可在[交互式配置界面](./Kconfig_gui.md)进行更改配置。

## 配置不可见选项

When making changes to the default configuration for a board, you might have toconfigure invisible symbols. This is done inboards`/<architecture>/<BOARD>/Kconfig.defconfig`, which is a regularKconfigfile.  
更改board的默认配置时，您可能必须在`boards/<architecture>/<BOARD>/Kconfig.defconfig`的常规`Kconfig`中完成配置不可见选项。.

:::info
Assignments in.configfiles have no effect on invisible symbols,so this scheme is not just an organizational issue.  
这种类型的配置项即使是用户在外面的`.config` 文件中去做赋值配置，也是没有用的，还是会以`.defconfig`中的为准，这就是我们这样子设计的，不是一个架构上的缺陷或问题。
:::

Assigning values in`Kconfig.defconfig`relies on defining a Kconfigsymbol in multiple locations. As an example, say we want to setFOO_WIDTHbelow to 32:  
`Kconfig.defconfig`的赋值依赖于多个位置定义Kconfig选项。例如，假设我们想在 `FOO_WIDTH` 设置为32:
```
config FOO_WIDTH
    int
```

To do this, we extend the definition ofFOO_WIDTHas follows, inKconfig.defconfig:  
为此，我们将扩展`Kconfig.defconfig`的`FOO_WIDTH`的定义：
```
if BOARD_MY_BOARD

config FOO_WIDTH
    default 32

endif
```

> Since the type of the symbol (int) has already been given at the firstdefinition location, it does not need to be repeated here. Only giving thetype once at the “base” definition of the symbol is a good idea for reasonsexplained inCommon Kconfig shorthands.

:::info 
Since the type of the symbol (int) has already been given at the first definition location, it does not need to be repeated here. Only giving the type once at the “base” definition of the symbol is a good idea for reasons explained in Common Kconfig shorthands.  
因为选项(int)的类型已经在第一个定义位置给出，所以不需要在这里重复。在选项的“基本”定义中只给出一次类型是一个好方式。
:::

defaultvalues inKconfig.defconfigfiles have priority overdefaultvalues given on the “base” definition of a symbol. Internally, thisis implemented by including theKconfig.defconfigfiles first. Kconfiguses the firstdefaultwith a satisfied condition, where an empty conditioncorresponds toify(is always satisfied).  
在`Kconfig.defconfig`文件默认的赋值优先于默认选项的“base”定义中给出的值。这是通过在内部首先包含 `Kconfig.defconfig`文件来实现的。`Kconfig.defconfig`使用满足的条件配置第一个`default`，其中空条件对应 `if y`(始终满足)


Note that conditions from surrounding top-levelifs are propagated tosymbol properties, so the abovedefaultis equivalent todefault 32 if BOARD_MY_BOARD。    
值得注意的是，来自顶层的条件`if`是判断选项属性的，因此`if BOARD_MY_BOARD`条件成立，那么上面的默认值等于32。

:::warning 警告
When defining a symbol in multiple locations, dependencies are ORed togetherrather than ANDed together. It is not possible to make the dependencies of asymbol more restrictive by defining it in multiple locations.  
在多个位置定义选项时，依赖项是被“或”运算，而不是“与”运算。通过在多个位置定义选项，不可能使选项的依赖关系受到限制。

For example, the direct dependencies of the symbol below becomesDEP1 || DEP2:  
例如，下面选项的依赖关系是：`DEP1 || DEP2`
```
config FOO
  ...
  depends on DEP1

config FOO
  ...
  depends on DEP2
```
When making changes toKconfig.defconfigfiles, always check thesymbol’s direct dependencies in one of theinteractive configurationinterfacesafterwards. It is often necessary to repeatdependencies from the base definition of the symbol to avoid weakening asymbol’s dependencies.  
当更改`Kconfig.defconfig`配置时，请始终在交互配置界面其中一个选项中检查依赖关系。通常需要从选项的基本定义中重复依赖项，避免弱化选项的依赖项。
:::

## Kconfig.defconfig文件机制

One motivation for this configuration scheme is to avoid making fixed`BOARD`-specific settings configurable in the interactive configurationinterfaces. If all board configuration were done via`<BOARD>_defconfig`,all symbols would have to be visible, as values given in`<BOARD>_defconfig`have no effect on invisible symbols.  
这种配置方案的机制是避免在交互式配置界面中配置固定`BOARD`板型的设置。如果所有board配置都通过`<BOARD>_defconfig`去完成，则所有选项都必须可见，因为 `<BOARD>_defconfig` 中的值对不可见符号没有影响。

Having fixed settings be user-configurable would clutter up the configurationinterfaces and make them harder to understand, and would make it easier toaccidentally create broken configurations.  
将固定设置让用户可配置会使配置界面更杂乱无章，使得配置更容易意外地创建有问题的配置和难以理解。

When dealing with fixed board-specific settings, also consider whether theyshould be handled viadevicetreeinstead.  
在处理固定板型的设置时，还要考虑是否应该通过设备树去处理。

## 配置选项

There are two ways to configure a Kconfigchoice:  
有两种配置Kconfig的`choice`方法：

1. By setting one of the choice symbols toyin a configuration file.
Setting one choice symbol toyautomatically gives all other choicesymbols the valuen.
If multiple choice symbols are set toy, only the last one set toywill be honored (the rest will get the valuen). This allows a choiceselection from a boarddefconfigfile to be overridden from anapplicationprj.conffile.    
1. 通过在配置文件中设置一个选项。将选项设置为 `y`，其他选项自动设置值为`n` 。  
   如果多个选项设置为`y`，则只有最后一个设置为`y`的才会被使用（其他值为`n`）。  
   这使应用程序中`prj.conf`的一个选项覆盖board一个defconfig选项。  

2. By changing thedefaultof the choice inKconfig.defconfig.
As with symbols, changing the default for a choice is done by defining thechoice in multiple locations. For this to work, the choice must have a name.
As an example, assume that a choice has the following base definition (here,the name of the choice isFOO):
2. 通过更改`Kconfig.defconfig`choice中的`default`。  
  与选项一样，更改选项的默认值是通过多个位置定义的选项来完成。为此，这个选项必须有一个名称。  
  例如：假设一个选项具的有以下基本定义（这里选项名称是`FOO`）
```
choice FOO
    bool "Foo choice"
    default B

config A
    bool "A"

config B
    bool "B"

endchoice
```

To change the default symbol ofFOOtoA, you would add thefollowing definition toKconfig.defconfig:  
更改`FOO`的默认值为`A`，你需要添加以下定义到`Kconfig.defconfig`
```
choice FOO
    default A
endchoice
```

TheKconfig.defconfigmethod should be used when the dependencies ofthe choice might not be satisfied. In that case, you’re setting the defaultselection whenever the user makes the choice visible.  
这个`Kconfig.defconfig`方法应该在选择的依赖关系可能无法满足时使用。在这种情况下，只要用户使选项可见，就会设置默认选项。

## 更多Kconfig资源

[小贴士与最佳实践](./Kconfig_tips_and_demo.md)页面有写一些编写Kconfig文件的提示。

[kconfiglib.py](#)（位于文件顶部）详细介绍了选项值的计算方式。