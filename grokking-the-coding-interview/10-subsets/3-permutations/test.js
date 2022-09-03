const {findPermutations} = require('./index')
const {findPermutations: bfs} = require('./bfs')
const {findPermutations: findPermutationsSolution} = require('./solution')

test('it works 1', () => {
  const nums = [1, 3, 5]
  let result = findPermutations(nums)
  expect(result).toEqual([
    [1, 3, 5],
    [1, 5, 3],
    [3, 1, 5],
    [3, 5, 1],
    [5, 1, 3],
    [5, 3, 1],
  ])
  result = findPermutationsSolution(nums)
  expect(result).toEqual([
    [5, 3, 1],
    [3, 5, 1],
    [3, 1, 5],
    [5, 1, 3],
    [1, 5, 3],
    [1, 3, 5],
  ])
  result = bfs(nums)
  expect(result).toEqual([
    [5, 3, 1],
    [3, 5, 1],
    [3, 1, 5],
    [5, 1, 3],
    [1, 5, 3],
    [1, 3, 5],
  ])
})
