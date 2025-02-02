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
            case 'mem_data_area':
                if (message.strhtml !== undefined) {
                    const data_elem = document.getElementById('mem_data_area');
                    if (data_elem) {
                        data_elem.innerHTML = message.strhtml;
                    }
                }
                break;
            case 'select_mem_data_info':
                {
                    if (message.strInfo !== undefined) {
                        const info_elem = document.getElementById('selected_mem_data_info');
                        if (info_elem) {
                            info_elem.innerText = message.strInfo;
                        }
                    }
                }
                break;
        }
    });

    const buttons = {
        'ReadMemory': 'ReadMemory',
        'WriteMemory': 'WriteMemory',
        'CopyData': 'CopyData',
        'CopySelected': "CopySelected",
        "Modify": "Modify"
    };

    for (const [id, type] of Object.entries(buttons)) {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                switch (id) {
                    case 'CopySelected':
                        {
                            const selection = document.getSelection();
                            const selected_data = selection.toString();
                            vscode.postMessage({ type, selected_data });
                        }
                        break;
                    default:
                        vscode.postMessage({ type })
                }
            }
            );
        } else {
            // console.error(`[dbgMemView.js]: Element #${id} not found!`);
        }
    }

    document.onselectionchange = function () {
        const selobj = document.getSelection();
        let anchorNode = selobj.anchorNode;
        let focusNode = selobj.focusNode;
        let p_an_index = '';
        let p_fc_index = '';
        let bEmpty = true;
        if (anchorNode && focusNode) {
            if(anchorNode.nodeName !=='SPAN'){
                anchorNode = anchorNode.parentNode;
            }
            if(focusNode.nodeName !== 'SPAN'){
                focusNode = focusNode.parentNode;
            }
            if (anchorNode && focusNode) {
                if (anchorNode.nodeName === 'SPAN' && focusNode.nodeName === 'SPAN') {
                    p_an_index = anchorNode.attributes['data-key'].value;
                    p_fc_index = focusNode.attributes['data-key'].value;
                    //console.log('From '+ p_an_index +' , to '+ p_fc_index );
                    bEmpty = false;
                    vscode.postMessage({ type: 'selectChange', anchorIndex: p_an_index, focusIndex: p_fc_index });
                }
            }
        }
        if(bEmpty) {
            const info_elem = document.getElementById('selected_mem_data_info');
            if (info_elem) {
                info_elem.innerText = '';
            }
        }
    }


    // const dataElems = document.getElementsByClassName("dataDisplayContext__data-cell_h");
    // if (dataElems) {
    //     for (const elem of dataElems) {
    //         if (elem && elem.id) {
    //             elem.addEventListener("select",(event) => {
    //                 //
    //             });
    //         }
    //     }
    // }
    const inputElems = document.getElementsByTagName('input')
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
    const txtElems = document.getElementsByTagName('textarea')
    if (txtElems) {
        for (const elem of txtElems) {
            if (elem && elem.id) {
                elem.addEventListener('change', () => {
                    if (elem.value !== undefined) {
                        vscode.postMessage({ type: 'txtElemChanged', 'elem_id': elem.id, 'elem_value': elem.value });
                        // const txtLines = elem.value.split();
                        // const nLines = txtLines.length;
                        // for(let i=0; i<nLines;++i){
                        //     const mem_data_elem= document.getElementById('memoryData_'+i);
                        //     if(mem_data_elem){
                        //         //
                        //     }
                        // }
                    }
                });
            }
        }
    }

    const selectElems = document.getElementsByTagName('select')
    if (selectElems) {
        for (const elem of selectElems) {
            if (elem && elem.id) {
                elem.onchange = function () {
                    const selindex = elem.selectedIndex;
                    if (elem.id === 'moreBuildOption') {
                        if (selindex !== 0) {
                            vscode.postMessage({ type: 'SelectElemChanged', 'elem_id': elem.id, 'elem_value': elem.value, selindex });
                        }
                        elem.selectedIndex = 0;
                    }
                    else {
                        vscode.postMessage({ type: 'SelectElemChanged', 'elem_id': elem.id, 'elem_value': elem.value, selindex });
                    }
                };
            }
        }
    }


}());


