const {minimizeRopeCost} = require("./index")

test("it works 1", () => {
  const ropes = [1, 3, 11, 5]
  const result = minimizeRopeCost(ropes)
  expect(result).toEqual(33)
})

test("it works 2", () => {
  const ropes = [3, 4, 5, 6]
  const result = minimizeRopeCost(ropes)
  expect(result).toEqual(36)
})

test("it works 3", () => {
  const ropes = [1, 3, 11, 5, 2]
  const result = minimizeRopeCost(ropes)
  expect(result).toEqual(42)
})
