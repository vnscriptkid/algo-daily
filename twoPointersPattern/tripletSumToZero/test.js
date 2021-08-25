const { searchTriplets } = require("./index");

test("it works 1", () => {
  const arr = [-3, 0, 1, 2, -1, 1, -2];
  const result = searchTriplets(arr);
  expect(result).toEqual([
    [-3, 1, 2],
    [-2, 0, 2],
    [-2, 1, 1],
    [-1, 0, 1],
  ]);
});

test("it works 2", () => {
  const arr = [-5, 2, -1, -2, 3];
  const result = searchTriplets(arr);
  expect(result).toEqual([
    [-5, 2, 3],
    [-2, -1, 3],
  ]);
});

test("it works 3", () => {
  const arr = [-5, 2, 2, -1, -2, 3, 3, 3];
  const result = searchTriplets(arr);
  expect(result).toEqual([
    [-5, 2, 3],
    [-2, -1, 3],
  ]);
});
