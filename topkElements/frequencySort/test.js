const {sortByFreq} = require('./index')

test('it works 1', () => {
  const str = 'Programming'
  const result = sortByFreq(str)
  expect(result).toEqual('rrggmmoaPin')
})

test('it works 2', () => {
  const str = 'abcbab'
  const result = sortByFreq(str)
  expect(result).toEqual('bbbaac')
})
