const {findSmallestRange} = require("./index")

test("it works 1", () => {
  const L1 = [1, 5, 8],
    L2 = [4, 12],
    L3 = [7, 8, 10]
  const result = findSmallestRange([L1, L2, L3])
  expect(result).toEqual([4, 7])
})

test("it works 2", () => {
  const L1 = [1, 9],
    L2 = [4, 12],
    L3 = [7, 10, 16]
  const result = findSmallestRange([L1, L2, L3])
  expect(result).toEqual([9, 12])
})
