import type { Linter } from 'eslint';

console.log('Hello from %o', './src/index.ts');

export default {
	'some': [0, { foo: 'bar' }]
} satisfies Linter.RulesRecord;