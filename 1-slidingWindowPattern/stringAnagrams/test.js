const {findAnagrams} = require("./index")

test("it works 1", () => {
  const str = "ppqp",
    pattern = "pq"
  const result = findAnagrams(str, pattern)
  expect(result).toEqual([1, 2])
})

test("it works 2", () => {
  const str = "abbcabc",
    pattern = "abc"
  const result = findAnagrams(str, pattern)
  expect(result).toEqual([2, 3, 4])
})
