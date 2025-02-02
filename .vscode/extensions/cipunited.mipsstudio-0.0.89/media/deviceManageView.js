'use strict';

(function () {
    const vscode = acquireVsCodeApi();

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

}());


