const { longestSubarrayOfOnes } = require("./index");

test("it works 1", () => {
  const arr = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
    k = 2;
  const result = longestSubarrayOfOnes(arr, k);
  expect(result).toEqual(6);
});

test("it works 2", () => {
  const arr = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
    k = 3;
  const result = longestSubarrayOfOnes(arr, k);
  expect(result).toEqual(9);
});
