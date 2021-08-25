const { findMinDiffElement } = require("./index");
const { findMinDiffElement: solution } = require("./solution");

test("it works 1", () => {
  const arr = [4, 6, 10],
    key = 7;
  let result = findMinDiffElement(arr, key);
  expect(result).toEqual(6);
  result = solution(arr, key);
  expect(result).toEqual(6);
});

test("it works 2", () => {
  const arr = [4, 6, 10],
    key = 4;
  let result = findMinDiffElement(arr, key);
  expect(result).toEqual(4);
  result = solution(arr, key);
  expect(result).toEqual(4);
});

test("it works 3", () => {
  const arr = [1, 3, 8, 10, 15],
    key = 12;
  let result = findMinDiffElement(arr, key);
  expect(result).toEqual(10);
  result = solution(arr, key);
  expect(result).toEqual(10);
});

test("it works 3", () => {
  const arr = [4, 6, 10],
    key = 17;
  let result = findMinDiffElement(arr, key);
  expect(result).toEqual(10);
  result = solution(arr, key);
  expect(result).toEqual(10);
});
