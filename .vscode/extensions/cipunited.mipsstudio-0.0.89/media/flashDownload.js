'use strict';

(function () {
	const vscode = acquireVsCodeApi();

	let e = document.getElementById('close');
	if (e) {
		e.addEventListener('click', () => {
			let erasefunc = 'NotErase';
			if (document.getElementById('EraseFullChip')?.checked)
				erasefunc = 'EraseFullChip';
			else if (document.getElementById('EraseSection')?.checked)
				erasefunc = 'EraseSection';
			let useAlgorithm = "ROM";
			if (document.getElementById('useRamAlgor')?.checked)
				useAlgorithm = 'RAM';
			const msg = {
				"type": "close",
				"data": {
					"ereasefunc": erasefunc,
					"Verify": document.getElementById('Verify')?.checked,
					"Program": document.getElementById('Program')?.checked,
					"ResetRun": document.getElementById('ResetRun')?.checked,
					"useAlgorithm": useAlgorithm,
					"RAMBase": document.getElementById('RAMBase')?.value,
					"RAMSize": document.getElementById('RAMSize')?.value,
					"ROMBase": document.getElementById('ROMBase')?.value,
					"ROMSize": document.getElementById('ROMSize')?.value
				}
			};
			vscode.postMessage(msg);
		});
	}

	e = document.getElementById('download');
	if (e) {
		e.addEventListener('click', () => {
			let erasefunc = 'NotErase';
			if (document.getElementById('EraseFullChip')?.checked)
				erasefunc = 'EraseFullChip';
			else if (document.getElementById('EraseSection')?.checked)
				erasefunc = 'EraseSection';
			let useAlgorithm = "ROM";
			if (document.getElementById('useRamAlgor')?.checked)
				useAlgorithm = 'RAM';
			const msg = {
				"type": "download",
				"data": {
					"ereasefunc": erasefunc,
					"Verify": document.getElementById('Verify')?.checked,
					"Program": document.getElementById('Program')?.checked,
					"ResetRun": document.getElementById('ResetRun')?.checked,
					"useAlgorithm": useAlgorithm,
					"RAMBase": document.getElementById('RAMBase')?.value,
					"RAMSize": document.getElementById('RAMSize')?.value,
					"ROMBase": document.getElementById('ROMBase')?.value,
					"ROMSize": document.getElementById('ROMSize')?.value
				}
			};
			vscode.postMessage(msg);
		});
	}

	let elem = document.getElementById('useRamAlgor');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('RAMBase');
			const bChecked = ev.target.checked;
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('RAMSize');
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('ROMBase');
			if (e) {
				e.disabled = true;
			}
			e = document.getElementById('ROMSize');
			if (e) {
				e.disabled = true;
			}
		});
	}
	elem = document.getElementById('useRomAlgor');
	if (elem) {
		elem.addEventListener('change', (ev) => {
			let e = document.getElementById('ROMBase');
			const bChecked = ev.target.checked;
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('ROMSize');
			if (e) {
				e.disabled = !bChecked;
			}
			e = document.getElementById('RAMBase');
			if (e) {
				e.disabled = true;
			}
			e = document.getElementById('RAMSize');
			if (e) {
				e.disabled = true;
			}
		});
	}
}());
