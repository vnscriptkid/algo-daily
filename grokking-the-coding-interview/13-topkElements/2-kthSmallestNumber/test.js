const {findKSmallestNumber} = require('.')

test('it works 1', () => {
  const arr = [1, 5, 12, 2, 11, 5],
    K = 3
  const result = findKSmallestNumber(arr, K)
  expect(result).toEqual(5)
})

test('it works 2', () => {
  const arr = [1, 5, 12, 2, 11, 5],
    K = 4
  const result = findKSmallestNumber(arr, K)
  expect(result).toEqual(5)
})

test('it works 3', () => {
  const arr = [5, 12, 11, -1, 12],
    K = 3
  const result = findKSmallestNumber(arr, K)
  expect(result).toEqual(11)
})
