# MIPS Studio

MIPS Studio is a extension of VS Code, for Build and Debug C/C++ project that run in MIPS cores.


## How to use

- You can create solution/projects，configure them and then build them, and debug within the vscode.

### Create Project

Click the "Create a C/C++ Project" link from the MIPS Studio's StartPage.

- `ToolChains`: You can set your local machine toolchains info by input in  `vscode settings`--`Extensions`--`MIPS Studio`--`ToolChains`. 
  Or you can input the command `MIPS Studio: ToolChains Settings` at Command Palette, and then Click the AddItem to add a config.

### Add Files to Project

- You can add existing files to your project by click the button `Add existing files to Project` at the ProjectView's title zone.
- You can add new file to your project by click the button `Create new File in Project` at the ProjectView's Dir.

### Config the Project

- You can click the buttuon `Settings` at the SolutionView or input the command `MIPS Stduio: Project settings` at Command Palette,  change the settings of the Project, such as Device target、Compiler options、Link options、Output options etc.

### Build the Project

- You can click the buttuon `Build` at the SolutionView or click the icon for `Build Project` at the ProjectView's title zone, to Build the project.
- You can select `clean Project` or `Compile Only` or `Link Only` at the SolutionView.
- You can also compile a C/C++ file by click the `Compile Src File` at the ProjectView.

### Debug the Project

- You can debug your project in the vscode, Debugging on SOC target device (real hardware or FPGA) connected via GDB and OpenOCD, Supports Debugging Remote Programs, just set the IP and port of the remote target machine.
- You can input the addr and size, then click the buttuon `ReadMemory` at the MemoryView while in debug Mode.
- You can select memeory data to copy in system clipboard.
- Now You can click "Modify it" to Change the data also.
- Not only for Mips C code project, also You can use the memory function in debug your C/C++ code that for Windows env (cppvsdbg also).

<img alt="view memory" src="https://raw.githubusercontent.com/bingfao/newFlow/main/dbgMem.png">

## Display Device Peripherals

- You can add Device Peripherals config file (a file that descipt the registers and fields of each peripheral in device, just like svd file).
- When in debug mode, You can find a view named "Peripherals", and then You can see the details of registers and fields in real-time, also You can Modify the filed values.

<img alt="view memory" src="https://raw.githubusercontent.com/bingfao/newFlow/main/dbgPeripsView.png">

### SDK Package

- You can add SDKs from different vendors, The function is provided from Version 0.0.34. Each manufacturer can generate it's own SDK package by use the command `MIPS Studio: Package Edit`,  add device details by add Family -- Add SubFamily -- Add Device -- Add Processor / Add Memory Info,  add component items with files and condition defined. Manufacturer can use `Generate Package` to get a SDK package which other users can install on use the command  `MIPS Studio: sdkPackage Info`.

### Software Components
- After install some packages, you can add software component for your project. Use the command `MIPS Studio: Manage Soft Components` or click the icon on the solution view, you can get the different components fit for you device, select them that you want to add to the project, and you will find the files of the component will be copyed to your project now.

## Contact US

- You can e-mail to <binga.gao@cipunited.com>, Feedback your comments and ideas. 