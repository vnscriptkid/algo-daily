const {getAveragesSubarray} = require('./index')

test('it works', () => {
  const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2],
    k = 5
  const result = getAveragesSubarray(arr, k)
  expect(result).toEqual([2.2, 2.8, 2.4, 3.6, 2.8])
})
