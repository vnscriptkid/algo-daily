// Sum of Elements

const Heap = require('collections/heap')

// Given an array, find the sum of all numbers between the K1’th and K2’th smallest elements of that array.

// Input: [1, 3, 12, 5, 15, 11], and K1=3, K2=6
// Output: 23
// Explanation: The 3rd smallest number is 5 and 6th smallest number 15. The sum of numbers coming
// between 5 and 15 is 23 (11+12).

function sumOf(nums, k1, k2) {
  const maxK = Math.max(k1, k2)
  const minK = Math.min(k1, k2)
  let numOfNums = maxK - minK - 1

  const maxHeap = new Heap([], null, (a, b) => a - b)

  for (let num of nums) {
    maxHeap.add(num)

    if (maxHeap.length > maxK) maxHeap.pop()
  }

  let sum = 0

  maxHeap.pop()

  while (numOfNums > 0) {
    sum += maxHeap.pop()
    numOfNums--
  }

  return sum
}

module.exports = {sumOf}
