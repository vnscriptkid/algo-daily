const {findCeilingNumber} = require('./index')

test('it works 1', () => {
  const arr = [4, 6, 10],
    key = 6
  const result = findCeilingNumber(arr, key)
  expect(result).toEqual(1)
})

test('it works 2', () => {
  const arr = [1, 3, 8, 10, 15],
    key = 12
  const result = findCeilingNumber(arr, key)
  expect(result).toEqual(4)
})

test('it works 3', () => {
  const arr = [4, 6, 10],
    key = 17
  const result = findCeilingNumber(arr, key)
  expect(result).toEqual(-1)
})

test('it works 4', () => {
  const arr = [4, 6, 10],
    key = -1
  const result = findCeilingNumber(arr, key)
  expect(result).toEqual(0)
})
