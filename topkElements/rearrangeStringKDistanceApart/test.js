const { rearrangeString } = require("./index");

test("it works 1", () => {
  const str = "mmpp",
    k = 2;
  const result = rearrangeString(str, k);
  expect(result).toEqual("mpmp");
});

test("it works 2", () => {
  const str = "Programming",
    k = 3;
  const result = rearrangeString(str, k);
  expect(result).toEqual("rgmorgmaPin");
});

test("it works 3", () => {
  const str = "aab",
    k = 2;
  const result = rearrangeString(str, k);
  expect(result).toEqual("aba");
});
