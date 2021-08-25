const { findAllDuplicates } = require("./index");

test("it works 1", () => {
  const arr = [3, 4, 4, 5, 5];
  const result = findAllDuplicates(arr);
  expect(result).toEqual([5, 4]);
});

test("it works 2", () => {
  const arr = [5, 4, 7, 2, 3, 5, 3];
  const result = findAllDuplicates(arr);
  expect(result).toEqual([3, 5]);
});
