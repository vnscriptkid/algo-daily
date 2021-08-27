const {findMissingNumber} = require('./index')

test('it works 1', () => {
  const arr = [1, 2, 0, 4]
  const result = findMissingNumber(arr)
  expect(result).toEqual(3)
})

test('it works 2', () => {
  // edge case 1
  const arr = [1, 2, 0, 3]
  const result = findMissingNumber(arr)
  expect(result).toEqual(4)
})

test('it works 3', () => {
  // edge case 2
  const arr = [1, 2, 3, 4]
  const result = findMissingNumber(arr)
  expect(result).toEqual(0)
})

test('it works 4', () => {
  const arr = [8, 3, 5, 2, 4, 6, 0, 1]
  const result = findMissingNumber(arr)
  expect(result).toEqual(7)
})
