'use strict';

const actionItems = [
    'ItemTarget', 'ItemToolchains', 'ItemBuildOutput',
    'ItemCompile', 'ItemLinker', 'ItemDebug'
];

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();

    let curActiveIndex = 0;
    const swElem = document.getElementById('setingDetailActionBarSwitch');
    if (swElem) {
        curActiveIndex = parseInt(swElem.getAttribute('select_index'));
    }


    // Handle the message inside the webview
    window.addEventListener('message', event => {
        const message = event.data; // The JSON data our extension sent
        console.log(message);
        switch (message.type) {
            case 'ToolChainExeVersion':
                if (message.exeFlag && message.exeFileName && message.versionInfo) {
                    handleToolChainExeVersion(message.exeFlag, message.exeFileName, message.versionInfo);
                }
                break;
            case 'savedata':
                {
                    //基于当前的actionItem来保存用户已修改的数据
                    if (message.activeItem) {
                        const index = actionItems.indexOf(message.activeItem);
                        handleSavedata(index, vscode);
                    }
                }
                break;
            case 'BroweeOutPath':
                {
                    if (message.OutputPath) {
                        const e = document.getElementById('outputPath');
                        if (e) {
                            e.value = message.OutputPath;
                        }
                    }
                }
                break;
            case 'updateElemValue':
                {
                    if (message.elem_id && message.elem_value) {
                        const e = document.getElementById(message.elem_id);
                        if (e) {
                            e.value = message.elem_value;
                        }
                    }
                }
                break;
            case 'BrowseFile':
                {
                    if (message.FilePath && message.valueid) {
                        const e = document.getElementById(message.valueid);
                        if (e) {
                            e.value = message.FilePath;
                        }
                    }
                }
                break;
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
            case 'asmOptionChanged':
                {
                    const e = document.getElementById('allAsmOption');
                    if (e) {
                        e.value = message.option;
                    }
                }
                break;
            case 'cppOptionChanged':
                {
                    const e = document.getElementById('allCppOption');
                    if (e) {
                        e.value = message.option;
                    }
                }
                break;
            case 'linkerOptionChanged':
                {
                    const e = document.getElementById('allLinkerOption');
                    if (e) {
                        e.value = message.option;
                    }
                }
                break;
        }
    });


    for (let index = 0; index < actionItems.length; ++index) {
        const btn = document.getElementById(actionItems[index]);
        if (btn) {
            btn.addEventListener('click', () => {
                //先保存一下数据
                if (curActiveIndex !== index) {
                    handleSavedata(curActiveIndex, vscode);
                    vscode.postMessage({ type: 'actionItemClicked', actionItem: actionItems[index] });
                }
            });
        } else {
            console.error(`[projectConfigSettings.js]: Element #${actionItems[index]} not found!`);
        }
    }

    const e = document.getElementById('btnBrowseOutPath');
    if (e) {
        e.addEventListener('click', () => {
            vscode.postMessage({ type: 'BrowseOutPath' });
        });
    }


    let elems = document.getElementsByName('btnBrowseFile');
    if (elems) {
        for (const elem of elems) {
            elem.addEventListener('click', () => {
                const valueid = elem.getAttribute('valueid');
                vscode.postMessage({ type: 'BrowseFile', valueid });
            });
        }

    }

    elems = document.getElementsByName('btnBrowsePath');
    if (elems) {
        for (const elem of elems) {
            elem.addEventListener('click', () => {
                const valueid = elem.getAttribute('valueid');
                vscode.postMessage({ type: 'BrowsePath', valueid });
            });
        }
    }

    let elem = document.getElementById('btnEditToolChiansSetting');
    if (elem) {
        elem.addEventListener('click', () => {
            vscode.postMessage({ type: 'btnEditToolChiansSetting' });
        });
    }

    elem = document.getElementById('btnViewSetting');
    if (elem) {
        elem.addEventListener('click', () => {
            vscode.postMessage({ type: 'btnViewSetting' });
        });
    }
    
    elem = document.getElementById('btnRefreshOpenOCD');
    if (elem) {
        elem.addEventListener('click', () => {
            vscode.postMessage({ type: 'btnRefreshOpenOCD' });
        });
    }

    // const elem = document.getElementById('selectToolChainName');
    // if (elem) {
    //     elem.onchange = function () {
    //         const selindex = elem.selectedIndex;
    //         vscode.postMessage({ type: 'toolChainSelectChange', selindex });
    //     }
    // }

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

    const inputElems = document.getElementsByTagName('input')
    if (inputElems) {
        for (const elem of inputElems) {
            if (elem && elem.id) {
                elem.addEventListener('change', () => {
                    if (elem.type === 'checkbox' || elem.type === 'radio') {
                        const strValue = elem.checked ? 'checked' : '';
                        vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': strValue });
                        if (elem.id === 'chkOutputDasm') {
                            for (const e of inputElems) {
                                if (e.type === 'checkbox') {
                                    const group = e.getAttribute('data-group');
                                    if (group === 'chk_dasm') {
                                        e.disabled = !elem.checked;
                                    }
                                }
                            }
                        }
                        else if (elem.id === 'chkloadELF') {
                            let e = document.getElementById('btnBrowser_ElfFilePath');
                            if (e) {
                                e.disabled = !elem.checked;
                                const e_input = e.previousElementSibling;
                                if (e_input) {
                                    const e_n = e_input.previousElementSibling;
                                    if (e_n && e_n.tagName === 'LABEL') {
                                        if (e.disabled)
                                            e_n.className = 'smallLabel labeldisabled';
                                        else
                                            e_n.className = 'smallLabel';
                                    }
                                }
                            }
                            e = document.getElementById('chkloadAppAtStartUp');
                            if (e) {
                                e.disabled = !elem.checked;
                                const e_n = e.nextElementSibling;
                                if (e_n && e_n.tagName === 'LABEL') {
                                    if (e.disabled)
                                        e_n.className = 'labeldisabled';
                                    else
                                        e_n.className = 'label';
                                }
                                const e_l = document.getElementById('input_ElfLoadOffset');
                                if (e_l) {
                                    e_l.disabled = !e.checked;
                                    const e_n = e_l.previousElementSibling;
                                    if (e_n && e_n.tagName === 'LABEL') {
                                        if (e.disabled)
                                            e_n.className = 'smallLabel labeldisabled';
                                        else if (e.checked)
                                            e_n.className = 'smallLabel';
                                    }
                                }
                            }
                            e = document.getElementById('input_ElfFilePath');
                            if( e) {
                                e.disabled = !elem.checked;
                            }
                            e = document.getElementById('btnBrowser_BinFilePath');
                            if (e) {
                                e.disabled = elem.checked;
                                const e_input = e.previousElementSibling;
                                if (e_input) {
                                    const e_n = e_input.previousElementSibling;
                                    if (e_n && e_n.tagName === 'LABEL') {
                                        if (e.disabled)
                                            e_n.className = 'smallLabel labeldisabled';
                                        else
                                            e_n.className = 'smallLabel';
                                    }
                                }
                            }
                            e = document.getElementById('input_BinFilePath');
                            if( e) {
                                e.disabled = elem.checked;
                            }
                            e = document.getElementById('chkBinloadAppAtStartUp');
                            if (e) {
                                e.disabled = elem.checked;
                                const e_n = e.nextElementSibling;
                                if (e_n && e_n.tagName === 'LABEL') {
                                    if (e.disabled)
                                        e_n.className = 'labeldisabled';
                                    else
                                        e_n.className = 'label';
                                }
                                const e_l = document.getElementById('input_BinLoadOffset');
                                if (e_l) {
                                    e_l.disabled = !e.checked;
                                    const e_n = e_l.previousElementSibling;
                                    if (e_n && e_n.tagName === 'LABEL') {
                                        if (e.disabled)
                                            e_n.className = 'smallLabel labeldisabled';
                                        else if (e.checked)
                                            e_n.className = 'smallLabel';
                                    }
                                }
                            }
                        }
                        else if (elem.id === 'chkloadBin') {
                            let e = document.getElementById('btnBrowser_ElfFilePath');
                            if (e) {
                                e.disabled = elem.checked;
                                const e_input = e.previousElementSibling;
                                if (e_input) {
                                    const e_n = e_input.previousElementSibling;
                                    if (e_n && e_n.tagName === 'LABEL') {
                                        if (e.disabled)
                                            e_n.className = 'smallLabel labeldisabled';
                                        else
                                            e_n.className = 'smallLabel';
                                    }
                                }
                            }
                            e = document.getElementById('input_ElfFilePath');
                            if( e) {
                                e.disabled = elem.checked;
                            }
                            e = document.getElementById('chkloadAppAtStartUp');
                            if (e) {
                                e.disabled = elem.checked;
                                const e_n = e.nextElementSibling;
                                if (e_n && e_n.tagName === 'LABEL') {
                                    if (e.disabled)
                                        e_n.className = 'labeldisabled';
                                    else
                                        e_n.className = 'label';
                                }
                                const e_l = document.getElementById('input_ElfLoadOffset');
                                if (e_l) {
                                    e_l.disabled = !e.checked;
                                    const e_n = e_l.previousElementSibling;
                                    if (e_n && e_n.tagName === 'LABEL') {
                                        if (e.disabled)
                                            e_n.className = 'smallLabel labeldisabled';
                                        else if (e.checked)
                                            e_n.className = 'smallLabel';
                                    }
                                }
                            }
                            e = document.getElementById('btnBrowser_BinFilePath');
                            if (e) {
                                e.disabled = !elem.checked;
                                const e_input = e.previousElementSibling;
                                if (e_input) {
                                    const e_n = e_input.previousElementSibling;
                                    if (e_n && e_n.tagName === 'LABEL') {
                                        if (e.disabled)
                                            e_n.className = 'smallLabel labeldisabled';
                                        else
                                            e_n.className = 'smallLabel';
                                    }
                                }
                            }
                            e = document.getElementById('input_BinFilePath');
                            if( e) {
                                e.disabled = !elem.checked;
                            }
                            e = document.getElementById('chkBinloadAppAtStartUp');
                            if (e) {
                                e.disabled = !elem.checked;
                                const e_n = e.nextElementSibling;
                                if (e_n && e_n.tagName === 'LABEL') {
                                    if (e.disabled)
                                        e_n.className = 'labeldisabled';
                                    else
                                        e_n.className = 'label';
                                }
                                const e_l = document.getElementById('input_BinLoadOffset');
                                if (e_l) {
                                    e_l.disabled = !e.checked;
                                    const e_n = e_l.previousElementSibling;
                                    if (e_n && e_n.tagName === 'LABEL') {
                                        if (e.disabled)
                                            e_n.className = 'smallLabel labeldisabled';
                                        else if (e.checked)
                                            e_n.className = 'smallLabel';
                                    }
                                }
                            }
                        }
                        else if (elem.id === 'chkloadAppAtStartUp') {
                            const e_l = document.getElementById('input_ElfLoadOffset');
                            if (e_l) {
                                e_l.disabled = !elem.checked;
                                const e_n = e_l.previousElementSibling;
                                if (e_n && e_n.tagName === 'LABEL') {
                                    if (elem.checked)
                                        e_n.className = 'smallLabel';
                                    else
                                        e_n.className = 'smallLabel labeldisabled';
                                }
                            }
                        }
                        else if (elem.id === 'chkBinloadAppAtStartUp') {
                            const e_l = document.getElementById('input_BinLoadOffset');
                            if (e_l) {
                                e_l.disabled = !elem.checked;
                                const e_n = e_l.previousElementSibling;
                                if (e_n && e_n.tagName === 'LABEL') {
                                    if (elem.checked)
                                        e_n.className = 'smallLabel';
                                    else
                                        e_n.className = 'smallLabel labeldisabled';
                                }
                            }
                        }
                    }
                    else if (elem.value !== undefined) {
                        vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': elem.value });
                    }
                });
            }
        }
    }

    const details = document.getElementsByTagName('details')
    for (const elem of details) {
        if (elem && elem.id) {
            elem.addEventListener("toggle", () => {
                console.log(elem);
                const openStatus = elem.open ? 'true' : 'false';
                vscode.postMessage({ type: 'detailElemChanged', 'elem_id': elem.id, 'elem_value': openStatus });
            });
        }
    }

    const textElems = document.getElementsByTagName('textarea')
    if (textElems) {
        for (const elem of textElems) {
            if (elem && elem.id && !elem.readOnly) {
                elem.onchange = function () {
                    vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': elem.value });
                };
            }
        }
    }
    const selectElems = document.getElementsByTagName('select')
    if (selectElems) {
        for (const elem of selectElems) {
            if (elem && elem.id) {
                elem.onchange = function () {
                    const selindex = elem.selectedIndex;
                    vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': elem.value, selindex });
                };
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
                                    //listItemValueLst.push(e.value);
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
                            //vscode.postMessage({ type: 'listRowEditOk', data_index, elem_title, listItemValueLst });
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
                                    //listItemValueLst.push(e.value);
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

    const mvUpbtns = document.getElementsByClassName('codicon codicon-arrow-up');
    if (mvUpbtns) {
        for (const btn of mvUpbtns) {
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
                        vscode.postMessage({ type: 'listRowMoveUp', data_index, elem_title });
                        const rowItems = parentListRow.parentElement.children;
                        let nodeIndex = 0;
                        for (; nodeIndex < rowItems.length; ++nodeIndex) {
                            if (rowItems[nodeIndex] === parentListRow) {
                                break;
                            }
                        }
                        if (nodeIndex !== rowItems.length) {
                            const vals = parentListRow.getElementsByClassName('setting-list-value');
                            const nextvals = rowItems[nodeIndex - 1].getElementsByClassName('setting-list-value');
                            if (vals.length && vals.length === nextvals.length) {
                                const len = vals.length;
                                for (let i = 0; i < len; ++i) {
                                    const textVal = vals[i].textContent.slice();
                                    vals[i].textContent = nextvals[0].textContent;
                                    nextvals[i].textContent = textVal;
                                }
                            }
                        }
                    }
                });
            }
        }
    }

    const mvDownbtns = document.getElementsByClassName('codicon codicon-arrow-down');
    if (mvDownbtns) {
        for (const btn of mvDownbtns) {
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
                        vscode.postMessage({ type: 'listRowMoveDown', data_index, elem_title });
                        const rowItems = parentListRow.parentElement.children;
                        let nodeIndex = 0;
                        for (; nodeIndex < rowItems.length; ++nodeIndex) {
                            if (rowItems[nodeIndex] === parentListRow) {
                                break;
                            }
                        }
                        if (nodeIndex !== rowItems.length) {
                            const vals = parentListRow.getElementsByClassName('setting-list-value');
                            const nextvals = rowItems[nodeIndex + 1].getElementsByClassName('setting-list-value');
                            if (vals.length && vals.length === nextvals.length) {
                                const len = vals.length;
                                for (let i = 0; i < len; ++i) {
                                    const textVal = vals[i].textContent.slice();
                                    vals[i].textContent = nextvals[0].textContent;
                                    nextvals[i].textContent = textVal;
                                }
                            }
                        }
                    }
                });
            }
        }
    }

}());


