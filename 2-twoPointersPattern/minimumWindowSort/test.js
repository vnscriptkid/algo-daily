const {findSmallestWindow} = require("./index")

test("it works 1", () => {
  const arr = [1, 2, 5, 3, 7, 10, 9, 12]
  const result = findSmallestWindow(arr)
  expect(result).toEqual(5)
})

test("it works 2", () => {
  const arr = [1, 3, 2, 0, -1, 7, 10]
  const result = findSmallestWindow(arr)
  expect(result).toEqual(5)
})

test("it works 3", () => {
  const arr = [1, 2, 3]
  const result = findSmallestWindow(arr)
  expect(result).toEqual(0)
})

test("it works 4", () => {
  const arr = [3, 2, 1]
  const result = findSmallestWindow(arr)
  expect(result).toEqual(3)
})
