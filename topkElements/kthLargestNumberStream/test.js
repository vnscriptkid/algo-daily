const {Stream} = require("./index")

test("it works 1", () => {
  const nums = [3, 1, 5, 12, 2, 11],
    k = 4

  const stream = new Stream(nums, k)
  expect(stream.add(6)).toEqual(5)
  expect(stream.add(13)).toEqual(6)
  expect(stream.add(4)).toEqual(6)
})
