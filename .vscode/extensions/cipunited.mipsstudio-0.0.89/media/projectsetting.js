'use strict';

function handleSavedata(cindex, i, vscode, bUnVisiable) {

	switch (cindex) {
		case 1:
			{
				const el = document.getElementById('toolchain-select');
				if (el) {
					const msg = {
						"type": "settingindexchanged",
						"newindex": i, "oldindex": cindex,
						"data": {
							"toolchains": document.getElementById('toolchain-select').value
						}
					};
					vscode.postMessage(msg);
				} else if (!bUnVisiable) {
					const msg = { "type": "settingindexchanged", "newindex": i, "oldindex": cindex };
					vscode.postMessage(msg);
				}
				break;
			}
		case 2:
			{
				if (!bUnVisiable) {
					const msg = { "type": "settingindexchanged", "newindex": i, "oldindex": cindex };
					vscode.postMessage(msg);
				}
				break;
			}
		case 4:
			{
				const el = document.getElementById('cstandard');
				if (el) {
					const msg = {
						"type": "settingindexchanged",
						"newindex": i, "oldindex": cindex,
						"data": {
							"cstandard": document.getElementById('cstandard').value,
							"cppstandard": document.getElementById('cppstandard').value,
							"warninglevel": document.getElementById('warninglevel').value,
							"oplevel": document.getElementById('oplevel').value,
							"turnwarningtoerror": document.getElementById('turnwarningtoerror').checked,
							"otheroptions": document.getElementById('otheroptions').value
						}
					};
					vscode.postMessage(msg);
				} else if (!bUnVisiable) {
					const msg = { "type": "settingindexchanged", "newindex": i, "oldindex": cindex };
					vscode.postMessage(msg);
				}
				break;
			}
		case 3:
			{
				const el = document.getElementById('debugenable');
				if (el) {
					const msg = {
						"type": "settingindexchanged",
						"newindex": i, "oldindex": cindex,
						"data": {
							"debugenable": document.getElementById('debugenable').value,
							"floatpoint": document.getElementById('floatpoint').value,
							"predefines": document.getElementById('predefines').value,
							"otheroptions": document.getElementById('otheroptions').value,
							"userincpath": document.getElementById('userincpath').value
						}
					};
					vscode.postMessage(msg);
				} else if (!bUnVisiable) {
					const msg = { "type": "settingindexchanged", "newindex": i, "oldindex": cindex };
					vscode.postMessage(msg);
				}
				break;
			}
		case 5:
			{
				const el = document.getElementById('asmROposIndependent');
				if (el) {
					const msg = {
						"type": "settingindexchanged",
						"newindex": i, "oldindex": cindex,
						"data": {
							"asmROposIndependent": document.getElementById('asmROposIndependent').checked,
							"asmRAposIndependent": document.getElementById('asmRAposIndependent').checked,
							"otheroptions": document.getElementById('otheroptions').value
						}
					};
					vscode.postMessage(msg);
				} else if (!bUnVisiable) {
					const msg = { "type": "settingindexchanged", "newindex": i, "oldindex": cindex };
					vscode.postMessage(msg);
				}
				break;
			}
		case 6:
			{
				const el = document.getElementById('rmUnuseSection');
				if (el) {
					const msg = {
						"type": "settingindexchanged",
						"newindex": i, "oldindex": cindex,
						"data": {
							"selectLinkFile": document.getElementById('selectLinkFile')?.value,
							"rmUnuseSection": document.getElementById('rmUnuseSection')?.checked,
							"otheroptions": document.getElementById('otheroptions')?.value,
							"liblinkOption": document.getElementById('liblinkOption')?.value,
	
							// "RWsectionIndependent": document.getElementById('RWsectionIndependent').checked,
							// "ROsectionIndependent": document.getElementById('ROsectionIndependent').checked,
						}
					};
					vscode.postMessage(msg);
				} else if (!bUnVisiable) {
					const msg = { "type": "settingindexchanged", "newindex": i, "oldindex": cindex };
					vscode.postMessage(msg);
				}
				break;
			}
		case 7:
			{
				const el = document.getElementById('outputpath');
				if (el) {
					const msg = {
						"type": "settingindexchanged",
						"newindex": i, "oldindex": cindex,
						"data": {
							"outputpath": document.getElementById('outputpath').value,
							"outfilename": document.getElementById('outfilename').value,
							"outtype": document.getElementById('outtype').value,
							"outhexbinfile": document.getElementById('outhexbinfile').checked,
							"outmapfile": document.getElementById('outmapfile').checked,
							"outasmfile": document.getElementById('outasmfile').checked
						}
					};
					vscode.postMessage(msg);
				} else if (!bUnVisiable) {
					const msg = { "type": "settingindexchanged", "newindex": i, "oldindex": cindex };
					vscode.postMessage(msg);
				}
				break;
			}
		case 8:
			{
				const el = document.getElementById('bstartOpenOCD');
				if (el) {
					const msg = {
						"type": "settingindexchanged",
						"newindex": i, "oldindex": cindex,
						"data": {
							"bstartOpenOCD": document.getElementById('bstartOpenOCD').checked,
							"ocdsvrip": document.getElementById('ocdsvrip').value,
							"ocdsvrPort": document.getElementById('ocdsvrPort').value,
							"debugdev" : document.getElementById('debugdev').value
						}
					};
					vscode.postMessage(msg);
				} else if (!bUnVisiable) {
					const msg = { "type": "settingindexchanged", "newindex": i, "oldindex": cindex };
					vscode.postMessage(msg);
				}
				break;
			}
		case 0:
			{
				const el = document.getElementById('checkROM1');
				if (el) {
					const msg = {
						"type": "settingindexchanged",
						"newindex": i, "oldindex": cindex,
						"data": {
							// ROM1
							"checkROM1": document.getElementById('checkROM1')?.checked,
							"rom1Startaddr": document.getElementById('rom1Startaddr')?.value,
							"rom1size": document.getElementById('rom1size')?.value,
							"rom1start": document.getElementById('rom1start')?.checked,
							// ROM2
							"checkROM2": document.getElementById('checkROM2')?.checked,
							"rom2Startaddr": document.getElementById('rom2Startaddr')?.value,
							"rom2size": document.getElementById('rom2size')?.value,
							"rom2start": document.getElementById('rom2start')?.checked,
							// OffROM1
							"checkOffROM1": document.getElementById('checkOffROM1')?.checked,
							"offRom1Startaddr": document.getElementById('offRom1Startaddr')?.value,
							"offRom1size": document.getElementById('offRom1size')?.value,
							"offRom1start": document.getElementById('offRom1start')?.checked,
							// OffROM2
							"checkOffROM2": document.getElementById('checkOffROM2')?.checked,
							"offRom2Startaddr": document.getElementById('offRom2Startaddr')?.value,
							"offRom2size": document.getElementById('offRom2size')?.value,
							"offRom2start": document.getElementById('offRom2start')?.checked,
							// RAM1
							"checkRAM1": document.getElementById('checkRAM1')?.checked,
							"ram1Startaddr": document.getElementById('ram1Startaddr')?.value,
							"ram1size": document.getElementById('ram1size')?.value,
							"ram1NoInit": document.getElementById('ram1NoInit')?.checked,
							// RAM2
							"checkRAM2": document.getElementById('checkRAM2')?.checked,
							"ram2Startaddr": document.getElementById('ram2Startaddr')?.value,
							"ram2size": document.getElementById('ram2size')?.value,
							"ram2NoInit": document.getElementById('ram2NoInit')?.checked,
							// OffRAM1		
							"checkoffRAM1": document.getElementById('checkoffRAM1')?.checked,
							"offRam1Startaddr": document.getElementById('offRam1Startaddr')?.value,
							"offRam1size": document.getElementById('offRam1size')?.value,
							"offRam1NoInit": document.getElementById('offRam1NoInit')?.checked,
							// OffRAM2	
							"checkoffRAM2": document.getElementById('checkoffRAM2')?.checked,
							"offRam2Startaddr": document.getElementById('offRam2Startaddr')?.value,
							"offRam2size": document.getElementById('offRam2size')?.value,
							"offRam2NoInit": document.getElementById('offRam2NoInit')?.checked,
							// OffRAM1		
							"checkoffRAM3": document.getElementById('checkoffRAM3')?.checked,
							"offRam3Startaddr": document.getElementById('offRam3Startaddr')?.value,
							"offRam3size": document.getElementById('offRam3size')?.value,
							"offRam3NoInit": document.getElementById('offRam3NoInit')?.checked,
							// OffRAM2	
							"checkoffRAM4": document.getElementById('checkoffRAM4')?.checked,
							"offRam4Startaddr": document.getElementById('offRam4Startaddr')?.value,
							"offRam4size": document.getElementById('offRam4size')?.value,
							"offRam4NoInit": document.getElementById('offRam4NoInit')?.checked
						}
					};
					vscode.postMessage(msg);
				} else if (!bUnVisiable) {
					const msg = { "type": "settingindexchanged", "newindex": i, "oldindex": cindex };
					vscode.postMessage(msg);
				}
				break;
			}
	}
}

