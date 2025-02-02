'use strict';

(function () {
    const vscode = acquireVsCodeApi();

    const familyItems = document.getElementsByClassName('detail-family');
    if (familyItems) {
        for (const item of familyItems) {
            item.addEventListener('click', () => {
                const familystr = item.getAttribute('data-family');
                vscode.postMessage({ type: 'familySelected', familystr });     
                const oldseleds=document.getElementsByClassName('detail-family-selected');
                for (const elem of oldseleds) {
                    elem.className='detail-family';
                }
                item.className = 'detail-family-selected';
            });
        }
    } 

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

    const cleartns = document.getElementsByClassName('codicon codicon-clear-all');
    if (cleartns) {
        for (const btn of cleartns) {
            if (btn) {
                btn.addEventListener('click', () => {
                    const filterinput = document.getElementById('sidebar-filter-input');
                    if (filterinput) {
                        filterinput.value = '';
                        sidebar_deviceFilterFunc('');
                    }
                });
            }
        }
    }

    const filterinput = document.getElementById('sidebar-filter-input');
    if (filterinput) {
        filterinput.addEventListener('change', () => {
            if (filterinput.value !== undefined) {
                const filterval = filterinput.value.toLowerCase();
                sidebar_deviceFilterFunc(filterval);
            }
        });
    }

}());


function sidebar_deviceFilterFunc(filterval) {
    //const filterval = filterinput.value.toLowerCase();
    const deviceList = document.getElementById("sidebar_deviceList");
    if (deviceList) {
        if (deviceList.hasChildNodes()) {
            for (const child of deviceList.children) {
                const items = child.querySelectorAll('label');
                let bManuFHidden = true;
                let p_subF = undefined;
                let p_Family = undefined;
                let familyMap = new Map();
                let subFamilyMap = new Map();
                for (const item of items) {
                    let bDevHidden = true;
                    const p_dev = item.parentElement;
                    if (p_dev) {
                        let parentElem = p_dev.parentElement;
                        // eslint-disable-next-line no-constant-condition
                        while (true) {
                            if (parentElem) {
                                // if (parentElem.parentElement?.tagName) {
                                //     console.log(parentElem.parentElement.tagName);
                                // }
                                switch (parentElem.className) {
                                    case 'detail-family':
                                        if (parentElem.parentElement?.tagName === 'LI') {
                                            p_Family = parentElem.parentElement;
                                        } else {
                                            p_Family = parentElem;
                                        }
                                        break;
                                    case 'detail-subfamily':
                                        if (parentElem.parentElement?.tagName === 'LI') {
                                            p_subF = parentElem.parentElement;
                                        } else {
                                            p_subF = parentElem;
                                        }
                                        break;
                                }
                                parentElem = parentElem.parentElement;
                            }
                            else {
                                break;
                            }
                        }
                        //p_dev.hidden = bDevHidden;
                        if (filterval === '') {
                            bDevHidden = false;
                            bManuFHidden = false;
                        }
                        else {
                            if (item.innerText) {
                                const labelval = item.innerText.toLowerCase();
                                if (labelval.includes(filterval)) {
                                    bDevHidden = false;
                                    bManuFHidden = false;
                                }
                            }
                        }
                        p_dev.hidden = bDevHidden;
                        if (p_Family) {
                            if (!familyMap.has(p_Family)) {
                                familyMap.set(p_Family, bDevHidden);
                            }
                            else if (familyMap.get(p_Family) !== bDevHidden) {
                                if (!bDevHidden)
                                    familyMap.set(p_Family, bDevHidden);
                            }
                        }
                        if (p_subF) {
                            if (!subFamilyMap.has(p_subF)) {
                                subFamilyMap.set(p_subF, bDevHidden);
                            }
                            else if (subFamilyMap.get(p_subF) !== bDevHidden) {
                                if (!bDevHidden)
                                    subFamilyMap.set(p_subF, bDevHidden);
                            }
                        }
                    }
                }
                subFamilyMap.forEach((value, key) => {
                    key.hidden = value;
                });
                familyMap.forEach((value, key) => {
                    key.hidden = value;
                });
                if (bManuFHidden) {
                    child.hidden = true;
                }
                else {
                    child.hidden = false;
                }
            }
        }
    }
}

