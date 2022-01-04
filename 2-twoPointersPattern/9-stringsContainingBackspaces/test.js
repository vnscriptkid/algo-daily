const {compareStrings} = require('./index')

test('it works 1', () => {
  const str1 = 'xy#z',
    str2 = 'xzz#'
  const result = compareStrings(str1, str2)
  expect(result).toEqual(true)
})

test('it works 2', () => {
  const str1 = 'xy#z',
    str2 = 'xyz#'
  const result = compareStrings(str1, str2)
  expect(result).toEqual(false)
})

test('it works 3', () => {
  const str1 = 'xp#',
    str2 = 'xyz##'
  const result = compareStrings(str1, str2)
  expect(result).toEqual(true)
})

test('it works 4', () => {
  const str1 = 'xywrrmp',
    str2 = 'xywrrmu#p'
  const result = compareStrings(str1, str2)
  expect(result).toEqual(true)
})
