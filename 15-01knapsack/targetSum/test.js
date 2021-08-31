const {countWaysToAddSymbols: bruteforce} = require('./bruteForce')
const {countWaysToAddSymbols: bottomUp} = require('./bottomUp')

test('it works 1', () => {
  const nums = [1, 1, 2, 3],
    sum = 1
  let result = bruteforce(nums, sum)
  expect(result).toEqual(3)
  // bottom up
  result = bottomUp(nums, sum)
  expect(result).toEqual(3)
})

test('it works 2', () => {
  const nums = [1, 2, 7, 1],
    sum = 9
  let result = bruteforce(nums, sum)
  expect(result).toEqual(2)
  // bottom up
  result = bottomUp(nums, sum)
  expect(result).toEqual(2)
})
