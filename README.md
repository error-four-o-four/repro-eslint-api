Reproduction of unexpected behaviour when using the eslint api

* node	v22.14.0
* npm 11.4.1
* os 'Windows_NT'

use `npm run test`

`let results = await linter.lintFiles(file);` shows expected linting message `'Unexpected console statement.'`

`results = await linter.lintText(text);` results in `'Parsing error: Unexpected token {'`