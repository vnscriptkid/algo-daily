const {findComplement} = require("./index")

test("it works 1", () => {
  const num = 8
  const result = findComplement(num)
  expect(result).toEqual(7)
})

test("it works 2", () => {
  const num = 10
  const result = findComplement(num)
  expect(result).toEqual(5)
})
