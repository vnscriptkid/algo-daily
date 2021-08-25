const {isSchedulingPossible} = require("./index")

test("it works 1", () => {
  const tasks = 3,
    prerequisites = [
      [0, 1],
      [1, 2],
    ]
  const result = isSchedulingPossible(tasks, prerequisites)
  expect(result).toEqual(true)
})

test("it works 2", () => {
  const tasks = 3,
    prerequisites = [
      [0, 1],
      [1, 2],
      [2, 0],
    ]
  const result = isSchedulingPossible(tasks, prerequisites)
  expect(result).toEqual(false)
})

test("it works 3", () => {
  const tasks = 6,
    prerequisites = [
      [2, 5],
      [0, 5],
      [0, 4],
      [1, 4],
      [3, 2],
      [1, 3],
    ]
  const result = isSchedulingPossible(tasks, prerequisites)
  expect(result).toEqual(true)
})
