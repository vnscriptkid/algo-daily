const { findLongestSubstrSameLetters } = require("./index");

test("it works 1", () => {
  const str = "aabccbb",
    k = 2;
  const result = findLongestSubstrSameLetters(str, k);
  expect(result).toEqual(5);
});

test("it works 2", () => {
  const str = "abbcb",
    k = 1;
  const result = findLongestSubstrSameLetters(str, k);
  expect(result).toEqual(4);
});

test("it works 2", () => {
  const str = "abccde",
    k = 1;
  const result = findLongestSubstrSameLetters(str, k);
  expect(result).toEqual(3);
});
