const {findLongestSubstr} = require("./index")

test("it works 1", () => {
  const str = "araaci",
    k = 2
  const result = findLongestSubstr(str, k)
  expect(result).toEqual(4)
})

test("it works 2", () => {
  const str = "araaci",
    k = 1
  const result = findLongestSubstr(str, k)
  expect(result).toEqual(2)
})

test("it works 3", () => {
  const str = "cbbebi"
  k = 3
  const result = findLongestSubstr(str, k)
  expect(result).toEqual(5)
})
