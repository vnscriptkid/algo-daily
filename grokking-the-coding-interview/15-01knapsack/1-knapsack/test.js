const {findBestCombination: bruteForce} = require('./bruteForce')
const {findBestCombination: topDown} = require('./topDown')
const {findBestCombination: bottomUp} = require('./bottomUp')
const {findMaxProfitBF} = require('./index')

test('it works 1', () => {
  const profits = [1, 6, 10, 16],
    weights = [1, 2, 3, 5],
    capacity = 7
  let result = bruteForce(profits, weights, capacity)
  expect(result).toEqual(22)
  result = topDown(profits, weights, capacity)
  expect(result).toEqual(22)
  result = bottomUp(profits, weights, capacity)
  expect(result).toEqual(22)
  result = findMaxProfitBF(profits, weights, capacity)
  expect(result).toEqual(22)
})
