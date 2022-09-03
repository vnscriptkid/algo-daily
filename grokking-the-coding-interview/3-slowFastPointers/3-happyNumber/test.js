const {isHappyNumber} = require('./index')

test('it works 1', () => {
  const num = 23
  const result = isHappyNumber(num)
  expect(result).toEqual(true)
})

test('it works 2', () => {
  const num = 12
  const result = isHappyNumber(num)
  expect(result).toEqual(false)
})

test('it works 3', () => {
  const num = 94
  const result = isHappyNumber(num)
  expect(result).toEqual(true)
})

test('it works 4', () => {
  const num = 18
  const result = isHappyNumber(num)
  expect(result).toEqual(false)
})
