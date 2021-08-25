const {findkthSmallest: bruteforce} = require("./bruteforce")
const {findkthSmallest: usingHeap} = require("./usingHeap")
const {findkthSmallest: usingPartition} = require("./usingHeap")
const {findkthSmallest: usingRandomPartition} = require("./usingHeap")

test("it works 1", () => {
  const nums = [1, 5, 12, 2, 11, 5],
    k = 3
  let result = bruteforce(nums, k)
  expect(result).toEqual(5)
  // using heap
  result = usingHeap(nums, k)
  expect(result).toEqual(5)
  // using quicksort partition
  result = usingPartition(nums, k)
  expect(result).toEqual(5)
  // using randomized pivot
  result = usingRandomPartition(nums, k)
  expect(result).toEqual(5)
})

test("it works 2", () => {
  const nums = [1, 5, 12, 2, 11, 5],
    k = 4
  let result = bruteforce(nums, k)
  expect(result).toEqual(5)
  // using heap
  result = usingHeap(nums, k)
  expect(result).toEqual(5)
  // using quicksort partition
  result = usingPartition(nums, k)
  expect(result).toEqual(5)
  // using randomized pivot
  result = usingRandomPartition(nums, k)
  expect(result).toEqual(5)
})

test("it works 3", () => {
  const nums = [5, 12, 11, -1, 12],
    k = 3
  let result = bruteforce(nums, k)
  expect(result).toEqual(11)
  // using heap
  result = usingHeap(nums, k)
  expect(result).toEqual(11)
  // using quicksort partition
  result = usingPartition(nums, k)
  expect(result).toEqual(11)
  // using randomized pivot
  result = usingRandomPartition(nums, k)
  expect(result).toEqual(11)
})
