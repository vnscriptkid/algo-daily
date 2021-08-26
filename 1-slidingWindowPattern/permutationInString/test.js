const {findPermutation} = require('./index')

test('it works 1', () => {
  const str = 'oidbcaf',
    pattern = 'abc'
  const result = findPermutation(str, pattern)
  expect(result).toEqual(true)
})

test('it works 2', () => {
  const str = 'odicf',
    pattern = 'dc'
  const result = findPermutation(str, pattern)
  expect(result).toEqual(false)
})

test('it works 3', () => {
  const str = 'bcdxabcdy',
    pattern = 'bcdyabcdx'
  const result = findPermutation(str, pattern)
  expect(result).toEqual(true)
})

test('it works 4', () => {
  const str = 'aaacb',
    pattern = 'abc'
  const result = findPermutation(str, pattern)
  expect(result).toEqual(true)
})
