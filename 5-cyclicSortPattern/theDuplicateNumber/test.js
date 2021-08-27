const {findDuplicateNumber} = require('./index')

test('it works 1', () => {
  const arr = [1, 4, 4, 3, 2]
  const result = findDuplicateNumber(arr)
  expect(result).toEqual(4)
})

test('it works 2', () => {
  const arr = [2, 1, 3, 3, 5, 4]
  const result = findDuplicateNumber(arr)
  expect(result).toEqual(3)
})

test('it works 3', () => {
  const arr = [2, 4, 1, 4, 4]
  const result = findDuplicateNumber(arr)
  expect(result).toEqual(4)
})
