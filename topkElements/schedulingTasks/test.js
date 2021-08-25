const {scheduleTasks} = require("./index")

test("it works 1", () => {
  const tasks = ["a", "a", "a", "b", "c", "c"],
    K = 2
  const result = scheduleTasks(tasks, K)
  expect(result).toEqual(7)
})

// test("it works 1", () => {
//   const tasks = ["a", "b", "a"],
//     K = 3;
//   const result = scheduleTasks(tasks, K);
//   expect(result).toEqual(5);
// });
