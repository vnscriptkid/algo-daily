const {rearrangeString} = require("./index")

test("it works 1", () => {
  const str = "aappp"
  const result = rearrangeString(str)
  expect(result).toEqual("papap")
})

test("it works 2", () => {
  const str = "Programming"
  const result = rearrangeString(str)
  expect(result).toEqual("rgmrgmoaPin")
})

test("it works 3", () => {
  const str = "aapa"
  const result = rearrangeString(str)
  expect(result).toEqual("")
})
