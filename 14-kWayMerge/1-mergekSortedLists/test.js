const {mergeLists} = require('./index')

test('it works 1', () => {
  const L1 = [2, 6, 8],
    L2 = [3, 6, 7],
    L3 = [1, 3, 4]
  const result = mergeLists([L1, L2, L3])
  expect(result).toEqual([1, 2, 3, 3, 4, 6, 6, 7, 8])
})

test('it works 2', () => {
  const L1 = [5, 8, 9],
    L2 = [1, 7]
  const result = mergeLists([L1, L2])
  expect(result).toEqual([1, 5, 7, 8, 9])
})
