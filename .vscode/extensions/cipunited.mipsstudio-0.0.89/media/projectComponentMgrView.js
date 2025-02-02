'use strict';


(function () {
    const vscode = acquireVsCodeApi();

    // Handle the message inside the webview
    window.addEventListener('message', event => {
        const message = event.data; // The JSON data our extension sent
        console.log(message);
        switch (message.type) {
            case 'changeItemMap':
                {
                    if (message.itemKeys && message.itemValues) {
                        const itemKeys = message.itemKeys;
                        const itemValues = message.itemValues;
                        console.log(itemKeys);
                        console.log(itemValues);
                        const len = itemKeys.length;
                        if (len === itemValues.length) {
                            for (let i = 0; i < len; ++i) {
                                itemMapCheckFunc(itemValues[i], itemKeys[i]);
                            }
                        }
                    }
                }
                break;
            case 'checkItemErrInfo':
                {
                    if (message.errinfo !== undefined) {
                        const errItem = document.getElementById('err-info');
                        if (errItem) {
                            errItem.innerText = message.errinfo;
                        }
                    }
                    if (message.d_index !== undefined) {
                        itemMapCheckFunc(false, message.d_index);
                    }
                }
                break;
            case 'ItemErrInfo':
                {
                    if (message.errinfo !== undefined) {
                        const errItem = document.getElementById('err-info');
                        if (errItem) {
                            errItem.innerText = message.errinfo;
                        }
                    }
                }
                break;
            case 'conditionInfo':
                {
                    if (message.conditionInfo !== undefined) {
                        const conditionItem = document.getElementById('condition-info');
                        if (conditionItem) {
                            conditionItem.innerText = message.conditionInfo;
                        }
                    }
                }
                break;
            case 'listRowChange':
                {
                    if (message.strhtml !== undefined) {
                        const list = document.getElementById('list-row-container');
                        if (list) {
                            list.innerHTML = message.strhtml;
                            listItemSelectedFunc(vscode, list);
                            EditControl_Func(vscode, list);
                        }
                    }
                }
                break;
        }
    });

    listItemSelectedFunc(vscode);

    const btns = document.getElementsByTagName("button");
    if (btns) {
        for (const btn of btns) {
            if (btn) {
                btn.addEventListener('click', () => {
                    vscode.postMessage({ type: 'btnClicked', 'elem_id': btn.id })
                });
            }
        }
    }




    const cleartns = document.getElementsByClassName('codicon codicon-clear-all');
    if (cleartns) {
        for (const btn of cleartns) {
            if (btn) {
                btn.addEventListener('click', () => {
                    const filterinput = document.getElementById('sidebar-filter-input');
                    if (filterinput) {
                        filterinput.value = '';
                        vscode.postMessage({ type: 'inputElemChanged', 'elem_id': 'sidebar-filter-input', 'elem_value': '' });
                    }
                });
            }
        }
    }

    EditControl_Func(vscode);

    // const filterinput = document.getElementById('sidebar-filter-input');
    // if (filterinput) {
    //     filterinput.addEventListener('change', () => {
    //         if (filterinput.value !== undefined) {
    //             const filterval = filterinput.value.toLowerCase();
    //             componentFilterFunc(filterval);
    //         }
    //     });
    // }

}());


function EditControl_Func(vscode, elemitem) {
    if (elemitem === undefined)
        elemitem = document;
    const inputElems = elemitem.getElementsByTagName('input');
    if (inputElems) {
        for (const elem of inputElems) {
            if (elem && elem.id) {
                elem.addEventListener('change', () => {
                    if (elem.type === 'checkbox' || elem.type === 'radio') {
                        const strValue = elem.checked ? 'checked' : '';
                        vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': strValue });
                    }
                    else if (elem.value !== undefined) {
                        vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': elem.value });
                    }
                });
            }
        }
    }
}

function listItemSelectedFunc(vscode, elemitem) {
    if (elemitem === undefined)
        elemitem = document;
    const compItems = elemitem.getElementsByClassName('setting-list-row');
    if (compItems) {
        for (const item of compItems) {
            item.addEventListener('click', () => {
                const data_index = item.getAttribute('data-index');
                vscode.postMessage({ type: 'list-row-selected', data_index });
                const oldseleds = elemitem.getElementsByClassName('setting-list-row selected');
                for (const elem of oldseleds) {
                    elem.className = 'setting-list-row';
                }
                item.className = 'setting-list-row selected';
            });
        }
    }
}

function itemMapCheckFunc(value, key) {
    const checkboxid = 'chk_component_' + key;
    const chkbox = document.getElementById(checkboxid);
    if (chkbox) {
        chkbox.checked = value;
    }
}



