# elenpi-simple-function-call-parser

[![Travis branch](https://img.shields.io/travis/nomocas/elenpi-simple-function-call-parser/master.svg)](https://travis-ci.org/nomocas/elenpi-simple-function-call-parser)
[![bitHound Overall Score](https://www.bithound.io/github/nomocas/elenpi-simple-function-call-parser/badges/score.svg)](https://www.bithound.io/github/nomocas/elenpi-simple-function-call-parser)
[![bitHound Dependencies](https://www.bithound.io/github/nomocas/elenpi-simple-function-call-parser/badges/dependencies.svg)](https://www.bithound.io/github/nomocas/elenpi-simple-function-call-parser/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/nomocas/elenpi-simple-function-call-parser/badges/devDependencies.svg)](https://www.bithound.io/github/nomocas/elenpi-simple-function-call-parser/master/dependencies/npm)
[![licence](https://img.shields.io/npm/l/elenpi-simple-function-call-parser.svg)](https://spdx.org/licenses/MIT)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Simple "function call" parser.

Works browser side and server side.

Safe to use (no eval).

## Usage

```shell
npm i elenpi-simple-function-call-parser --save
```

```javascript
const parser = require('elenpi-simple-function-call-parser');

const call = parser.parseFragment('foo(12, true, "zoo, bar", null, NaN, Infinity, undefined)');

const util = require('util');
console.log('call:', util.inspect(call, true, 10, true));

// output : { method: 'foo', arguments: [ 12, true, 'zoo, bar', null, NaN, Infinity, undefined ] }

```

Take a look to tests to see more outputs.


## Allowed argument types

- single quoted string : `'Lorem ipsum...'`
- double quoted string : `"Lorem ipsum..."`
- template quoted string : (backtick)
- integer
- float
- boolean
- NaN
- Infinity
- undefined
- null

## Licence

The [MIT](http://opensource.org/licenses/MIT) License

Copyright 2017 (c) Gilles Coomans

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
