const { findTwoSingleNumbers } = require("./index");
const { findTwoSingleNumbers: solution } = require("./solution");

test("it works 1", () => {
  const arr = [1, 4, 2, 1, 3, 5, 6, 2, 3, 5];
  let result = findTwoSingleNumbers(arr);
  expect(result).toEqual([4, 6]);
  result = solution(arr);
  expect(result).toEqual([4, 6]);
});

test("it works 2", () => {
  const arr = [2, 1, 3, 2];
  let result = findTwoSingleNumbers(arr);
  expect(result).toEqual([1, 3]);
  result = solution(arr);
  expect(result).toEqual([1, 3]);
});