(() => {

	const vscode = acquireVsCodeApi();

	const arrSettingsFlagName = ["Target","Toolchain", "SDK", "General", "C/C++", "Asm", "Linker", "Output", "Debug"];
	const arrSettingsidName = ["target","toolchain", "sdk", "general", "ccpp", "asm", "linker", "output", "debug"];

	let elem = document.getElementById('settingFlag');
	let curSettingindex = undefined;
	if (elem) {
		curSettingindex = arrSettingsFlagName.indexOf(elem.innerText);
	}

	elem = document.getElementById('resetdefault');
	if (elem) {
		elem.addEventListener('click', () => {
			vscode.postMessage({ type: 'resetdefault' });
		});
	}
	elem = document.getElementById('saveconfig');
	if (elem) {
		elem.addEventListener('click', () => {
			handleSavedata(curSettingindex, curSettingindex, vscode, false);
			vscode.postMessage({ type: 'saveconfig' });
		});
	}

	if (curSettingindex !== undefined) {
		window.addEventListener('message', e => {
			const msg = e.data;
			if (msg.type === 'savedata') {
				handleSavedata(curSettingindex, curSettingindex, vscode, true);
			}
		});
		switch (curSettingindex) {
			case 1: {
				//AddPersonalToolChain;
				elem = handleToolChainOption(elem, vscode);
				break;
			}
			case 3: {
				//AddIncPath  ResetIncPath
				elem = handleGeneralOption(elem, vscode);
				break;
			}
			case 7: {
				elem = handleOutputOption(elem, vscode);
				break;
			}
			case 8: {
				elem = handleDebugOption(elem, vscode);
				break;
			}
			case 0: {
				elem = handleTargetMemOption(elem);
				break;
			}
		}

		for (let i = 0; i < arrSettingsidName.length; i++) {
			if (i != curSettingindex) {
				elem = document.getElementById(arrSettingsidName[i]);
				if (elem) {
					elem.addEventListener('click', () => {
						handleSavedata(curSettingindex, i, vscode, false);
					});
				}
			}
		}
	}



	elem = document.getElementById('toolchain-select');
	if (elem) {
		elem.onchange = function () {
			let sel = document.getElementById('toolchain-select');
			let selindex = sel.selectedIndex;
			document.getElementById("toolchain-version").selectedIndex = selindex;
			document.getElementById("toolchain-provider").selectedIndex = selindex;
			document.getElementById("toolchain-path").selectedIndex = selindex;
			let message = { type: "settingdata", datatype: "toolchain", datavalue: sel.options[selindex].value };
			vscode.postMessage(message);
		}
	}

	elem = document.getElementById('sdk-select');
	if (elem) {
		elem.onchange = function () {
			let sel = document.getElementById('sdk-select');
			let selindex = sel.selectedIndex;
			document.getElementById("sdk-version").selectedIndex = selindex;
			document.getElementById("sdk-provider").selectedIndex = selindex;
			document.getElementById("sdk-path").selectedIndex = selindex;
			let message = { type: "settingdata", datatype: "sdk", datavalue: sel.options[selindex].value };
			vscode.postMessage(message);
		}
	}

})();


