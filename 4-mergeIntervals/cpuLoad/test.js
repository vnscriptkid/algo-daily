const {findMaxCpuLoad} = require('./index')

test('it works 1', () => {
  const jobs = [
    [1, 4, 3],
    [2, 5, 4],
    [7, 9, 6],
  ]
  const result = findMaxCpuLoad(jobs)
  expect(result).toEqual(7)
})

test('it works 2', () => {
  const jobs = [
    [6, 7, 10],
    [2, 4, 11],
    [8, 12, 15],
  ]
  const result = findMaxCpuLoad(jobs)
  expect(result).toEqual(15)
})

test('it works 3', () => {
  const jobs = [
    [1, 4, 2],
    [2, 4, 1],
    [3, 6, 5],
  ]
  const result = findMaxCpuLoad(jobs)
  expect(result).toEqual(8)
})
