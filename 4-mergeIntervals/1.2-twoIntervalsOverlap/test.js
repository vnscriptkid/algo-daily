const {anyOverlap} = require('./index')

test('it works 1', () => {
  const intervals = [
    [1, 4],
    [2, 5],
    [7, 9],
  ]
  const result = anyOverlap(intervals)
  expect(result).toEqual(true)
})

test('it works 2', () => {
  const intervals = [
    [1, 4],
    [4, 5],
    [7, 9],
  ]
  const result = anyOverlap(intervals)
  expect(result).toEqual(false)
})