function handleTargetMemOption(elem) {
	elem = document.getElementById('checkROM1');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('rom1Startaddr');
			if (e) {
				e.disabled = !ev.target.checked;
			}
			e = document.getElementById('rom1size');
			if (e) {
				e.disabled = !ev.target.checked;
			}
		});
	}
	elem = document.getElementById('checkROM2');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('rom2Startaddr');
			const bChecked = ev.target.checked;
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('rom2size');
			if (e) {
				e.disabled = !bChecked;
			}
		});
	}
	elem = document.getElementById('checkOffROM1');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('offRom1Startaddr');
			const bChecked = ev.target.checked;
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRom1size');
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRom1start');
			if (e) {
				e.disabled = !bChecked;
			}
		});
	}
	elem = document.getElementById('checkOffROM2');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('offRom2Startaddr');
			const bChecked = ev.target.checked;
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRom2size');
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRom2start');
			if (e) {
				e.disabled = !bChecked;
			}
		});
	}
	elem = document.getElementById('checkRAM1');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('ram1Startaddr');
			const bChecked = ev.target.checked;
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('ram1size');
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('ram1NoInit');
			if (e) {
				e.disabled = !bChecked;
			}
		});
	}
	elem = document.getElementById('checkRAM2');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('ram2Startaddr');
			const bChecked = ev.target.checked;
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('ram2size');
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('ram2NoInit');
			if (e) {
				e.disabled = !bChecked;
			}
		});
	}
	elem = document.getElementById('checkoffRAM1');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('offRam1Startaddr');
			const bChecked = ev.target.checked;
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRam1size');
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRam1NoInit');
			if (e) {
				e.disabled = !bChecked;
			}
		});
	}
	elem = document.getElementById('checkoffRAM2');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('offRam2Startaddr');
			const bChecked = ev.target.checked;
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRam2size');
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRam2NoInit');
			if (e) {
				e.disabled = !bChecked;
			}
		});
	}
	elem = document.getElementById('checkoffRAM3');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('offRam3Startaddr');
			const bChecked = ev.target.checked;
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRam3size');
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRam3NoInit');
			if (e) {
				e.disabled = !bChecked;
			}
		});
	}
	elem = document.getElementById('checkoffRAM4');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('offRam4Startaddr');
			const bChecked = ev.target.checked;
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRam4size');
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('offRam4NoInit');
			if (e) {
				e.disabled = !bChecked;
			}
		});
	}
	return elem;
}

