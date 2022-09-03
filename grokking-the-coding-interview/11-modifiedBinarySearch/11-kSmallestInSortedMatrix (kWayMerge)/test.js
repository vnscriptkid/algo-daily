const {findKsmallest} = require('.')

test('it works 1', () => {
  const Matrix = [
      [2, 6, 8],
      [3, 7, 10],
      [5, 8, 11],
    ],
    K = 5
  const result = findKsmallest(Matrix, K)
  expect(result).toEqual(7)
})
