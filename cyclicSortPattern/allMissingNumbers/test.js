const { findAllMissingNumbers } = require("./index");

test("it works 1", () => {
  const arr = [2, 3, 1, 8, 2, 3, 5, 1];
  const result = findAllMissingNumbers(arr);
  expect(result).toEqual([4, 6, 7]);
});

test("it works 2", () => {
  const arr = [2, 4, 1, 2];
  const result = findAllMissingNumbers(arr);
  expect(result).toEqual([3]);
});

test("it works 3", () => {
  const arr = [2, 3, 2, 1];
  const result = findAllMissingNumbers(arr);
  expect(result).toEqual([4]);
});
