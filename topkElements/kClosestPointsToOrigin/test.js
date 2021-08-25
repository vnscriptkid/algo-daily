const {findClosestPointsToOrigin} = require("./index")

test("it works 1", () => {
  const points = [
      [1, 2],
      [1, 3],
    ],
    k = 1
  const result = findClosestPointsToOrigin(points, k)
  expect(result).toEqual([[1, 2]])
})

test("it works 2", () => {
  const points = [
      [1, 3],
      [3, 4],
      [2, -1],
    ],
    k = 2
  const result = findClosestPointsToOrigin(points, k)
  expect(result).toEqual([
    [1, 3],
    [2, -1],
  ])
})
