const {findKmissingPositiveNumbers} = require('./index')

test('it works 1', () => {
  const arr = [3, -1, 4, 5, 5],
    k = 3
  const result = findKmissingPositiveNumbers(arr, k)
  expect(result).toEqual([1, 2, 6])
})

test('it works 2', () => {
  const arr = [2, 3, 4],
    k = 3
  const result = findKmissingPositiveNumbers(arr, k)
  expect(result).toEqual([1, 5, 6])
})

test('it works 3', () => {
  const arr = [-2, -3, 4],
    k = 2
  const result = findKmissingPositiveNumbers(arr, k)
  expect(result).toEqual([1, 2])
})
