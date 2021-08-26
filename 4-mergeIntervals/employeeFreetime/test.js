const {findCommonFreetime} = require("./index")
const {findCommonFreetime: findCommonFreetimeSolution} = require("./solution")

test("it works 1", () => {
  const workingHours = [
    [
      [1, 3],
      [5, 6],
    ],
    [
      [2, 3],
      [6, 8],
    ],
  ]
  let result = findCommonFreetime(workingHours)
  expect(result).toEqual([[3, 5]])
  // solution
  result = findCommonFreetimeSolution(workingHours)
  expect(result).toEqual([[3, 5]])
})

test("it works 2", () => {
  const workingHours = [
    [
      [1, 3],
      [9, 12],
    ],
    [[2, 4]],
    [[6, 8]],
  ]
  let result = findCommonFreetime(workingHours)
  expect(result).toEqual([
    [4, 6],
    [8, 9],
  ])
  // solution
  result = findCommonFreetimeSolution(workingHours)
  expect(result).toEqual([
    [4, 6],
    [8, 9],
  ])
})

test("it works 3", () => {
  const workingHours = [
    [[1, 3]],
    [[2, 4]],
    [
      [3, 5],
      [7, 9],
    ],
  ]
  let result = findCommonFreetime(workingHours)
  expect(result).toEqual([[5, 7]])
  // solution
  result = findCommonFreetimeSolution(workingHours)
  expect(result).toEqual([[5, 7]])
})
