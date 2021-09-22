const {canFindSubset} = require('./bottomUp')
const {canFindSubset: topDown} = require('./topDown')

test('it works 1', () => {
  const set = [1, 2, 3, 7],
    S = 6
  let result = canFindSubset(set, S)
  expect(result).toEqual(true)
  result = topDown(set, S)
  expect(result).toEqual(true)
})

test('it works 2', () => {
  const set = [1, 2, 7, 1, 5],
    S = 10
  let result = canFindSubset(set, S)
  expect(result).toEqual(true)
  result = topDown(set, S)
  expect(result).toEqual(true)
})

test('it works 3', () => {
  const set = [1, 3, 4, 8],
    S = 6
  let result = canFindSubset(set, S)
  expect(result).toEqual(false)
  result = topDown(set, S)
  expect(result).toEqual(false)
})
