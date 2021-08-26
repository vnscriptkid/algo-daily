const {findTopFrequent} = require('./index')

test('it works 1', () => {
  const nums = [1, 3, 5, 12, 11, 12, 11],
    k = 2
  const result = findTopFrequent(nums, k)
  expect(result).toEqual([12, 11])
})

test('it works 2', () => {
  const nums = [5, 12, 11, 3, 11],
    k = 2
  const result = findTopFrequent(nums, k)
  expect(result).toEqual([12, 11])
})
