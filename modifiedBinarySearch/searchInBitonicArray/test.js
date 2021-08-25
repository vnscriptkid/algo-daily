const { search } = require("./index");
const { search: solution } = require("./solution");

test("it works 1", () => {
  const arr = [1, 3, 8, 4, 3],
    key = 4;
  let result = search(arr, key);
  expect(result).toEqual(3);
  result = solution(arr, key);
  expect(result).toEqual(3);
});

test("it works 2", () => {
  const arr = [3, 8, 3, 1],
    key = 8;
  let result = search(arr, key);
  expect(result).toEqual(1);
  result = solution(arr, key);
  expect(result).toEqual(1);
});

test("it works 3", () => {
  const arr = [1, 3, 8, 12],
    key = 12;
  let result = search(arr, key);
  expect(result).toEqual(3);
  result = solution(arr, key);
  expect(result).toEqual(3);
});

test("it works 4", () => {
  const arr = [10, 9, 8],
    key = 10;
  let result = search(arr, key);
  expect(result).toEqual(0);
  result = solution(arr, key);
  expect(result).toEqual(0);
});
