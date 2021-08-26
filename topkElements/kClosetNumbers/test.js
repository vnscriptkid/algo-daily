const {findKClosetNums} = require('./index')

test('it works 1', () => {
  const nums = [5, 6, 7, 8, 9],
    K = 3,
    X = 7
  const result = findKClosetNums(nums, K, X)
  expect(result).toEqual([6, 7, 8])
})

test('it works 2', () => {
  const nums = [2, 4, 5, 6, 9],
    K = 3,
    X = 6
  const result = findKClosetNums(nums, K, X)
  expect(result).toEqual([4, 5, 6])
})

test('it works 3', () => {
  const nums = [2, 4, 5, 6, 9],
    K = 3,
    X = 10
  const result = findKClosetNums(nums, K, X)
  expect(result).toEqual([5, 6, 9])
})
