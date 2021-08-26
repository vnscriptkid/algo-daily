const {maximizeDistinctNumbers} = require('./index')

test('it works 1', () => {
  const arr = [7, 3, 5, 8, 5, 3, 3],
    k = 2
  const result = maximizeDistinctNumbers(arr, k)
  expect(result).toEqual(3)
})

test('it works 2', () => {
  const arr = [3, 5, 12, 11, 12],
    k = 3
  const result = maximizeDistinctNumbers(arr, k)
  expect(result).toEqual(2)
})

test('it works 3', () => {
  const arr = [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5],
    k = 2
  const result = maximizeDistinctNumbers(arr, k)
  expect(result).toEqual(3)
})
