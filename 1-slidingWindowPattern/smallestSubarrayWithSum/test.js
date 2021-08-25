const {findSmallestSubarray} = require("./index")

test("it works 1", () => {
  const arr = [2, 1, 5, 2, 3, 2],
    sum = 7
  const result = findSmallestSubarray(arr, sum)
  expect(result).toEqual(2)
})

test("it works 2", () => {
  const arr = [2, 1, 5, 2, 8],
    sum = 7
  const result = findSmallestSubarray(arr, sum)
  expect(result).toEqual(1)
})

test("it works 3", () => {
  const arr = [3, 4, 1, 1, 6],
    sum = 8
  const result = findSmallestSubarray(arr, sum)
  expect(result).toEqual(3)
})
