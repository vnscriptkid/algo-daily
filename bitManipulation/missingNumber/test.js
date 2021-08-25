const { findMissingNumber } = require("./index");

test("it works 1", () => {
  const arr = [1, 5, 2, 6, 4];
  const result = findMissingNumber(arr);
  expect(result).toEqual(3);
});
