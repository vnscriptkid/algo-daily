const {countSubsetSum: bruteforce} = require('./bruteForce')
const {countSubsetSum: bottomUp} = require('./bottomUp')

test('it works 1', () => {
  const set = [1, 1, 2, 3],
    sum = 4
  let result = bruteforce(set, sum)
  expect(result).toEqual(3)
  result = bottomUp(set, sum)
  expect(result).toEqual(3)
})

test('it works 2', () => {
  const set = [1, 2, 7, 1, 5],
    sum = 9
  let result = bruteforce(set, sum)
  expect(result).toEqual(3)
  result = bottomUp(set, sum)
  expect(result).toEqual(3)
})
