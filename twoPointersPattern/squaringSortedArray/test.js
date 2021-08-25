const {makeSquares} = require("./index")

test("it works 1", () => {
  const arr = [-2, -1, 0, 2, 3]
  makeSquares(arr)
  expect(arr).toEqual([0, 1, 4, 4, 9])
})

test("it works 2", () => {
  const arr = [-3, -1, 0, 1, 2]
  makeSquares(arr)
  expect(arr).toEqual([0, 1, 1, 4, 9])
})
