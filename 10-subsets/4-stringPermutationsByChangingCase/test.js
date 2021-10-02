const {findCasePermutations} = require('./dfs')

test('it works 1', () => {
  const str = 'ad52'
  const result = findCasePermutations(str)
  // expect(result).toEqual(['ad52', 'Ad52', 'aD52', 'AD52'])
  expect(result).toEqual(['ad52', 'aD52', 'Ad52', 'AD52'])
})
