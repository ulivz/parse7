import parse7 from '../src'

const RAW = {
  simple: `<div class="content">Chars</div>`,
  singleClosed: '<app class="content"/><div id="1">Chars</div>',
  comments: `<div class="ddd">Chars</div><!-- I am Commnets -->`,
  nested: `<a class="content">Chars<b>CCC</b></a>`,
}

function getResult(s) {
  const result = []
  parse7(s, {
    tagStart(tagName, attrs) {
      result.push(tagName)
      result.push(attrs)
    },
    tagEnd(tagName) {
      result.push(tagName)
    },
    comments(comment) {
      result.push(comment)
    },
    chars(chars) {
      result.push(chars)
    }
  })
  return result
}

test('normal', () => {
  const r = getResult(RAW.simple)
  expect(r).toMatchSnapshot()
})

test('singleClosed', () => {
  const r = getResult(RAW.singleClosed)
  expect(r).toMatchSnapshot()
})

test('comments', () => {
  const r = getResult(RAW.comments)
  expect(r).toMatchSnapshot()
})

test('nested', () => {
  const r = getResult(RAW.nested)
  expect(r).toMatchSnapshot()
})
