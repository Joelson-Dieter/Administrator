// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
'use strict';

(() => {

	const { postMessage } = acquireVsCodeApi();

	const buttons = {
		'createProject': 'newproject',
		'openProject': 'openproject',
		'openFile' : 'openFile',
		'openFolder' : 'openFolder',
		'newFile':'newFile',
		'gitClone':'gitClone',
		'importProjectWithMakefile' : 'importProjectWithMakefile',
		'ViewDocument' : 'ViewDocument',
		"visitWebHome":'visitWebHome'
	};
	const projbuttons = [
		'project1',
		'project2',
		'project3',
		'project4',
		'project5',
		'project6'
	];

	for (const [id, type] of Object.entries(buttons)) {
		const btn = document.getElementById(id);
		if (btn) {
			btn.addEventListener('click', () => postMessage({ type }));
		} else {
			// console.error(`[start.js]: Element #${id} not found!`);
		}
	}

	for (const id of projbuttons) {
		const btn = document.getElementById(id);
		if (btn) {
			btn.addEventListener('click', () => {
				const lablelid='label'+id;
				const slnFileId = 'slnFile'+id;
				const msg = {
					"type": "openRecentProj",
					"openrecent": {
						"slnName": btn.innerText.trim(),
						"slnPath": document.getElementById(lablelid)?.innerText.trim(),
						"slnCfgFileName": document.getElementById(slnFileId)?.innerText.trim()
					}
				};
				postMessage(msg);
			});
		} else {
			// console.error(`[start.js]: Element #${id} not found!`);
		}
	}


})();

