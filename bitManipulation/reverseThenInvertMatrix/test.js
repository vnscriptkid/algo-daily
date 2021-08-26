const {reverseThenInvert} = require('./index')
const {reverseThenInvert: solution} = require('./solution')

test('it works 1', () => {
  const matrix = [
    [1, 0, 1],
    [1, 1, 1],
    [0, 1, 1],
  ]

  reverseThenInvert(matrix)
  expect(matrix).toEqual([
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
  ])

  const matrix2 = [
    [1, 0, 1],
    [1, 1, 1],
    [0, 1, 1],
  ]

  solution(matrix2)
  expect(matrix2).toEqual([
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
  ])
})

test('it works 2', () => {
  const matrix = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ]

  reverseThenInvert(matrix)
  expect(matrix).toEqual([
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 0],
  ])

  const matrix2 = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ]

  solution(matrix2)
  expect(matrix2).toEqual([
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 0],
  ])
})
