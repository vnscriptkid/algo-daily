const { findConcat } = require("./index");

test("it works 1", () => {
  const str = "catfoxcat",
    words = ["cat", "fox"];
  const result = findConcat(str, words);
  expect(result).toEqual([0, 3]);
});

test("it works 2", () => {
  const str = "catcatfoxfox",
    words = ["cat", "fox"];
  const result = findConcat(str, words);
  expect(result).toEqual([3]);
});
