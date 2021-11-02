const {countSubsetSum: bruteforceFinal} = require('./bruteForceFinal')
const {countSubsetSum: bruteForce} = require('./bruteForce')
const {countSubsetSum: bottomUpFinal} = require('./bottomUpFinal')

test('it works 1', () => {
  const set = [1, 1, 2, 3],
    sum = 4
  let result = bruteforceFinal(set, sum)
  expect(result).toEqual(3)

  result = bruteForce(set, sum)
  expect(result).toEqual(3)

  result = bottomUpFinal(set, sum)
  expect(result).toEqual(3)
})

test('it works 2', () => {
  const set = [1, 2, 7, 1, 5],
    sum = 9
  let result = bruteforceFinal(set, sum)
  expect(result).toEqual(3)

  result = bruteForce(set, sum)
  expect(result).toEqual(3)

  result = bottomUpFinal(set, sum)
  expect(result).toEqual(3)
})
