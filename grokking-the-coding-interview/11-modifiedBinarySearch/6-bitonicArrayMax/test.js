const {findMaxInBitonicArr} = require('./index')

test('it works 1', () => {
  const arr = [1, 3, 8, 12, 4, 2]
  const result = findMaxInBitonicArr(arr)
  expect(result).toEqual(12)
})

test('it works 2', () => {
  const arr = [3, 8, 3, 1]
  const result = findMaxInBitonicArr(arr)
  expect(result).toEqual(8)
})

test('it works 3', () => {
  const arr = [1, 3, 8, 12]
  const result = findMaxInBitonicArr(arr)
  expect(result).toEqual(12)
})

test('it works 4', () => {
  const arr = [10, 9, 8]
  const result = findMaxInBitonicArr(arr)
  expect(result).toEqual(10)
})
