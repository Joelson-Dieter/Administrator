'use strict';

(function () {
    const vscode = acquireVsCodeApi();

    window.addEventListener('message', e => {
        const msg = e.data;
        //console.log(msg);
        if (msg.type === 'BrowsePath') {
            if (msg.index && msg.path) {
                const strid = 'PathValue_' + msg.index;
                const elem = document.getElementById(strid);
                if (elem) {
                    elem.value = msg.path;
                }
            }
        }
    });

    const btns = document.getElementsByClassName("setting-list-row");
    if (btns) {
        for (const btn of btns) {
            if (btn) {
                btn.addEventListener('mouseover', () => {
                    for (const child of btn.children) {
                        const classname = child.getAttribute("class");
                        if ('monaco-action-bar' === classname) {
                            //console.log(child);
                            child.style.visibility = 'visible';
                        }
                    }
                });
                btn.addEventListener('mouseleave', () => {
                    for (const child of btn.children) {
                        const classname = child.getAttribute("class");
                        if ('monaco-action-bar' === classname) {
                            //console.log(child);
                            child.style.visibility = 'hidden';
                        }
                    }
                });
            }
        }
    }


    const editbtns = document.getElementsByClassName('codicon codicon-edit');
    if (editbtns) {
        for (const btn of editbtns) {
            if (btn) {
                btn.addEventListener('click', () => {
                    //查找到list的title，以及data-index，然后postmessage
                    let parentElem = btn.parentElement;
                    let parentListRow = undefined;
                    let parentListDiv = undefined;
                    // eslint-disable-next-line no-constant-condition
                    while (true) {
                        if (parentElem) {
                            switch (parentElem.className) {
                                case 'setting-list-row':
                                    parentListRow = parentElem;
                                    break;
                                case 'setting-item-control':
                                    parentListDiv = parentElem;
                                    break;
                            }
                            parentElem = parentElem.parentElement;
                        }
                        else {
                            break;
                        }
                    }
                    if (parentListRow && parentListDiv) {
                        const data_index = parentListRow.getAttribute('data-index');
                        const elem_title = parentListDiv.getAttribute('title');
                        vscode.postMessage({ type: 'listRowEdit', data_index, elem_title });
                    }
                });
            }
        }
    }

    const addbtns = document.getElementsByClassName('monaco-text-button setting-list-addButton');
    if (addbtns) {
        for (const btn of addbtns) {
            if (btn) {
                btn.addEventListener('click', () => {
                    //查找到list的title，以及data-index，然后postmessage
                    let parentElem = btn.parentElement;
                    let parentListDiv = undefined;
                    // eslint-disable-next-line no-constant-condition
                    while (true) {
                        if (parentElem) {
                            switch (parentElem.className) {
                                case 'setting-item-control':
                                    parentListDiv = parentElem;
                                    break;
                            }
                            parentElem = parentElem.parentElement;
                        }
                        else {
                            break;
                        }
                    }
                    if (parentListDiv) {
                        const elem_title = parentListDiv.getAttribute('title');
                        vscode.postMessage({ type: 'listAddRow', elem_title });
                    }
                });
            }
        }
    }

    //monaco-text-button setting-list-ok-button
    const oktns = document.getElementsByClassName('monaco-text-button setting-list-ok-button');
    if (oktns) {
        for (const btn of oktns) {
            if (btn) {
                btn.addEventListener('click', () => {
                    //查找到list的title，以及data-index，然后postmessage
                    let parentElem = btn.parentElement;
                    let parentListRow = undefined;
                    let parentListDiv = undefined;
                    let parentListNewRow = undefined;
                    // eslint-disable-next-line no-constant-condition
                    while (true) {
                        if (parentElem) {
                            switch (parentElem.className) {
                                case 'setting-item-control':
                                    parentListDiv = parentElem;
                                    break;
                                case 'setting-list-row':
                                    parentListRow = parentElem;
                                    break;
                                case 'setting-list-new-row':
                                    parentListNewRow = parentElem;
                                    break;
                            }
                            parentElem = parentElem.parentElement;
                        }
                        else {
                            break;
                        }
                    }
                    console.log('invalid value');
                    if (parentListDiv) {
                        const elem_title = parentListDiv.getAttribute('title');
                        if (parentListRow) {
                            const data_index = parentListRow.getAttribute('data-index');
                            const listItemValueLst = [];
                            //读取所有item内容
                            const allinputs = parentListRow.getElementsByTagName("input");
                            let bOk = true;
                            for (const e of allinputs) {
                                if (e.type === 'checkbox') {
                                    const v = e.checked ? 'true' : 'false';
                                    listItemValueLst.push(v);
                                }
                                else {
                                    //console.log(e.value);
                                    const val = e.value.trim();
                                    if (val) {
                                        listItemValueLst.push(val);
                                    }
                                    else {
                                        e.style = 'border: solid 1px red;';
                                        bOk = false;
                                        break;
                                    }
                                }
                            }
                            if (bOk) {
                                vscode.postMessage({ type: 'listRowEditOk', data_index, elem_title, listItemValueLst });
                            }
                            else {
                                return;
                            }
                        }
                        else if (parentListNewRow) {
                            //读取所有item内容
                            const listItemValueLst = [];
                            const allinputs = parentListNewRow.getElementsByTagName("input");
                            let bOk = true;
                            for (const e of allinputs) {
                                if (e.type === 'checkbox') {
                                    const v = e.checked ? 'true' : 'false';
                                    listItemValueLst.push(v);
                                }
                                else {
                                    //console.log(e.value);
                                    const val = e.value.trim();
                                    if (val) {
                                        listItemValueLst.push(val);
                                    }
                                    else {
                                        e.style = 'border: solid 1px red;';
                                        bOk = false;
                                        break;
                                    }
                                }
                            }
                            if (bOk) {
                                vscode.postMessage({ type: 'listNewRowOk', elem_title, listItemValueLst });
                            }
                            else {
                                return;
                            }
                        }
                    }
                });
            }
        }
    }

    const canceltns = document.getElementsByClassName('monaco-text-button setting-list-cacel-button');
    if (canceltns) {
        for (const btn of canceltns) {
            if (btn) {
                btn.addEventListener('click', () => {
                    //查找到list的title，以及data-index，然后postmessage
                    let parentElem = btn.parentElement;
                    let parentListRow = undefined;
                    let parentListDiv = undefined;
                    let parentListNewRow = undefined;
                    // eslint-disable-next-line no-constant-condition
                    while (true) {
                        if (parentElem) {
                            switch (parentElem.className) {
                                case 'setting-item-control':
                                    parentListDiv = parentElem;
                                    break;
                                case 'setting-list-row':
                                    parentListRow = parentElem;
                                    break;
                                case 'setting-list-new-row':
                                    parentListNewRow = parentElem;
                                    break;
                            }
                            parentElem = parentElem.parentElement;
                        }
                        else {
                            break;
                        }
                    }
                    if (parentListDiv) {
                        const elem_title = parentListDiv.getAttribute('title');
                        if (parentListRow) {
                            const data_index = parentListRow.getAttribute('data-index');
                            vscode.postMessage({ type: 'listRowEditCancel', data_index, elem_title });
                        }
                        else if (parentListNewRow) {
                            //读取所有item内容
                            vscode.postMessage({ type: 'listNewRowCancel', elem_title });
                        }
                    }
                });
            }
        }
    }

    const rmbtns = document.getElementsByClassName('codicon codicon-remove');
    if (rmbtns) {
        for (const btn of rmbtns) {
            if (btn) {
                btn.addEventListener('click', () => {
                    //查找到list的title，以及data-index，然后postmessage
                    let parentElem = btn.parentElement;
                    let parentListRow = undefined;
                    let parentListDiv = undefined;
                    // eslint-disable-next-line no-constant-condition
                    while (true) {
                        if (parentElem) {
                            switch (parentElem.className) {
                                case 'setting-list-row':
                                    parentListRow = parentElem;
                                    break;
                                case 'setting-item-control':
                                    parentListDiv = parentElem;
                                    break;
                            }
                            parentElem = parentElem.parentElement;
                        }
                        else {
                            break;
                        }
                    }
                    if (parentListRow && parentListDiv) {
                        const data_index = parentListRow.getAttribute('data-index');
                        const elem_title = parentListDiv.getAttribute('title');
                        vscode.postMessage({ type: 'listRowRemove', data_index, elem_title });
                    }
                });
            }
        }
    }

    const elem = document.getElementById('btnBrowseFile');
    if (elem) {
        elem.addEventListener('click', () => {
            const data_index = elem.getAttribute('data_index');
            vscode.postMessage({ type: 'BrowsePath', data_index });
        });
    }

}());


