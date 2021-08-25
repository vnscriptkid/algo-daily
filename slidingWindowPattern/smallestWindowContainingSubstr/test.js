const { findSmallestContainer } = require("./index");

test("it works 1", () => {
  const str = "aabdec",
    pattern = "abc";
  const result = findSmallestContainer(str, pattern);
  expect(result).toEqual("abdec");
});

test("it works 2", () => {
  const str = "abdabca",
    pattern = "abc";
  const result = findSmallestContainer(str, pattern);
  expect(result).toEqual("abc");
});

test("it works 2", () => {
  const str = "adcad",
    pattern = "abc";
  const result = findSmallestContainer(str, pattern);
  expect(result).toEqual("");
});
