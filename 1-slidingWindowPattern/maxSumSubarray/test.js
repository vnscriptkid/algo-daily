const {maxSumSubarray} = require("./index")

test("it works 1", () => {
  const arr = [2, 1, 5, 1, 3, 2],
    k = 3
  const result = maxSumSubarray(arr, k)
  expect(result).toEqual(9)
})

test("it works 2", () => {
  const arr = [2, 3, 4, 1, 5],
    k = 2
  const result = maxSumSubarray(arr, k)
  expect(result).toEqual(7)
})
