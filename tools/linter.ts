import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { readFileSync } from 'node:fs';

import { ESLint } from 'eslint';

import overrideConfig from '../linter.config.mjs';

const linter = new ESLint({
	// fix: true,
	overrideConfigFile: true,
	overrideConfig,
});

const root = fileURLToPath(new URL('..', import.meta.url));

// D:\<root>\src\index.ts
const file = join(root, 'src', 'index.ts');
const text = readFileSync(file, 'utf-8');

// works
let results = await linter.lintFiles(file);

for (const result of results) {
	console.log(result.messages);
}

// results in fatal error
results = await linter.lintText(text);

for (const result of results) {
	console.log(result.messages);
}