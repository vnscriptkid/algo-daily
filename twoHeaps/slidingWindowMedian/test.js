const { SlidingWindowMedian } = require("./index");

test("it works 1", () => {
  const arr = [1, 2, -1, 3, 5],
    k = 3;
  slidingWindowMedian = new SlidingWindowMedian(arr, k);
  const result = slidingWindowMedian.findMedians();
  expect(result).toEqual([1, 2, 3]);
});

test("it works 2", () => {
  const arr = [1, 2, -1, 3, 5],
    k = 2;
  slidingWindowMedian = new SlidingWindowMedian(arr, k);
  const result = slidingWindowMedian.findMedians();
  expect(result).toEqual([1.5, 0.5, 1, 4]);
});
