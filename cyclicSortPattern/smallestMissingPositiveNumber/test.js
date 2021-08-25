const { findSmallestMissingPositiveNumber } = require("./index");

test("it works 1", () => {
  const arr = [-3, 1, 5, 4, 2];
  const result = findSmallestMissingPositiveNumber(arr);
  expect(result).toEqual(3);
});

test("it works 2", () => {
  const arr = [3, -2, 0, 1, 2];
  const result = findSmallestMissingPositiveNumber(arr);
  expect(result).toEqual(4);
});

test("it works 3", () => {
  const arr = [3, 2, 5, 1];
  const result = findSmallestMissingPositiveNumber(arr);
  expect(result).toEqual(4);
});

test("it works 4", () => {
  const arr = [-10, -7, 30, 20, 3, 2, 5, 1];
  const result = findSmallestMissingPositiveNumber(arr);
  expect(result).toEqual(4);
});

test("it works 5", () => {
  const arr = [5, 3, 4, 1, 2];
  const result = findSmallestMissingPositiveNumber(arr);
  expect(result).toEqual(6);
});
