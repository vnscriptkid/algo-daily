const {searchQuadruplets} = require('./index')

test('it works 1', () => {
  const arr = [4, 1, 2, -1, 1, -3],
    target = 1
  const result = searchQuadruplets(arr, target)
  expect(result).toEqual([
    [-3, -1, 1, 4],
    [-3, 1, 1, 2],
  ])
})

test('it works 2', () => {
  const arr = [2, 0, -1, 1, -2, 2],
    target = 2
  const result = searchQuadruplets(arr, target)
  expect(result).toEqual([
    [-2, 0, 2, 2],
    [-1, 0, 1, 2],
  ])
})
