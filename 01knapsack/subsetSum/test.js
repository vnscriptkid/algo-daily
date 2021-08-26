const {canFindSubset} = require('./bottomUp')

test('it works 1', () => {
  const set = [1, 2, 3, 7],
    S = 6
  const result = canFindSubset(set, S)
  expect(result).toEqual(true)
})

test('it works 2', () => {
  const set = [1, 2, 7, 1, 5],
    S = 10
  const result = canFindSubset(set, S)
  expect(result).toEqual(true)
})

test('it works 3', () => {
  const set = [1, 3, 4, 8],
    S = 6
  const result = canFindSubset(set, S)
  expect(result).toEqual(false)
})
