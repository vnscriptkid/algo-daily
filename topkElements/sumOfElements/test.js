const {sumOf} = require("./index")

test("it works 1", () => {
  const nums = [1, 3, 12, 5, 15, 11],
    k1 = 3,
    k2 = 6
  const result = sumOf(nums, k1, k2)
  expect(result).toEqual(23)
})

test("it works 2", () => {
  const nums = [3, 5, 8, 7],
    k1 = 1,
    k2 = 4
  const result = sumOf(nums, k1, k2)
  expect(result).toEqual(12)
})