function handleToolChainExeVersion(exeFlag, exeFileName, versioninfo) {
    //console.log("handleToolChainExeVersion "+exeFlag+' '+exeFileName+' '+versioninfo);
    let elemId = exeFlag + 'Name';
    let elem = document.getElementById(elemId);
    if (elem) {
        elem.innerText = exeFileName;
    }
    elemId = exeFlag + 'Version';
    elem = document.getElementById(elemId);
    if (elem) {
        elem.innerText = versioninfo;
    }
}



function handleSavedata(index, vscode) {
    console.log('handleSavedata ' + index);
    //针对性的进行数据读取保存
    switch (index) {
        case 0:   //target
            break;
        case 1:   //toolchain
            break;
        case 2:   //buildOutput 
            {
                const outType = document.getElementById('outType')?.value;
                const outName = document.getElementById('outFileName')?.value;
                const outFileExt = document.getElementById('outFileExt')?.value;
                const outNamePrefix = document.getElementById('outNamePrefix')?.value;
                const outPath = document.getElementById('outputPath')?.value;
                const bOutBinFile = document.getElementById('chkOutputBin')?.checked;
                const bOUtHexFile = document.getElementById('chkOutputHex')?.checked;
                const bOutDasmFile = document.getElementById('chkOutputDasm')?.checked;
                const bOutMapFile = document.getElementById('chkOutputMap')?.checked;
                const bShowSizeInfo = document.getElementById('chkOutpuSize')?.checked;
                const config = {
                    outType, outName, outFileExt, outNamePrefix, outPath, bOutBinFile, bOUtHexFile, bOutDasmFile, bOutMapFile, bShowSizeInfo
                };
                console.log(config);
                vscode.postMessage({ type: 'onDataSaved', activeItemIndex: 2, buildOutputCfg: config });
            }
            break;
        case 3:   //Compile
            break;
        case 4:   //Linker
            break;
        case 5:   //Debug
            break;
    }
}