// Sum of Elements

const Heap = require('collections/heap')

// Given an array, find the sum of all numbers between the K1’th and K2’th smallest elements of that array.

// Input: [1, 3, 12, 5, 15, 11], and K1=3, K2=6
// Output: 23
// Explanation: The 3rd smallest number is 5 and 6th smallest number 15. The sum of numbers coming
// between 5 and 15 is 23 (11+12).

function findMin(nums, k) {
  const maxHeap = new Heap([], null, (a, b) => a - b)

  for (let num of nums) {
    maxHeap.add(num)

    if (maxHeap.length > k) maxHeap.pop()
  }

  return maxHeap.peek()
}

function sumOf(nums, k1, k2) {
  const lowBound = findMin(nums, Math.min(k1, k2))
  const highBound = findMin(nums, Math.max(k1, k2))

  let sum = 0
  for (let num of nums) {
    if (num > lowBound && num < highBound) sum += num
  }

  return sum
}

module.exports = {sumOf}