function handleDebugOption(elem, vscode) {
	elem = document.getElementById('setOpenOCDPath');
	if (elem) {
		elem.addEventListener('click', () => {
			window.addEventListener('message', e => {
				const msg = e.data;
				if (msg.openOcdPath) {
					document.getElementById('OpenOCDPath').value = msg.openOcdPath;
				}
			});
			vscode.postMessage({ type: 'setOpenOCDPath' });
		});
	}
	elem = document.getElementById('ocdremote');
	if (elem) {
		elem.addEventListener('change', () => {
			let e = document.getElementById('ocdsvrip');
			if (e) {
				e.disabled = false;
			}
			e = document.getElementById('bstartOpenOCD');
			if (e) {
				e.checked = false;
				e.disabled = true;
			}
		});
	}
	elem = document.getElementById('ocdlocalhost');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('ocdsvrip');
			if (e && ev.target.checked) {
				e.disabled = true;
				e.value='127.0.0.1';
			}
			e = document.getElementById('bstartOpenOCD');
			if (e) {
				// e.checked = false;
				e.disabled = false;
			}
		});
	}
	return elem;
}

function handleOutputOption(elem, vscode) {
	elem = document.getElementById('seloutpath');
	if (elem) {
		elem.addEventListener('click', () => {
			window.addEventListener('message', e => {
				const msg = e.data;
				if (msg.outpath) {
					document.getElementById('outputpath').value = msg.outpath;
				}
			});
			vscode.postMessage({ type: 'seloutpath' });
		});
	}
	return elem;
}

function handleGeneralOption(elem, vscode) {
	elem = document.getElementById('AddIncPath');
	if (elem) {
		elem.addEventListener('click', () => {
			window.addEventListener('message', e => {
				const msg = e.data;
				if (msg.outpath) {
					document.getElementById('userincpath').value += ' ' + msg.outpath;
				}
			});
			vscode.postMessage({ type: 'AddIncPath' });
		});
	}
	elem = document.getElementById('ResetIncPath');
	if (elem) {
		elem.addEventListener('click', () => {
			document.getElementById('userincpath').value = '';
		});
	}
	return elem;
}

function handleToolChainOption(elem, vscode) {
	elem = document.getElementById('SetPersonalToolChain');
	if (elem) {
		elem.addEventListener('click', () => {
			vscode.postMessage({ type: 'SetPersonalToolChain' });
		});
	}
	return elem;
}

