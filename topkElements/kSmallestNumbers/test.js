const {findkSmallest} = require('./index')

test('it works 1', () => {
  const arr = [3, 1, 5, 12, 2, 11],
    k = 3
  let result = findkSmallest(arr, k)
  expect(result).toEqual([3, 1, 2])
})

test('it works 2', () => {
  const arr = [5, 12, 11, -1, 12],
    k = 3
  let result = findkSmallest(arr, k)
  expect(result).toEqual([11, 5, -1])
})
