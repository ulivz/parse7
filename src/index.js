/*!
 * Modified from: HTML Parser By John Resig (ejohn.org)
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */
export default function parse7(s, handlers) {
  let startTagRe = /^<([^>\s/]+)((\s+[^=>\s]+(\s*=\s*(("[^"]*")|('[^']*')|[^>\s]+))?)*)\s*\/?\s*>/m
  let endTagRe = /^<\/([^>\s]+)[^>]*>/m
  let attrRe = /([^=\s]+)(\s*=\s*(("([^"]*)")|('([^']*)')|[^>\s]+))?/gm
  let contentHandler

  function parseAttribute(tagName, attr, name) {
    let value = ''
    if (arguments[7]) {
      value = arguments[8]
    } else if (arguments[5]) {
      value = arguments[6]
    } else if (arguments[3]) {
      value = arguments[4]
    }
    const empty = !value && !arguments[3]
    return { name: name, value: empty ? null : value }
  }

  function parseAttributes(tagName, s) {
    const attrs = []
    s.replace(attrRe, (...args) => attrs.push(parseAttribute(tagName, ...args)))
    return attrs
  }

  function parseStartTag(tag, tagName, rest) {
    const attrs = parseAttributes(tagName, rest)
    contentHandler.tagStart(tagName, attrs)
    if (tag.substr(-2, 2) === '/>') {
      contentHandler.tagEnd(tagName)
    }
  }

  function parseEndTag(tag, tagName) {
    contentHandler.tagEnd(tagName)
  }

  function noop() {}
  contentHandler = Object.assign({
    tagStart: noop,
    tagEnd: noop,
    comment: noop,
    chars: noop
  }, handlers)

  let lm    // last match
  let rc    // right context
  let index // index;

  let treatAsChars = false;

  while (s.length > 0) {
    // comment
    if (s.substring(0, 4) === '<!--') {
      index = s.indexOf('-->')
      if (index !== -1) {
        contentHandler.comment(s.substring(4, index))
        s = s.substring(index + 3)
        treatAsChars = false
      } else {
        treatAsChars = true
      }
    }

    // end tag
    else if (s.substring(0, 2) === '</') {
      if (endTagRe.test(s)) {
        lm = RegExp.lastMatch;
        rc = RegExp.rightContext;
        lm.replace(endTagRe, (...args) => parseEndTag(...args))
        s = rc
        treatAsChars = false
      } else {
        treatAsChars = true
      }
    }

    // start tag
    else if (s.charAt('0') === '<') {
      if (startTagRe.test(s)) {
        lm = RegExp.lastMatch;
        rc = RegExp.rightContext;
        lm.replace(startTagRe, parseStartTag)
        s = rc
        treatAsChars = false
      } else {
        treatAsChars = true
      }
    }

    else if (treatAsChars) {
      index = s = s.indexOf('<')
      if (index == -1) {
        contentHandler.chars(s)
        s = ''
      } else {
        contentHandler.chars(s.substring(0, index))
        s = s.substring(index)
      }
    }
    treatAsChars = true
  }
}
