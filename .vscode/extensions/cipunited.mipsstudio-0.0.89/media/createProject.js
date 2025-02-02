'use strict';

(function () {
	const vscode = acquireVsCodeApi();

	window.addEventListener('message', event => {
		const message = event.data; // The JSON data our extension sent
		//console.log(message);
		switch (message.type) {
			case 'updateProjectFsPath':
				if (message.projFsPath !== undefined) {
					const data_elem = document.getElementById('projPath');
					if (data_elem) {
						data_elem.value = message.projFsPath;
					}
				}
				break;
			case 'selectedPath':
				if (message.path) {
					document.getElementById('slnLocation').value = message.path;
				}
				break;
		}
	});

	let e = document.getElementById('selectPath');
	if (e) {
		e.addEventListener('click', () => {
			vscode.postMessage({ type: 'selectPath' });

			// window.addEventListener('message', e => {
			// 	const msg = e.data;
			// 	if (msg.path) {
			// 		document.getElementById('slnLocation').value = msg.path;
			// 	}
			// });
		});
	}
	e = document.getElementById('btnCancel');
	if (e) {
		e.addEventListener('click', () => {
			vscode.postMessage({ type: "cancel" });
		});
	}

	e = document.getElementById('chkMutliProject');
	if (e) {
		e.addEventListener('change', (ev) => {
			vscode.postMessage({ type: 'chkMutliProjectChanged', elem_id: 'chkMutliProject', checked: ev.target.checked });
		});
	}

	e = document.getElementById('chkAddToCurrentSolution');
	if (e) {
		e.addEventListener('change', (ev) => {
			const bAddToCurrentSln = ev.target.checked;
			let elem = document.getElementById('slnLocation');
			if (elem) {
				elem.disabled = bAddToCurrentSln;
			}
			elem = document.getElementById('slnName');
			if (elem) {
				elem.disabled = bAddToCurrentSln;
			}
			elem = document.getElementById('selectPath');
			if (elem) {
				elem.disabled = bAddToCurrentSln;
			}
			// const projname = document.getElementById('projname')?.value;
			// const slnLocation = document.getElementById('slnLocation')?.value;
			// const slnName = document.getElementById('slnName')?.value;
			// const toolchain = document.getElementById('toolchains')?.value;
			// const projType = document.getElementById('projType')?.value;
			// const selectVendor = document.getElementById('selectVendor')?.value;
			// const selectFamily = document.getElementById('selectFamily')?.value;
			// const selectSubFamily = document.getElementById('selectSubFamily')?.value;
			// const selectDevice = document.getElementById('selectTargetProcessor')?.value;
			// const config = {
			// 	projname, slnName, slnLocation, toolchain, selectVendor, selectFamily, selectSubFamily, selectDevice, projType, bAddToCurrentSln
			// };
			const config = {
				bAddToCurrentSln
			};
			vscode.postMessage({ type: 'chkStatusChanged', newprojcfg: config });
		});
	}

	e = document.getElementById('btnFinish');
	if (e) {
		e.addEventListener('click', () => {
			const projname = document.getElementById('projname')?.value;
			const slnLocation = document.getElementById('slnLocation')?.value;
			const slnName = document.getElementById('slnName')?.value;
			const toolchain = document.getElementById('toolchains')?.value;
			const projType = document.getElementById('projType')?.value;
			const selectVendor = document.getElementById('selectVendor')?.value;
			const selectFamily = document.getElementById('selectFamily')?.value;
			const selectSubFamily = document.getElementById('selectSubFamily')?.value;
			const selectDevice = document.getElementById('selectTargetProcessor')?.value;
			const bAddToCurrentSln = document.getElementById('chkAddToCurrentSolution')?.checked;
			const bMutliProject = document.getElementById('chkMutliProject')?.checked;

			if (projname === '') {
				document.getElementById('projname').style.borderColor = 'red';
			}
			if (slnName === '') {
				document.getElementById('slnName').style.borderColor = 'red';
			}
			if (slnLocation === '') {
				document.getElementById('slnLocation').style.borderColor = 'red';
			}
			if (projType === '') {
				document.getElementById('projType').style.borderColor = 'red';
			}
			if (toolchain === '') {
				document.getElementById('toolchains').style.borderColor = 'red';
			}

			if (projname === '' || slnLocation === '' || projType === '' || toolchain === '') {
				return;
			}

			const config = {
				projname, slnName, slnLocation, toolchain, selectVendor, selectFamily, selectSubFamily, selectDevice, projType, bAddToCurrentSln, bMutliProject
			};

			// console.log(state);
			vscode.postMessage({ type: 'ok', newprojcfg: config });
		});
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

	const inputElems = document.getElementsByTagName('input')
	if (inputElems) {
		for (const elem of inputElems) {
			if (elem && elem.id) {
				elem.onchange = function () {
					vscode.postMessage({ type: 'inputElemChanged', 'elem_id': elem.id, 'elem_value': elem.value });
				};
			}
		}
	}

	window.addEventListener('message', e => {
		const msg = e.data;
		if (msg.type === 'savedata') {
			handleSavedata(vscode);
		}
	});

}());


function handleSavedata(vscode) {
	const projname = document.getElementById('projname')?.value;
	const slnLocation = document.getElementById('slnLocation')?.value;
	const slnName = document.getElementById('slnName')?.value;
	const toolchain = document.getElementById('toolchains')?.value;
	const projType = document.getElementById('projType')?.value;
	const selectVendor = document.getElementById('selectVendor')?.value;
	const selectFamily = document.getElementById('selectFamily')?.value;
	const selectSubFamily = document.getElementById('selectSubFamily')?.value;
	const selectDevice = document.getElementById('selectTargetProcessor')?.value;
	const bAddToCurrentSln = document.getElementById('chkAddToCurrentSolution')?.checked;
	const bMutliProject = document.getElementById('chkMutliProject')?.checked;
	const config = {
		projname, slnName, slnLocation, toolchain, selectVendor, selectFamily, selectSubFamily, selectDevice, projType, bAddToCurrentSln, bMutliProject
	};
	//console.log(config);
	vscode.postMessage({ type: 'onDataSaved', newprojcfg: config });
}