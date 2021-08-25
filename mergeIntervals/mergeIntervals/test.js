const { merge } = require("./index");

test("it works 1", () => {
  const intervals = [
    [6, 7],
    [2, 4],
    [5, 9],
  ];
  const result = merge(intervals);
  expect(result).toEqual([
    [2, 4],
    [5, 9],
  ]);
});

test("it works 2", () => {
  const intervals = [
    [1, 4],
    [2, 6],
    [3, 5],
  ];
  const result = merge(intervals);
  expect(result).toEqual([[1, 6]]);
});

test("it works 3", () => {
  const intervals = [
    [1, 4],
    [2, 5],
    [7, 9],
  ];
  const result = merge(intervals);
  expect(result).toEqual([
    [1, 5],
    [7, 9],
  ]);
});
