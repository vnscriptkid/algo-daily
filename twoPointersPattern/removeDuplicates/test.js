const { removeDuplicates } = require("./index");

test("it works 1", () => {
  const arr = [2, 3, 3, 3, 6, 9, 9];
  const result = removeDuplicates(arr);
  expect(result).toEqual(4);
  expect(arr).toEqual([2, 3, 6, 9]);
});

test("it works 2", () => {
  const arr = [2, 2, 2, 11];
  const result = removeDuplicates(arr);
  expect(result).toEqual(2);
  expect(arr).toEqual([2, 11]);
});
