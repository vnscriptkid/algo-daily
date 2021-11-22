const {findkPairs} = require('./index')

test('it works 1', () => {
  const L1 = [9, 8, 2],
    L2 = [6, 3, 1],
    K = 3
  const result = findkPairs(L1, L2, K)
  expect(result).toEqual([
    [9, 3],
    [9, 6],
    [8, 6],
  ])
})

test('it works 2', () => {
  const L1 = [5, 2, 1],
    L2 = [2, -1],
    K = 3
  const result = findkPairs(L1, L2, K)
  expect(result).toEqual([
    [5, -1],
    [5, 2],
    [2, 2],
  ])
})
