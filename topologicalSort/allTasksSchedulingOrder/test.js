const { findAllSchedulingOrders } = require("./index");

test("it works 1", () => {
  const Tasks = 3,
    Prerequisites = [
      [0, 1],
      [1, 2],
    ];
  const result = findAllSchedulingOrders(Tasks, Prerequisites);
  expect(result).toEqual([[0, 1, 2]]);
});

test("it works 2", () => {
  const Tasks = 4,
    Prerequisites = [
      [3, 2],
      [3, 0],
      [2, 0],
      [2, 1],
    ];
  const result = findAllSchedulingOrders(Tasks, Prerequisites);
  expect(result).toEqual([
    [3, 2, 0, 1],
    [3, 2, 1, 0],
  ]);
});

test("it works 3", () => {
  const Tasks = 6,
    Prerequisites = [
      [2, 5],
      [0, 5],
      [0, 4],
      [1, 4],
      [3, 2],
      [1, 3],
    ];
  const result = findAllSchedulingOrders(Tasks, Prerequisites);
  expect(result).toEqual([
    [0, 1, 4, 3, 2, 5],
    [0, 1, 3, 4, 2, 5],
    [0, 1, 3, 2, 4, 5],
    [0, 1, 3, 2, 5, 4],
    [1, 0, 3, 4, 2, 5],
    [1, 0, 3, 2, 4, 5],
    [1, 0, 3, 2, 5, 4],
    [1, 0, 4, 3, 2, 5],
    [1, 3, 0, 2, 4, 5],
    [1, 3, 0, 2, 5, 4],
    [1, 3, 0, 4, 2, 5],
    [1, 3, 2, 0, 5, 4],
    [1, 3, 2, 0, 4, 5],
  ]);
});
