const {searchTriplets} = require('./index')

test('it works 1', () => {
  const arr = [-2, 0, 1, 2],
    target = 2
  const result = searchTriplets(arr, target)
  expect(result).toEqual(1)
})

test('it works 2', () => {
  const arr = [-3, -1, 1, 2],
    target = 1
  const result = searchTriplets(arr, target)
  expect(result).toEqual(0)
})

test('it works 3', () => {
  const arr = [1, 0, 1, 1],
    target = 100
  const result = searchTriplets(arr, target)
  expect(result).toEqual(3)
})
