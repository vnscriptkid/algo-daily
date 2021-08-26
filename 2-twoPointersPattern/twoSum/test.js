const {twoSum} = require("./index")

test("it works 1", () => {
  const arr = [1, 2, 3, 4, 6],
    target = 6
  const result = twoSum(arr, target)
  expect(result).toEqual([1, 3])
})

test("it works 2", () => {
  const arr = [2, 5, 9, 11],
    target = 11
  const result = twoSum(arr, target)
  expect(result).toEqual([0, 2])
})

test("it works 3", () => {
  const arr = [2, 5, 9, 11],
    target = 12
  const result = twoSum(arr, target)
  expect(result).toEqual([-1, -1])
})
