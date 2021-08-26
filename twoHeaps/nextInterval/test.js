const {findNextIntervals} = require('./index')

test('it works 1', () => {
  const intervals = [
    [2, 3],
    [3, 4],
    [5, 6],
  ]
  const result = findNextIntervals(intervals)
  expect(result).toEqual([1, 2, -1])
})

test('it works 2', () => {
  const intervals = [
    [3, 4],
    [1, 5],
    [4, 6],
  ]
  const result = findNextIntervals(intervals)
  expect(result).toEqual([2, -1, -1])
})
