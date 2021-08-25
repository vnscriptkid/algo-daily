const { findExecutionOrder } = require("./index");

test("it works 1", () => {
  const Tasks = 3,
    Prerequisites = [
      [0, 1],
      [1, 2],
    ];
  const result = findExecutionOrder(Tasks, Prerequisites);
  expect(result).toEqual([0, 1, 2]);
});

test("it works 2", () => {
  const Tasks = 3,
    Prerequisites = [
      [0, 1],
      [1, 2],
      [2, 0],
    ];
  const result = findExecutionOrder(Tasks, Prerequisites);
  expect(result).toEqual([]);
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
  const result = findExecutionOrder(Tasks, Prerequisites);
  expect(result).toEqual([0, 1, 4, 3, 2, 5]);
});
