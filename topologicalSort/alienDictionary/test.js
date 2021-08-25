const { findCorrectOrder } = require("./index");

test("it works 1", () => {
  const words = ["ba", "bc", "ac", "cab"];
  const result = findCorrectOrder(words);
  expect(result).toEqual("bac");
});

test("it works 2", () => {
  const words = ["cab", "aaa", "aab"];
  const result = findCorrectOrder(words);
  expect(result).toEqual("cab");
});

test("it works 2", () => {
  const words = ["ywx", "wz", "xww", "xz", "zyy", "zwz"];
  const result = findCorrectOrder(words);
  expect(result).toEqual("ywxz");
});
