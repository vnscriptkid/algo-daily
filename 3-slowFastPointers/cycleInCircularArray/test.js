const {isCircular} = require("./index")

test("it works 1", () => {
  const arr = [1, 2, -1, 2, 2]
  const result = isCircular(arr)
  expect(result).toEqual(true)
})

test("it works 2", () => {
  const arr = [2, 2, -1, 2]
  const result = isCircular(arr)
  expect(result).toEqual(true)
})

test("it works 3", () => {
  const arr = [2, 1, -1, -2]
  const result = isCircular(arr)
  expect(result).toEqual(false)
})
