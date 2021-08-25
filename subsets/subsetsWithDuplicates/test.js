const {findDistinctSubsets} = require("./index")

test("it works 1", () => {
  const nums = [1, 3, 3]
  const result = findDistinctSubsets(nums)
  expect(result).toEqual([[], [1], [3], [1, 3], [3, 3], [1, 3, 3]])
})

test("it works 2", () => {
  const nums = [1, 5, 3, 3]
  const result = findDistinctSubsets(nums)
  expect(result).toEqual([
    [],
    [1],
    [3],
    [1, 3],
    [3, 3],
    [1, 3, 3],
    [5],
    [1, 5],
    [3, 5],
    [1, 3, 5],
    [3, 3, 5],
    [1, 3, 3, 5],
  ])
})
