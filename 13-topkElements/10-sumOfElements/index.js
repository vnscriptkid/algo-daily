// Sum of Elements

const Heap = require('collections/heap')

// Given an array, find the sum of all numbers between the K1’th and K2’th smallest elements of that array.

// Input: [1, 3, 12, 5, 15, 11], and K1=3, K2=6
//
// 1  2  3(k1)  4   5   6(k2)
// 1  3  5     11  12  15

// maxHeap: 1  3 12  5  11

// Output: 23
// Explanation: The 3rd smallest number is 5 and 6th smallest number 15. The sum of numbers coming
// between 5 and 15 is 23 (11+12).

function sumOf(nums, k1, k2) {
  let min = Math.min(k1, k2)
  let max = Math.max(k1, k2)

  const maxHeap = new Heap([], null, (a, b) => a - b)

  for (let num of nums) {
    if (maxHeap.length < max) {
      maxHeap.add(num)
    } else {
      // at this point, maxHeap size is max
      if (num < maxHeap.peek()) {
        maxHeap.pop()
        maxHeap.add(num)
      }
    }
  }

  // now maxHeap is of size max
  maxHeap.pop()
  let sum = 0

  while (maxHeap.length > min) {
    sum += maxHeap.pop()
  }

  return sum
}

module.exports = {sumOf}
