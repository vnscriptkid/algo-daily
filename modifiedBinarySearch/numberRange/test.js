const {findNumberRange} = require('./index')

test('it works 1', () => {
  const arr = [4, 6, 6, 6, 9],
    key = 6
  const result = findNumberRange(arr, key)
  expect(result).toEqual([1, 3])
})

test('it works 2', () => {
  const arr = [1, 3, 8, 10, 15],
    key = 10
  const result = findNumberRange(arr, key)
  expect(result).toEqual([3, 3])
})

test('it works 3', () => {
  const arr = [1, 3, 8, 10, 15],
    key = 12
  const result = findNumberRange(arr, key)
  expect(result).toEqual([-1, -1])
})
