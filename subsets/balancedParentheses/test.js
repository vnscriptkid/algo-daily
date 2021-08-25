const {generateBalancedParen} = require("./index")

test("it works 1", () => {
  const n = 3
  const result = generateBalancedParen(n)

  expect(result).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"])
})
