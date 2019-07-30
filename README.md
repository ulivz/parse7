
# parse7

[![NPM version](https://img.shields.io/npm/v/parse7.svg?style=flat)](https://npmjs.com/package/parse7) [![NPM downloads](https://img.shields.io/npm/dm/parse7.svg?style=flat)](https://npmjs.com/package/parse7) [![CircleCI](https://circleci.com/gh/ULIVZ/parse7/tree/master.svg?style=shield)](https://circleci.com/gh/ULIVZ/parse7/tree/master)  [![codecov](https://codecov.io/gh/ULIVZ/parse7/branch/master/graph/badge.svg)](https://codecov.io/gh/ULIVZ/parse7)
 [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/ULIVZ/donate) [![Greenkeeper badge](https://badges.greenkeeper.io/ulivz/parse7.svg)](https://greenkeeper.io/)

## Install

```bash
npm i parse7 -S
# or yarn add parse7
```

## Usage

```js
import parse7 from 'parse7'
// OR const parse7 = require('parse7')

parse7(html, handlers)
```

## API

### parse7(html, handlers)

#### html
- Type: `string`
- Required: `true`

#### handlers
- Type: `{ [hook: string]: function }`
- Required: `true`

  Currently there are _**4**_ hooks：
  
  - tagStart(name: string, attrs: Array<{ name: string, value: string}>)
  - tagEnd(name: string)
  - comments(comment: string)
  - chars(char: string)


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**parse7** © [ulivz](https://github.com/ULIVZ), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by ulivz with help from contributors ([list](https://github.com/ULIVZ/parse7/contributors)).

> [github.com/ulivz](https://github.com/ulivz) · GitHub [@ulivz](https://github.com/ULIVZ)
