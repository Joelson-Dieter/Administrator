'use strict';

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();
    // const { postMessage } = acquireVsCodeApi();

    const buttons = {
        'createProject': 'createProject',
        'buildProject': 'buildProject',
        'projSettings': 'projSettings',
        'debugtest': 'debugtest'
    };

    for (const [id, type] of Object.entries(buttons)) {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => vscode.postMessage({ type }));
        } else {
            console.log(`[solutionview.js]: Element #${id} not found!`);
        }
    }

    // let elem = document.getElementById('moreBuildOption');
    // if (elem) {
    //     elem.selectedIndex = -1;
    //     elem.onchange = function () {
    //         const buildOption = elem.value;
    //         let message = { type: 'buildOpion', datavalue: buildOption };
    //         vscode.postMessage(message);
    //         elem.selectedIndex = -1;
    //     }
    // }
    const selectElems = document.getElementsByTagName('select')
    if (selectElems) {
        for (const elem of selectElems) {
            if (elem && elem.id) {
                elem.onchange = function () {
                    const selindex = elem.selectedIndex;
                    if (elem.id === 'moreBuildOption') {
                        if(selindex !== 0) {
                            vscode.postMessage({ type: 'SelectElemChanged', 'elem_id': elem.id, 'elem_value': elem.value, selindex });
                        }
                        elem.selectedIndex = 0;
                    }
                    else{
                        vscode.postMessage({ type: 'SelectElemChanged', 'elem_id': elem.id, 'elem_value': elem.value, selindex });
                    }
                };
            }
        }
    }

    const elem = document.getElementById('AddProject');
    if (elem) {
        elem.addEventListener('click', () => {
            vscode.postMessage({ type: 'AddProject' });
        });
    }

}());


