const {countRotations} = require('./index')
const {countRotations: solution} = require('./solution')

test('it works 1', () => {
  const arr = [10, 15, 1, 3, 8]
  let result = countRotations(arr)
  expect(result).toEqual(2)
  result = solution(arr)
  expect(result).toEqual(2)
})
test('it works 2', () => {
  const arr = [4, 5, 7, 9, 10, -1, 2]
  let result = countRotations(arr)
  expect(result).toEqual(5)
  result = solution(arr)
  expect(result).toEqual(5)
})
test('it works 3', () => {
  const arr = [1, 3, 8, 10]
  let result = countRotations(arr)
  expect(result).toEqual(0)
  result = solution(arr)
  expect(result).toEqual(0)
})
