import type { Linter } from 'eslint';

import tslint from 'typescript-eslint';

export default {
	files: ['**/*.ts'],
	languageOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: tslint.parser,
		parserOptions: {
			projectService: false,
			project: false,
		}
	},
	rules: {
		'no-console': 2
	},
} as Linter.Config;
