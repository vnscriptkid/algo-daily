const {findCasePermutations} = require('./dfs')
const {findCasePermutations: bfs} = require('./bfs')

test('it works 1', () => {
  const str = 'ad52'
  let result = findCasePermutations(str)
  // expect(result).toEqual(['ad52', 'Ad52', 'aD52', 'AD52'])
  expect(result).toEqual(['ad52', 'aD52', 'Ad52', 'AD52'])
  result = bfs(str)
  expect(result).toEqual(['ad52', 'Ad52', 'aD52', 'AD52'])
})
