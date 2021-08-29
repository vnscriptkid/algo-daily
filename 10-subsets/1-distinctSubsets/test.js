const {findDistinctSubsets, Solution} = require('./index')

test('it works 1', () => {
  const nums = [1, 3]
  let result = findDistinctSubsets(nums)
  expect(result).toEqual([[], [1], [3], [1, 3]])
  result = new Solution().findDistinctSubsets(nums)
  expect(result).toEqual([[], [1], [1, 3], [3]])
})

test('it works 2', () => {
  const nums = [1, 5, 3]
  let result = findDistinctSubsets(nums)
  expect(result).toEqual([[], [1], [5], [1, 5], [3], [1, 3], [5, 3], [1, 5, 3]])
  result = new Solution().findDistinctSubsets(nums)
  expect(result).toEqual([[], [1], [1, 5], [1, 5, 3], [1, 3], [5], [5, 3], [3]])
})
