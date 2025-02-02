'use strict';

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();
    // const { postMessage } = acquireVsCodeApi();

    window.addEventListener('message', event => {
        const message = event.data; // The JSON data our extension sent
        //console.log(message);
        switch (message.type) {
            case 'perip_item_value':
                if (message.strhtml !== undefined && message.perip_name) {
                    const perip_elem = document.getElementById(message.perip_name);
                    if (perip_elem) {
                        perip_elem.innerHTML = message.strhtml;
                        addPeripItemhandler(perip_elem, vscode);
                    }
                }
                break;
            case 'peripDetails_value':
                if (message.strhtml !== undefined) {
                    const start = Date.now();
                    const peripDetails_elem = document.getElementById('peripDetails');
                    peripDetails_elem.innerHTML = message.strhtml;
                    if (message.perip_name) {
                        const perip_elem = document.getElementById(message.perip_name);
                        if (perip_elem) {
                            addPeripItemhandler(perip_elem, vscode);
                        }
                    }
                    else {
                        const perip_elems = peripDetails_elem.getElementsByClassName('peripItemContent');
                        if(perip_elems){
                            for (const p of perip_elems) {
                                addPeripItemhandler(p, vscode);
                            }
                        }
                    }
                    console.log(`Time elapsed: ${Date.now() - start} ms`);
                }
                break;
            case 'PeripItemToggled':
                if (message.perip_name) {
                    const perip_elem = document.getElementById('detail_' + message.perip_name);
                    if (perip_elem) {
                        perip_elem.open = false;
                    }
                }
                break;
            case 'PeripSwitch_value':
                {
                    if (message.strhtml !== undefined) {
                        const switch_elem = document.getElementById('PeripSwitchContainer');
                        if (switch_elem) {
                            switch_elem.innerHTML = message.strhtml;
                            const select_elems = switch_elem.getElementsByTagName("select");
                            addSelectHandler(select_elems, vscode);
                            const tab_elems = switch_elem.getElementsByClassName('tab-label');
                            addTabLabelHandler(tab_elems, vscode);
                            const tabClose_elems = switch_elem.getElementsByClassName('tab-label-close');
                            addTabCloseHandler(tabClose_elems, vscode);
                        }
                    }
                }
                break;
        }
    });


    const peripItems = document.getElementsByClassName("peripItem");
    if (peripItems) {
        for (const elem of peripItems) {
            elem.addEventListener("toggle", () => {
                vscode.postMessage({ type: 'peripItemToggled', 'elem_id': elem.id, 'elem_open': elem.open });
            });
        }
    }

    const regItems = document.getElementsByClassName("regsContainer");
    if (regItems) {
        for (const elem of regItems) {
            elem.addEventListener("toggle", () => {
                vscode.postMessage({ type: 'regItemToggled', 'elem_id': elem.id, 'elem_open': elem.open });
            });
        }
    }


    const inputElems = document.getElementsByTagName('input')
    addInputHandler(inputElems, vscode);
    // if (inputElems) {
    //     for (const elem of inputElems) {
    //         if (elem && elem.id) {
    //             elem.addEventListener('change', () => {
    //                 if (elem.type === 'checkbox' || elem.type === 'radio') {
    //                     if (elem.className === "switch-input") {
    //                         const pi = elem.id.lastIndexOf('_Switch');
    //                         if (pi !== -1) {
    //                             const p_name = elem.id.substring(0, pi);
    //                             const p_item = document.getElementById(p_name);
    //                             if (p_item) {
    //                                 const regItems = p_item.getElementsByClassName('regsContainer');
    //                                 if (regItems) {
    //                                     for (const r of regItems) {
    //                                         r.open = elem.checked;
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                     else {
    //                         const strValue = elem.checked ? '1' : '0';
    //                         vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': strValue });
    //                     }
    //                 }
    //                 else if (elem.value !== undefined) {
    //                     vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': elem.value });
    //                 }
    //             });
    //         }
    //     }
    // }

    const selectElems = document.getElementsByTagName('select')
    addSelectHandler(selectElems, vscode);


    const tab_elems = document.getElementsByTagName('tab-label')
    addTabLabelHandler(tab_elems, vscode);

    const tabClose_elems = document.getElementsByClassName('tab-label-close');
    addTabCloseHandler(tabClose_elems, vscode);

}());


