const {search, InfiniteArray} = require("./index")

test("it works 1", () => {
  const arr = new InfiniteArray([
      4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
    ]),
    key = 16
  const result = search(arr, key)
  expect(result).toEqual(6)
})

test("it works 2", () => {
  const arr = new InfiniteArray([
      4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
    ]),
    key = 11
  const result = search(arr, key)
  expect(result).toEqual(-1)
})

test("it works 3", () => {
  const arr = new InfiniteArray([1, 3, 8, 10, 15]),
    key = 15
  const result = search(arr, key)
  expect(result).toEqual(4)
})

test("it works 4", () => {
  const arr = new InfiniteArray([1, 3, 8, 10, 15]),
    key = 200
  const result = search(arr, key)
  expect(result).toEqual(-1)
})
