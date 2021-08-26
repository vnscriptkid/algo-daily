const {search} = require('./index')

test('it works 1', () => {
  const arr = [4, 6, 10],
    target = 10
  const result = search(arr, target)
  expect(result).toEqual(2)
})

test('it works 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7],
    target = 5
  const result = search(arr, target)
  expect(result).toEqual(4)
})

test('it works 3', () => {
  const arr = [10, 6, 4],
    target = 10
  const result = search(arr, target)
  expect(result).toEqual(0)
})

test('it works 4', () => {
  const arr = [10, 6, 4],
    target = 4
  const result = search(arr, target)
  expect(result).toEqual(2)
})
