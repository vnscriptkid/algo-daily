const {findCorruptPair} = require("./index")

test("it works 1", () => {
  const arr = [3, 1, 2, 5, 2]
  const result = findCorruptPair(arr)
  expect(result).toEqual([2, 4])
})

test("it works 2", () => {
  const arr = [3, 1, 2, 3, 6, 4]
  const result = findCorruptPair(arr)
  expect(result).toEqual([3, 5])
})
