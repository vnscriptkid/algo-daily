const { findIntersections } = require("./index");

test("it works 1", () => {
  const arr1 = [
      [1, 3],
      [5, 6],
      [7, 9],
    ],
    arr2 = [
      [2, 3],
      [5, 7],
    ];
  const result = findIntersections(arr1, arr2);
  expect(result).toEqual([
    [2, 3],
    [5, 6],
    [7, 7],
  ]);
});

test("it works 2", () => {
  const arr1 = [
      [1, 3],
      [5, 7],
      [9, 12],
    ],
    arr2 = [[5, 10]];
  const result = findIntersections(arr1, arr2);
  expect(result).toEqual([
    [5, 7],
    [9, 10],
  ]);
});
