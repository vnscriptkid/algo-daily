const {topoSort} = require("./index")

test("it works 1", () => {
  const vertices = 5,
    edges = [
      [4, 2],
      [4, 3],
      [2, 0],
      [2, 1],
      [3, 1],
    ]
  const result = topoSort(vertices, edges)
  expect(result).toEqual([4, 2, 3, 0, 1])
})

test("it works 2", () => {
  const vertices = 7,
    edges = [
      [6, 4],
      [6, 2],
      [5, 3],
      [5, 4],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 1],
    ]
  const result = topoSort(vertices, edges)
  expect(result).toEqual([5, 6, 3, 4, 0, 2, 1])
})
