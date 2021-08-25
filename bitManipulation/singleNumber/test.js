const { findSingleNumber } = require("./index");
const { findSingleNumber: solution } = require("./solution");

test("it works 1", () => {
  const arr = [1, 4, 2, 1, 3, 2, 3];
  let result = findSingleNumber(arr);
  expect(result).toEqual(4);
  result = solution(arr);
  expect(result).toEqual(4);
});

test("it works 2", () => {
  const arr = [7, 9, 7];
  let result = findSingleNumber(arr);
  expect(result).toEqual(9);
  result = solution(arr);
  expect(result).toEqual(9);
});
