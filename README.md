
# parse7

[![NPM version](https://img.shields.io/npm/v/parse7.svg?style=flat)](https://npmjs.com/package/parse7) [![NPM downloads](https://img.shields.io/npm/dm/parse7.svg?style=flat)](https://npmjs.com/package/parse7) [![CircleCI](https://circleci.com/gh/ULIVZ/parse7/tree/master.svg?style=shield)](https://circleci.com/gh/ULIVZ/parse7/tree/master)  [![codecov](https://codecov.io/gh/ULIVZ/parse7/branch/master/graph/badge.svg)](https://codecov.io/gh/ULIVZ/parse7)
 [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/ULIVZ/donate)

## Install

```bash
npm i parse7 -S
# or yarn add parse7
```

## Usage

```js
const parse7 = require('parse7')
const html = '<div id="app" class="app">I am a APP<!-- I am commnet --></div><input class="input"/>'
const parseStack = []

parse7(html, {
  tagStart(tagName, attrs) {
    parseStack.push(tagName, attrs)
  },
  tagEnd(tagName) {
    parseStack.push(tagName)
  },
  comments(comment) {
    parseStack.push(comment)
  },
  chars(chars) {
    parseStack.push(chars)
  }
})
```

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
