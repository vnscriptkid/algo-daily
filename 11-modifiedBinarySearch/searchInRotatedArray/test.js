const {search} = require('./index')
const {search: solution} = require('./solution')

test('it works 1', () => {
  const arr = [10, 15, 1, 3, 8],
    key = 15
  let result = search(arr, key)
  expect(result).toEqual(1)
  result = solution(arr, key)
  expect(result).toEqual(1)
})

test('it works 2', () => {
  const arr = [4, 5, 7, 9, 10, -1, 2],
    key = 10
  let result = search(arr, key)
  expect(result).toEqual(4)
  result = solution(arr, key)
  expect(result).toEqual(4)
})
