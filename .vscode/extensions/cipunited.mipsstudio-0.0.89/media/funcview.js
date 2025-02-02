'use strict';

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();
    // const { postMessage } = acquireVsCodeApi();

    const buttons = {
        // 'compilefile': 'compilefile',
        // 'buildMips': 'buildMips',
        // 'buildStm32': 'buildStm32',
        //'debug': 'debug-watch',
        'startOpenOCD': 'startOpenOCD',
        //'setMipsGccPath': 'setMipsGccPath',
        //'setOpenOCDPath': 'setOpenOCDPath',
        // 'setArmGccPath': 'setArmGccPath',
        'initproject': 'initproject',
        // 'openprojectsetting': 'openprojectsetting',
        // 'CompileOnly':'CompileOnly',
        // 'LinkOnly':'LinkOnly',
        // 'BuildInOneStep':'BuildInOneStep',
        'flashDownload':'flashDownload',
        //'viewExclude':'viewExclude',
        'ImportFromMakefile':'ImportFromMakefile'
    };

    for (const [id, type] of Object.entries(buttons)) {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => vscode.postMessage({ type }));
        } else {
            console.error(`[funcview.js]: Element #${id} not found!`);
        }
    }
    const chkbox=document.getElementById("useTerminal");
	if (chkbox) {
		chkbox.addEventListener('change', (ev) => {
			const bChecked = ev.target.checked;
			vscode.postMessage({'type':'useTerminal','checked':bChecked});
		});
	}

}());


