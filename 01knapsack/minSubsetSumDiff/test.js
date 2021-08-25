const { findMinSubsetSumDiff: bruteforce } = require("./bruteForce");
const { findMinSubsetSumDiff: topDown } = require("./topDown");
const { findMinSubsetSumDiff: bottomUp } = require("./bottomUp");

test("it works 1", () => {
  const set = [1, 2, 3, 9];
  let result = bruteforce(set);
  expect(result).toEqual(3);
  result = topDown(set);
  expect(result).toEqual(3);
  result = bottomUp(set);
  expect(result).toEqual(3);
});

test("it works 2", () => {
  const set = [1, 2, 7, 1, 5];
  let result = bruteforce(set);
  expect(result).toEqual(0);
  result = topDown(set);
  expect(result).toEqual(0);
  result = bottomUp(set);
  expect(result).toEqual(0);
});

test("it works 3", () => {
  const set = [1, 3, 100, 4];
  let result = bruteforce(set);
  expect(result).toEqual(92);
  result = topDown(set);
  expect(result).toEqual(92);
  result = bottomUp(set);
  expect(result).toEqual(92);
});
