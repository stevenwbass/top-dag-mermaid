# top-dag-mermaid

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> top-dag-mermaid

Transforms directed acyclical graphs into mermaidjs-compatible flowchart strings.

## Install

```bash
npm install top-dag-mermaid
```

## Usage

```ts
import { transformDagToFlowchart, Dictionary } from 'top-dag-mermaid';

const dag = JSON.parse(`{
  "data": {
    "first": "first-data",
    "second": "second-data",
    "third": "third-data",
    "fourth": "fourth-data"
  },
  "outgoingEdges": {
    "first": [
      "second",
      "third"
    ],
    "second": [],
    "third": [
      "fourth"
    ],
    "fourth": []
  }
}`);

const flowchartString = transformDagToFlowchart(dag, 'TD');
//=> 'flowchart TD\nfirst --> second\nfirst --> third\nsecond\nthird --> fourth\nfourth\n'
```

##### Development

Type: `string`
Default: `rainbows`

The most convenient way to debug tests is to use VS Code's built-in "Run and Debug" (Ctrl+Shift+D). The project has a `launch.json` file to support this (on Windows), but you will still have to select the "Debug Jest Tests" script next to "RUN AND DEBUG".

To debug in any Chromium-based browser:

1. execute `npm run test:debug`
2. open the browser and go to chrome://inspect
3. click on "Open Dedicated DevTools for Node"
4. click on the address displayed in the terminal (usually something like localhost:9229)

[build-img]: https://github.com/stevenwbass/top-dag-mermaid/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/stevenwbass/top-dag-mermaid/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/top-dag-mermaid
[downloads-url]: https://www.npmtrends.com/top-dag-mermaid
[npm-img]: https://img.shields.io/npm/v/top-dag-mermaid
[npm-url]: https://www.npmjs.com/package/top-dag-mermaid
[issues-img]: https://img.shields.io/github/issues/stevenwbass/top-dag-mermaid
[issues-url]: https://github.com/stevenwbass/top-dag-mermaid/issues
[codecov-img]: https://codecov.io/gh/stevenwbass/top-dag-mermaid/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/stevenwbass/top-dag-mermaid
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
