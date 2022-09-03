const {putFruitsIntoTwoBaskets} = require('./index')

test('it works 1', () => {
  const fruits = ['A', 'B', 'C', 'A', 'C']
  const result = putFruitsIntoTwoBaskets(fruits)
  expect(result).toEqual(3)
})

test('it works 2', () => {
  const fruits = ['A', 'B', 'C', 'B', 'B', 'C']
  const result = putFruitsIntoTwoBaskets(fruits)
  expect(result).toEqual(5)
})
