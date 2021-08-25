const { findTrees } = require("./index");

test("it works 1", () => {
  const vertices = 5,
    edges = [
      [0, 1],
      [1, 2],
      [1, 3],
      [2, 4],
    ];
  const result = findTrees(vertices, edges);
  expect(result).toEqual([1, 2]);
});

test("it works 2", () => {
  const vertices = 4,
    edges = [
      [0, 1],
      [0, 2],
      [2, 3],
    ];
  const result = findTrees(vertices, edges);
  expect(result).toEqual([0, 2]);
});

test("it works 3", () => {
  const vertices = 4,
    edges = [
      [0, 1],
      [1, 2],
      [1, 3],
    ];
  const result = findTrees(vertices, edges);
  expect(result).toEqual([1]);
});
