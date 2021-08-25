const {insert} = require("./index")

test("it works 1", () => {
  const intervals = [
      [1, 3],
      [5, 7],
      [8, 12],
    ],
    newInterval = [4, 6]
  const result = insert(intervals, newInterval)
  expect(result).toEqual([
    [1, 3],
    [4, 7],
    [8, 12],
  ])
})

test("it works 2", () => {
  const intervals = [
      [1, 3],
      [5, 7],
      [8, 12],
    ],
    newInterval = [4, 10]
  const result = insert(intervals, newInterval)
  expect(result).toEqual([
    [1, 3],
    [4, 12],
  ])
})

test("it works 3", () => {
  const intervals = [
      [2, 3],
      [5, 7],
    ],
    newInterval = [1, 4]
  const result = insert(intervals, newInterval)
  expect(result).toEqual([
    [1, 4],
    [5, 7],
  ])
})
