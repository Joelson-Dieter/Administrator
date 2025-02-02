<a name="0.0.89"></a>
## [0.0.89] (2025/1/10)

### Features
- Fix a bug while rebuild.
- Fix a bug while check gcc toolchains.

<a name="0.0.88"></a>
## [0.0.88] (2025/1/10)

### Features
- Fix a bug while switch project in solutionView.
- Fix a bug while src File Path now not existed.

<a name="0.0.87"></a>
## [0.0.87] (2025/1/9)

### Features
- Add source Dir to c_cpp_properties.json, so we can use "Go To Defination".
- Change the strategy  for buildOut .o Files, so to reduce command-line string length,avoid error when building.

<a name="0.0.86"></a>
## [0.0.86] (2025/1/7)

### Features
- Fix a bug in SDK Package EditView.

<a name="0.0.85"></a>
## [0.0.85] (2025/1/7)

### Features
- Fix some bugs in install/uninstall SDK soft components.

<a name="0.0.84"></a>
## [0.0.84] (2025/1/7)

### Features
- Add SDK Pack DDF support.
- Fix some bugs in build a new created project.

<a name="0.0.83"></a>
## [0.0.83] (2024/12/24)

### Features
- Fix a bug in Perip Register Value Apply Modify.
- Fix a bug in check whether a file is Pack file.
- Fix a bug in update paths in c_cpp_properties.json when path is in Pack.

<a name="0.0.82"></a>
## [0.0.82] (2024/12/17)

### Features
- Fix a bug in deal DDF When calculating the size of peripheral memory.
- Fix a bug while switch project in solution when project-settings view was opened.
- Add Warning if fullPathName have Chinese characters, it will cause gdb debug error.
- Fix a bug in dealing include files.
- Fix package soft components absolute path.

<a name="0.0.81"></a>
## [0.0.81] (2024/12/13)

### Features
- Modify to follow DDF file changes.

<a name="0.0.80"></a>
## [0.0.80] (2024/12/12)

### Features
- Change template launch.json externalConsole value to false.
- Add sleep while build project to Reduce CPU usage.
- Update Manual.pdf

<a name="0.0.79"></a>
## [0.0.79] (2024/12/10)

### Features
- Add OpenOCD Path Setting Button in Project Setttings.
- Add InfoMessage ask user to confirm whether have started OpenOCD already.
- Update Manual.pdf to add more description of Project Debug.


<a name="0.0.78"></a>
## [0.0.78] (2024/12/6)

### Features
- Fix a bug build error when the FsPath in WinPlatform has spaces.
- Add start local OpenOCD  When StartDebug.

<a name="0.0.77"></a>
## [0.0.77] (2024/12/3)

### Features
- Fix file relative path setting while using sdk soft Component whick cause bugs when build.

<a name="0.0.76"></a>
## [0.0.76] (2024/12/2)

### Features
- Modify file copy to user local project while using sdk soft Component.

<a name="0.0.75"></a>
## [0.0.75] (2024/11/27)

### Features
- Modify DFP Package Edit/Add functions to follow Design Document.

<a name="0.0.74"></a>
## [0.0.74] (2024/11/20)

### Features
- Fix bugs in Create new Solution or new Project.
- Fix bugs in Project View to show folders in Project.

<a name="0.0.73"></a>
## [0.0.73] (2024/8/27)

### Features
- Add Int16 Int32 data value show in debug memory-view.

<a name="0.0.72"></a>
## [0.0.72] (2024/6/18)

### Features
- Add mips asm file grammar highlight and snippets support.

<a name="0.0.71"></a>
## [0.0.71] (2024/6/13)

### Features
- Fix a bug in compile c files, while warning info return back by compile childprocess in stderr para.
- Change compile message's source filePathName to Absolute FilePath in Output view, so User can click it directly to check the warning or error in Editor View.

<a name="0.0.70"></a>
## [0.0.70] (2024/6/12)

### Features
- Fix a bug in project Settings's Debug Config View .
- Please check your project config file named [yourproj].mpproj in your project Path,  if you have more items counts than real exist in procCoreCfgs, Please remove the extra items.

<a name="0.0.69"></a>
## [0.0.69] (2024/5/29)

### Features
- Change to use Microsoft's C/C++ extension's Code analysis clang-tidy checks, not use Clangd extension.


<a name="0.0.68"></a>
## [0.0.68] (2024/5/28)

### Features
- Add clangd settings support, to use clangd-tidy check function.
- When user switch the srcFile in vscode's editor view, projectView also switch the file to focus.

<a name="0.0.67"></a>
## [0.0.67] (2024/5/22)

### Features
- When user change the project build settings, next build will rebuild all to ensure the build setting is the latest.

<a name="0.0.66"></a>
## [0.0.66] (2024/5/8)

### Features
- Fix a bug in solution init when mpsln file be modified by others.
- Project config Path string replace '\\' with '/'.

<a name="0.0.65"></a>
## [0.0.65] (2024/5/6)

