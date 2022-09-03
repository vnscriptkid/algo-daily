const {findTripletsWithSmallerSum} = require('./index')

test('it works 1', () => {
  const result = findTripletsWithSmallerSum([-1, 0, 2, 3], 3)
  expect(result).toBe(2)
})

test('it works 2', () => {
  const result = findTripletsWithSmallerSum([-1, 4, 2, 1, 3], 5)
  expect(result).toBe(4)
})
