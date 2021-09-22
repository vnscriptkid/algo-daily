const {findMedian} = require('./index')

test('it works 1', () => {
  const L1 = [2, 6, 8],
    L2 = [3, 6, 7],
    L3 = [1, 3, 4]
  // 1 2 3 3 (4) 5 5 7 8
  const result = findMedian([L1, L2, L3])
  expect(result).toEqual(4)
})

test('it works 2', () => {
  const L1 = [5, 8, 9],
    L2 = [1, 7, 10]
  // 1 5, (7, 8,) 9, 10
  // 15 / 2 ~ 7.5
  const result = findMedian([L1, L2])
  expect(result).toEqual(7.5)
})
