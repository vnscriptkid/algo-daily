const { countUniqueBST } = require("./index");

test("it works 1", () => {
  const result = countUniqueBST(2);
  expect(result).toEqual(2);
});

test("it works 2", () => {
  const result = countUniqueBST(3);
  expect(result).toEqual(5);
});
