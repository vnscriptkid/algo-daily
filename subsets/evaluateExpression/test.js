const { evaluateExp } = require("./index");

test("it works 1", () => {
  const exp = "2*3-4-5";
  const result = evaluateExp(exp);
  expect(result).toEqual([8, -12, 7, -7, -3]);
});

test("it works 2", () => {
  const exp = "1+2*3";
  const result = evaluateExp(exp);
  expect(result).toEqual([7, 9]);
});
