const {Stack} = require("./index")

test("it works 1", () => {
  const stack = new Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(2)
  stack.push(1)
  stack.push(2)
  stack.push(5)

  const pop1 = stack.pop()
  const pop2 = stack.pop()
  const pop3 = stack.pop()

  expect(pop1).toEqual(2)
  expect(pop2).toEqual(1)
  expect(pop3).toEqual(2)
})
