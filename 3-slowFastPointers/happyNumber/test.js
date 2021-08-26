const {isHappyNumber} = require("./index")

test("it works 1", () => {
  const num = 23
  const result = isHappyNumber(num)
  expect(result).toEqual(true)
})

test("it works 2", () => {
  const num = 12
  const result = isHappyNumber(num)
  expect(result).toEqual(false)
})
