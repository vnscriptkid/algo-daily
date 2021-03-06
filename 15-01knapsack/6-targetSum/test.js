const {countWaysToAddSymbols: bruteforce} = require('./bruteForceFinal')
const {countWaysToAddSymbols: bf} = require('./bruteForce')
const {countWaysToAddSymbols: bottomUp} = require('./bottomUpFinal')
const {countWaysToAddSymbols: bu} = require('./bottomUp')

test('it works 1', () => {
  const nums = [1, 1, 2, 3],
    sum = 1
  let result = bruteforce(nums, sum)
  expect(result).toEqual(3)
  // bf
  result = bf(nums, sum)
  expect(result).toEqual(3)
  // bottom up
  result = bottomUp(nums, sum)
  expect(result).toEqual(3)
  // bf
  result = bu(nums, sum)
  expect(result).toEqual(3)
})

test('it works 2', () => {
  const nums = [1, 2, 7, 1],
    sum = 9
  let result = bruteforce(nums, sum)
  expect(result).toEqual(2)
  // bf
  result = bf(nums, sum)
  expect(result).toEqual(2)
  // bottom up
  result = bottomUp(nums, sum)
  expect(result).toEqual(2)
  // bf
  result = bu(nums, sum)
  expect(result).toEqual(2)
})
