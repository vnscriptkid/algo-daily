const {findLongestSubstrNoRepeat} = require("./index")

test("it works 1", () => {
  const str = "aabccbb"
  const result = findLongestSubstrNoRepeat(str)
  expect(result).toEqual(3)
})

test("it works 2", () => {
  const str = "abbbb"
  const result = findLongestSubstrNoRepeat(str)
  expect(result).toEqual(2)
})

test("it works 3", () => {
  const str = "abccde"
  const result = findLongestSubstrNoRepeat(str)
  expect(result).toEqual(3)
})

test("it works 4", () => {
  const str = "abcad"
  const result = findLongestSubstrNoRepeat(str)
  expect(result).toEqual(4)
})

test("it works 5", () => {
  const str = "abcbad"
  const result = findLongestSubstrNoRepeat(str)
  expect(result).toEqual(4)
})