function addPeripItemhandler(perip_elem, vscode) {
    const regItems = perip_elem.getElementsByClassName("regsContainer");
    if (regItems) {
        for (const elem of regItems) {
            elem.addEventListener("toggle", () => {
                vscode.postMessage({ type: 'regItemToggled', 'elem_id': elem.id, 'elem_open': elem.open });
            });
        }
    }

    const inputElems = perip_elem.getElementsByTagName('input');
    addInputHandler(inputElems, vscode);

    const selectElems = perip_elem.getElementsByTagName('select');
    if (selectElems) {
        for (const elem of selectElems) {
            if (elem && elem.id) {
                elem.onchange = function () {
                    const selindex = elem.selectedIndex;
                    vscode.postMessage({ type: 'SelectElemChanged', 'elem_id': elem.id, 'elem_value': elem.value, selindex });
                };
            }
        }
    }

    const btnElems = perip_elem.getElementsByClassName('btnregModifyApply');
    if (btnElems) {
        for (const elem of btnElems) {
            if (elem && elem.id) {
                elem.addEventListener('click', () => {
                    //console.log('regModifyApply: ' +  elem.id);
                    vscode.postMessage({ type: 'regModifyApply', 'elem_id': elem.id });
                });
            }
        }
    }
}

function addTabLabelHandler(tabElems, vscode) {
    if (tabElems) {
        for (const elem of tabElems) {
            if (elem && elem.id) {
                elem.addEventListener('click', (ev) => {
                    const e = ev.currentTarget;
                    console.log(e.id);
                    const tabitem = e.parentElement;
                    if (tabitem) {
                        if (!tabitem.className.includes('checked')) {
                            vscode.postMessage({ type: 'tabSelected', 'elem_id': e.id });
                            const checkedelems = document.getElementsByClassName('tab-item checked');
                            if (checkedelems) {
                                for (const e of checkedelems) {
                                    e.setAttribute("class", 'tab-item');
                                }
                            }
                            tabitem.setAttribute("class", 'tab-item checked');
                        }
                    }
                });
            }
        }
    }
}

function addTabCloseHandler(tabCloseElems, vscode) {
    if (tabCloseElems) {
        for (const elem of tabCloseElems) {
            if (elem) {
                elem.addEventListener('click', (ev) => {
                    const e = ev.currentTarget;
                    const tabitem = e.parentElement;
                    if (tabitem) {
                        const tablabel = tabitem.firstElementChild;
                        if (tablabel && tablabel.id) {
                            vscode.postMessage({ type: 'tabClosed', 'elem_id': tablabel.id });
                        }
                    }
                });
            }
        }
    }
}


function addSelectHandler(selectElems, vscode) {
    if (selectElems) {
        for (const elem of selectElems) {
            if (elem && elem.id) {
                if (elem.id === 'Perip-select') {
                    elem.onchange = function () {
                        if (elem.value) {
                            vscode.postMessage({ type: 'SelectedPerip', 'elem_id': elem.id, 'elem_value': elem.value });
                            elem.selectedIndex = 0;
                        }
                    };
                }
                else {
                    elem.onchange = function () {
                        const selindex = elem.selectedIndex;
                        vscode.postMessage({ type: 'SelectElemChanged', 'elem_id': elem.id, 'elem_value': elem.value, selindex });
                    };
                }
            }
        }
    }
}

function addInputHandler(inputElems, vscode) {
    if (inputElems) {
        for (const elem of inputElems) {
            if (elem && elem.id) {
                elem.addEventListener('change', () => {
                    if (elem.type === 'checkbox' || elem.type === 'radio') {
                        if (elem.className === "switch-input") {
                            const pi = elem.id.lastIndexOf('_Switch');
                            if (pi !== -1) {
                                const p_name = elem.id.substring(0, pi);
                                const p_item = document.getElementById(p_name);
                                if (p_item) {
                                    const regItems = p_item.getElementsByClassName('regsContainer');
                                    if (regItems) {
                                        for (const r of regItems) {
                                            r.open = elem.checked;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            const strValue = elem.checked ? '1' : '0';
                            vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': strValue });
                        }
                    }
                    else if (elem.value !== undefined) {
                        vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': elem.value });
                    }
                });
            }
        }
    }
}

