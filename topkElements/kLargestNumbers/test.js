const {findkLargest} = require("./index")
const {findkLargest: solution} = require("./solution")

test("it works 1", () => {
  const arr = [3, 1, 5, 12, 2, 11],
    k = 3
  let result = findkLargest(arr, k)
  expect(result).toEqual([5, 11, 12])
  result = solution(arr, k)
  expect(result).toEqual([5, 12, 11])
})

test("it works 2", () => {
  const arr = [5, 12, 11, -1, 12],
    k = 3
  let result = findkLargest(arr, k)
  expect(result).toEqual([11, 12, 12])
  result = solution(arr, k)
  expect(result).toEqual([11, 12, 12])
})
