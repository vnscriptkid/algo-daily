const {findKthSmallest} = require('./index')

test('it works 1', () => {
  const L1 = [2, 6, 8],
    L2 = [3, 6, 7],
    L3 = [1, 3, 4],
    K = 5
  const result = findKthSmallest([L1, L2, L3], K)
  expect(result).toEqual(4)
})

test('it works 2', () => {
  const L1 = [5, 8, 9],
    L2 = [1, 7],
    K = 3
  const result = findKthSmallest([L1, L2], K)
  expect(result).toEqual(7)
})
