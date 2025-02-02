// https://eslint.org/

/* global module */

module.exports = {
	root: true,
	env: { es2022: true, browser: true },
	extends: ['eslint:recommended'],
	globals: {
		acquireVsCodeApi: true
	}
}
