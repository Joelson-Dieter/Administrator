'use strict';


// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();
    // Handle the message inside the webview
    window.addEventListener('message', event => {
        const message = event.data; // The JSON data our extension sent
        //console.log(message);
        switch (message.type) {
            case 'updateListRowElemInnerHtml':
                {
                    if (message.elem_id && typeof (message.strhtml) === 'string' && message.data_index) {
                        const e = document.getElementById(message.elem_id);
                        if (e) {
                            let bFind = false;
                            const rows = e.getElementsByClassName('setting-list-row Editing');
                            if (rows) {
                                for (const row of rows) {
                                    if (message.data_index === row.getAttribute('data-index')) {
                                        if (message.bChangeEditing) {
                                            row.className = 'setting-list-row';
                                        }
                                        row.innerHTML = message.strhtml;
                                        listRowEditBarFunc(row);
                                        EditControl_Func(vscode, row);
                                        addButtonClickEventHandle(vscode, row);
                                        bFind = true;
                                        break;
                                    }
                                }
                            }
                            if (!bFind) {
                                const rows = e.getElementsByClassName('setting-list-row');
                                if (rows) {
                                    for (const row of rows) {
                                        if (message.data_index === row.getAttribute('data-index')) {
                                            row.innerHTML = message.strhtml;
                                            listRowEditBarFunc(row);
                                            EditControl_Func(vscode, row);
                                            addButtonClickEventHandle(vscode, row);
                                            bFind = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 'updateElemInnerHtml':
                {
                    if (message.elem_id && typeof (message.strhtml) === 'string') {
                        const e = document.getElementById(message.elem_id);
                        if (e) {
                            e.innerHTML = message.strhtml;
                            listRowEditBarFunc(e);
                            EditControl_Func(vscode, e);
                            addButtonClickEventHandle(vscode, e);
                        }
                    }
                }
                break;
            case 'updateElemValue':
                {
                    if (message.elem_id && message.elem_value !== undefined) {
                        const e = document.getElementById(message.elem_id);
                        if (e) {
                            e.value = message.elem_value;
                        }
                    }
                }
                break;
            case 'updateSelectElemValues':
                {
                    if (message.elem_id && message.optionValues) {
                        const sel_item = document.getElementById(message.elem_id);
                        if (sel_item) {
                            for (const option of sel_item.options) {
                                if (message.optionValues.includes(option.value)) {
                                    option.selected = true;
                                }
                                else {
                                    option.selected = false;
                                }
                            }
                        }
                    }
                }
                break;
            // case 'BrowseFile':
            //     {
            //         if (message.FilePath && message.valueid) {
            //             const e = document.getElementById(message.valueid);
            //             if (e) {
            //                 e.value = message.FilePath;
            //             }
            //         }
            //     }
            //     break;
            case 'BrowsePath':
                {
                    if (message.valueid && message.path) {
                        const elem = document.getElementById(message.valueid);
                        if (elem) {
                            elem.value = message.path;
                        }
                    }
                }
                break;
            case 'disableDetailItems':
                {
                    if (message.title) {
                        const elem = document.getElementById(message.title);
                        if (elem) {
                            let elems = elem.getElementsByTagName('input');
                            for (const e of elems) {
                                e.disabled = true;
                            }
                            elems = elem.getElementsByTagName('button');
                            for (const e of elems) {
                                e.disabled = true;
                            }
                            elems = elem.getElementsByTagName('select');
                            for (const e of elems) {
                                e.disabled = true;
                            }
                            const listRows = elem.getElementsByClassName('setting-list-row');
                            for (const e of listRows) {
                                e.className = 'setting-list-row disabled';
                            }
                        }
                        if (elem.tagName === 'DETAILS')
                            elem.open = false;
                    }
                }
                break;
            case 'enableElem':
                {
                    if (message.elem_id) {
                        const elem = document.getElementById(message.elem_id);
                        if (elem) {
                            if (message.enableValue && message.enableValue === 'false')
                                elem.disabled = true;
                            else
                                elem.disabled = false;
                        }
                    }
                }
                break;
            case 'enableDetailItems':
                {
                    if (message.title) {
                        const elem = document.getElementById(message.title);
                        if (elem) {
                            const childDetails = elem.getElementsByTagName('details');
                            let childinputs = [];
                            let childButtons = [];
                            let childSelects = [];
                            let childListRows = [];
                            for (const e of childDetails) {
                                const inputs = Array.from(e.getElementsByTagName('input'));
                                childinputs = childinputs.concat(inputs);
                                const buttons = Array.from(e.getElementsByTagName('button'));
                                childButtons = childButtons.concat(buttons);
                                const sels = Array.from(e.getElementsByTagName('select'));
                                childSelects = childSelects.concat(sels);
                                const listRows = Array.from(e.getElementsByClassName('setting-list-row'));
                                childListRows = childListRows.concat(listRows);
                            }
                            let elems = elem.getElementsByTagName('input');
                            for (const e of elems) {
                                if (!childinputs.includes(e))
                                    e.disabled = false;
                            }
                            elems = elem.getElementsByTagName('button');
                            for (const e of elems) {
                                if (!childButtons.includes(e))
                                    e.disabled = false;
                            }
                            elems = elem.getElementsByTagName('select');
                            for (const e of elems) {
                                if (!childSelects.includes(e))
                                    e.disabled = false;
                            }
                            const lists = elem.getElementsByClassName('setting-list-row disabled');
                            for (const e of lists) {
                                if (!childListRows.includes(e))
                                    e.className = 'setting-list-row';
                            }
                            if (elem.tagName === 'DETAILS')
                                elem.open = true;
                        }
                    }
                }
                break;
        }
    });




    listRowEditBarFunc();



    const details = document.getElementsByTagName('details')
    for (const elem of details) {
        if (elem && elem.id) {
            elem.addEventListener("toggle", () => {
                //console.log(elem);
                const openStatus = elem.open ? 'true' : 'false';
                vscode.postMessage({ type: 'detailElemChanged', 'elem_id': elem.id, 'elem_value': openStatus });
            });
        }
    }




    EditControl_Func(vscode);

    // const addbtns = document.getElementsByClassName('monaco-text-button setting-list-addButton');
    // if (addbtns) {
    //     for (const btn of addbtns) {
    //         if (btn) {
    //             btn.addEventListener('click', () => {
    //                 //查找到list的title，以及data-index，然后postmessage
    //                 let parentElem = btn.parentElement;
    //                 let parentListDiv = undefined;
    //                 // eslint-disable-next-line no-constant-condition
    //                 while (true) {
    //                     if (parentElem) {
    //                         switch (parentElem.className) {
    //                             case 'setting-item-control':
    //                                 parentListDiv = parentElem;
    //                                 break;
    //                         }
    //                         parentElem = parentElem.parentElement;
    //                     }
    //                     else {
    //                         break;
    //                     }
    //                 }
    //                 if (parentListDiv) {
    //                     const elem_title = parentListDiv.getAttribute('title');
    //                     vscode.postMessage({ type: 'listAddRow', elem_title });
    //                 }
    //             });
    //         }
    //     }
    // }

    addButtonClickEventHandle(vscode);

}());




function addButtonClickEventHandle(vscode, elemitem) {
    if (elemitem === undefined) {
        let elems = document.getElementsByName('btnBrowsePath');
        if (elems) {
            for (const elem of elems) {
                elem.addEventListener('click', () => {
                    const valueid = elem.getAttribute('valueid');
                    vscode.postMessage({ type: 'BrowsePath', valueid });
                });
            }
        }

        elems = document.getElementsByName('btnBrowseFile');
        if (elems) {
            for (const elem of elems) {
                elem.addEventListener('click', () => {
                    const valueid = elem.getAttribute('valueid');
                    vscode.postMessage({ type: 'BrowseFile', valueid });
                });
            }
        }
        const clkbtns = document.getElementsByClassName('monaco-text-button');
        if (clkbtns) {
            for (const elem of clkbtns) {
                if (elem && elem.id) {
                    elem.addEventListener('click', () => {
                        //查找到list的title，以及data-index，然后postmessage
                        vscode.postMessage({ type: 'buttonClickedOn', elem_id: elem.id });
                    });
                }
            }
        }
    }
    else {
        const clkbtns = elemitem.getElementsByClassName('monaco-text-button');
        if (clkbtns) {
            for (const elem of clkbtns) {
                if (elem) {
                    if (elem.id) {
                        elem.addEventListener('click', () => {
                            //查找到list的title，以及data-index，然后postmessage
                            vscode.postMessage({ type: 'buttonClickedOn', elem_id: elem.id });
                        });
                    }
                    else {
                        const valueid = elem.getAttribute('valueid');
                        if (elem.name === 'btnBrowseFile') {
                            elem.addEventListener('click', () => {
                                vscode.postMessage({ type: 'BrowseFile', valueid });
                            });
                        }
                        else if (elem.name === 'btnBrowsePath') {
                            elem.addEventListener('click', () => {
                                vscode.postMessage({ type: 'BrowsePath', valueid });
                            });
                        }
                    }
                }
            }
        }
    }

}

function listRowEditBarFunc(elemitem) {
    if (elemitem === undefined)
        elemitem = document;
    const rows = elemitem.getElementsByClassName("setting-list-row");
    if (rows) {
        for (const row of rows) {
            if (row) {
                row.addEventListener('mouseover', () => {
                    if (row.className === 'setting-list-row') {
                        for (const child of row.children) {
                            const classname = child.getAttribute("class");
                            if ('monaco-action-bar' === classname) {
                                //console.log(child);
                                child.style.visibility = 'visible';
                            }
                        }
                    }
                });
                row.addEventListener('mouseleave', () => {
                    for (const child of row.children) {
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
}

function EditControl_Func(vscode, elemitem) {
    if (elemitem === undefined)
        elemitem = document;
    const inputElems = elemitem.getElementsByTagName('input')
    if (inputElems) {
        for (const elem of inputElems) {
            if (elem && elem.id) {
                elem.addEventListener('change', () => {
                    if (elem.type === 'checkbox' || elem.type === 'radio') {
                        const strValue = elem.checked ? 'checked' : '';
                        vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': strValue });
                        if (elem.type === 'checkbox') {
                            //console.log(elem);
                            const group = elem.getAttribute('data-group');
                            if (group === 'condition') {
                                let el = elem.nextElementSibling;
                                while (el) {
                                    if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                                        el.hidden = !elem.checked;
                                    }
                                    el = el.nextElementSibling;
                                }
                            }
                        }
                    }
                    else if (elem.value !== undefined) {
                        elem.value = elem.value.trim();
                        vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': elem.value });
                    }
                });
            }
        }
    }

    const selectElems = elemitem.getElementsByTagName('select')
    if (selectElems) {
        for (const elem of selectElems) {
            if (elem && elem.id) {
                elem.onchange = function () {
                    //const selindex = elem.selectedIndex;
                    let collection = elem.selectedOptions;
                    let output = '';
                    if (collection) {
                        let nCount = collection.length;
                        for (let i = 0; i < nCount; i++) {
                            if (i !== 0)
                                output += '##';
                            output += collection[i].label;
                        }
                    }
                    vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': output });
                };
            }
        }
    }

    const textElems = elemitem.getElementsByTagName('textarea')
    if (textElems) {
        for (const elem of textElems) {
            if (elem && elem.id && !elem.readOnly) {
                elem.onchange = function () {
                    elem.value = elem.value.trim();
                    vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': elem.value });
                };
            }
        }
    }

    //monaco-text-button setting-list-ok-button
    const oktns = elemitem.getElementsByClassName('monaco-text-button setting-list-ok-button');
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
                                case 'setting-list-row Editing':
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
                    //console.log('invalid value');
                    if (parentListDiv) {
                        const elem_title = parentListDiv.getAttribute('title');
                        if (parentListRow) {
                            const data_index = parentListRow.getAttribute('data-index');
                            const listItemValueLst = [];
                            //读取所有item内容
                            const allEditItems = parentListRow.getElementsByClassName("setting-list-object-edit-item");
                            let bOk = true;
                            for (const e of allEditItems) {
                                if (e.children.length >= 1) {
                                    const childEdit_ = e.children[0];
                                    if (childEdit_.type === 'checkbox') {
                                        const v = childEdit_.checked ? 'true' : 'false';
                                        listItemValueLst.push(v);
                                    }
                                    else {
                                        //listItemValueLst.push(e.value);
                                        const val = childEdit_.value.trim();
                                        //if (val) {
                                        listItemValueLst.push(val);
                                        //}
                                        // else {
                                        //     childEdit_.style = 'border: solid 1px red;';
                                        //     bOk = false;
                                        //     break;
                                        // }
                                    }
                                }
                                else {
                                    e.style = 'border: solid 1px red;';
                                    bOk = false;
                                    break;
                                }
                            }
                            if (bOk) {
                                vscode.postMessage({ type: 'listRowEditOk', data_index, elem_title, listItemValueLst });
                            }
                            else {
                                return;
                            }
                            //vscode.postMessage({ type: 'listRowEditOk', data_index, elem_title, listItemValueLst });
                        }
                        else if (parentListNewRow) {
                            //读取所有item内容
                            const listItemValueLst = [];
                            const allEditItems = parentListNewRow.getElementsByClassName("setting-list-object-edit-item");
                            let bOk = true;
                            for (const e of allEditItems) {
                                if (e.children.length >= 1) {
                                    const childEdit_ = e.children[0];
                                    if (childEdit_.type === 'checkbox') {
                                        const v = childEdit_.checked ? 'true' : 'false';
                                        listItemValueLst.push(v);
                                    }
                                    else {
                                        //listItemValueLst.push(e.value);
                                        const val = childEdit_.value.trim();
                                        //if (val) {
                                        listItemValueLst.push(val);
                                        // }
                                        // else {
                                        //     childEdit_.style = 'border: solid 1px red;';
                                        //     bOk = false;
                                        //     break;
                                        // }
                                    }
                                }
                                else {
                                    e.style = 'border: solid 1px red;';
                                    bOk = false;
                                    break;
                                }
                            }
                            //vscode.postMessage({ type: 'listNewRowOk', elem_title, listItemValueLst });
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

    const canceltns = elemitem.getElementsByClassName('monaco-text-button setting-list-cacel-button');
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
                                case 'setting-list-row Editing':
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

    const rmbtns = elemitem.getElementsByClassName('codicon codicon-remove');
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
                                case 'setting-list-row Editing':
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

    const editbtns = elemitem.getElementsByClassName('codicon codicon-edit');
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
                        const elems = parentListDiv.getElementsByClassName('setting-list-row Editing');
                        for (const e of elems) {
                            e.className = 'setting-list-row';
                        }
                        vscode.postMessage({ type: 'listRowEdit', data_index, elem_title });
                        parentListRow.className = 'setting-list-row Editing';
                    }
                });
            }
        }
    }
}

