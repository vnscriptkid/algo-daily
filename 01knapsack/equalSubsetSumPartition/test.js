const {canPartitionEqually: bruteForce} = require('./bruteForce')
const {canPartitionEqually: topDown} = require('./topDown')
const {canPartitionEqually: bottomUp} = require('./bottomUp')

test('it works 1', () => {
  const set = [1, 2, 3, 4]
  let result = bruteForce(set)
  expect(result).toEqual(true)
  result = topDown(set)
  expect(result).toEqual(true)
  result = bottomUp(set)
  expect(result).toEqual(true)
})

test('it works 2', () => {
  const set = [1, 1, 3, 4, 7]
  let result = bruteForce(set)
  expect(result).toEqual(true)
  result = topDown(set)
  expect(result).toEqual(true)
  result = bottomUp(set)
  expect(result).toEqual(true)
})

test('it works 3', () => {
  const set = [2, 3, 4, 6]
  let result = bruteForce(set)
  expect(result).toEqual(false)
  result = topDown(set)
  expect(result).toEqual(false)
  result = bottomUp(set)
  expect(result).toEqual(false)
})