### Features
- For build speed, after first build, only changed srcFiles or those srcFiles whose include Files(Now, only in the Project's FilePath will be watched) have been Changed will be compiled again.

<a name="0.0.64"></a>
## [0.0.64] (2024/4/29)

### Features
- For build speed, when command para text is not too long use cmd.

<a name="0.0.63"></a>
## [0.0.63] (2024/4/28)

### Features
- Fix a bug in linkout while too many files cause para string extends in use cmd in win.

<a name="0.0.62"></a>
## [0.0.62] (2024/4/25)

### Features
- Fix a bug in project setting while config the asm inc Paths.
- Fix a bug in recent projects list.


<a name="0.0.61"></a>
## [0.0.61] (2024/4/24)

### Features
- Optimizing part processing When get the latest project from git, if user not config the toolchain for this project ,use default for it,so We will not warning user when user build the project for the firset time.
- Add tooltip for user to use Peripherals View functions.
- Fix a bug in load solution in MIPS Studio Startpage's recent Projects.

<a name="0.0.60"></a>
## [0.0.60] (2024/4/16)

### Features
- Add more kewwords for this extension.

<a name="0.0.59"></a>
## [0.0.59] (2024/4/15)

### Features
- Fix the bug user Can not change the perip register/field values in debug mode, caused by 0.0.57 version.

<a name="0.0.58"></a>
## [0.0.58] (2024/4/15)

### Features
- Fix the bug perip reg value not right when in debug, caused by 0.0.57 version.

<a name="0.0.57"></a>
## [0.0.57] (2024/4/12)

### Features
- For performance, not show All Perip in a view.
- Add deriveFrom attribute support in svd File.

<a name="0.0.56"></a>
## [0.0.56] (2024/4/12)

### Features
- Add independent tab page to show different Peripheral.

<a name="0.0.55"></a>
## [0.0.55] (2024/4/10)

### Features
- Partially optimized display in Peripherals View.

<a name="0.0.54"></a>
## [0.0.54] (2024/4/9)

### Features
- Add unreadable memory range support in Peripherals View, in some case, part address not readable in SOC design.

<a name="0.0.53"></a>
## [0.0.53] (2024/4/8)

### Features
- Add Expand/Collapse switch button to each Peripherals, to expand or collapse all registers.

<a name="0.0.52"></a>
## [0.0.52] (2024/4/7)

### Features
- Fix a bug in load Periphreal config file in json format.
- Modify launch.json to support build projects in remote-directory.

<a name="0.0.51"></a>
## [0.0.51] (2024/3/28)

### Features
- Fix a bug in calculate addroffset of dim registers.
- Optimize svd dim register named [%s].

<a name="0.0.50"></a>
## [0.0.50] (2024/3/28)

### Features
- Add svd File support to Display Device Peripherals.

<a name="0.0.49"></a>
## [0.0.49] (2024/3/26)

### Features
- Add Function: Display Device Peripherals.

<a name="0.0.48"></a>
## [0.0.48] (2024/3/13)

### Features
- Optimize memory data show string info .
- Fix a bug when Project file be changed Event Notify. 

<a name="0.0.47"></a>
## [0.0.47] (2024/3/12)

### Features
- Fix the bug when switch to other view then back to memory view, all data lost .
- Add U8/U16/U32 tooltip when mouse hover on memory byte data, and Add string show info when select memory datas . 

<a name="0.0.46"></a>
## [0.0.46] (2024/3/11)

### Features
- Replace path string use '/' instead of '\\' which provided by Win OS .
- Fix a bug when switch Project in current Solution . 

<a name="0.0.45"></a>
## [0.0.45] (2024/3/8)

### Features
- Add show the files not exist in OS but in Project FileList, then You can remove it from the Project.
- When Solution or Project file be changed by other user app, Ask the user if they need to reload. This maybe useful after Pull from Git Svr. 

<a name="0.0.44"></a>
## [0.0.44] (2024/3/7)

### Features
- Fix the bug Oninit buildOption not load correctly.

<a name="0.0.43"></a>
## [0.0.43] (2024/3/7)

### Features
- Fix the bug always show should config toolchain First.

<a name="0.0.42"></a>
## [0.0.42] (2024/3/6)

### Features
- Add warning info output while compile files and link.


<a name="0.0.41"></a>
## [0.0.41] (2024/3/4)

### Features
- Fix a bug while change the debug settings when change the elf Path not saved.
- Update readme.md to show img.
- Update manaul.pdf to add debug function desc.


<a name="0.0.40"></a>
## [0.0.40] (2024/3/4)

### Features
- Updated mpsln and mpproj file saving procedures to avoid unnecessary file changes when the project is reopened.

<a name="0.0.39"></a>
## [0.0.39] (2024/2/29)

### Features
- Fix openocd send Signal 0 exception event  while hit breakpoint.
- Update launch.json generate to start debug.


<a name="0.0.38"></a>
## [0.0.38] (2024/2/28)

### Features
- Fix a bug while get mips link options string to use in terminal command.
- Support read memory and change the memory data in debug Mode.



<a name="0.0.37"></a>
## [0.0.37] (2024/2/23)

### Features
- Fix a bug while build give toolchains configure error info.
- Support to read memory while in debug Mode.


<a name="0.0.36"></a>
## [0.0.36] (2023/11/13)

### Features
- Modify project configuration's Debug Option Tab, prepare for more detail Function to be done.


<a name="0.0.35"></a>
## [0.0.35] (2023/9/20)

### Features
- Fix bug when update c_cpp_properties.json while incPath is Absolute Path.
- Fix bug when add soft component the include Path was dealed wrong.


<a name="0.0.34"></a>
## [0.0.34] (2023/9/18)

### Features
- Add the ability to create and edit Package packages.
- Add package management function.
- Add the function of adding software components in the installed Package to the current project.


<a name="0.0.33"></a>
## [0.0.33] (2023/8/1)

### Features
- Update the extension’s readme section.
- Fix the project's launch launch function so that you can directly start debugging with one click of F5 in VSCode.
- Add existing project configurations and fix some bugs such as new projects.
- Adjust the implementation of build deletion obj, no longer delete the folder.
- Adjust the processing of projName when adding mpproj.


<a name="0.0.28"></a>
## [0.0.28] (2023/7/11)

### Features

- First published to the VSCode MarketPlace.


<a name="0.0.1"></a>
## [0.0.1] (2022/12/27)

### Features

- First version deliver for inner test.