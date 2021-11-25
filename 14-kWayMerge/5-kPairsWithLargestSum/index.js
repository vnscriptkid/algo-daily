// K Pairs with Largest Sums

const Heap = require('collections/heap')

// Given two sorted arrays in descending order,
// find ‘K’ pairs with the largest sum where each pair consists of numbers from both the arrays.

// Input: L1=[9, 8, 2], L2=[6, 3, 1], K=3
// Output: [9, 3], [9, 6], [8, 6]
// Explanation: These 3 pairs have the largest sum. No other pair has a sum larger than any of these.

// [ 9, 8, 7, 6, 5, 4 ]
// [ 100, 23, 13, 9, 1 ] k = 3

// 1. (9, 6) => 15
// 2. (6, 8) => 14
// 3. (9, 3)  ()

function findkPairs(l1, l2, k) {
  // [firstNum, secondNum, sum]
  const minHeap = new Heap([], null, (a, b) => b[2] - a[2])

  for (let i = 0; i < Math.min(k, l1.length); i++) {
    for (let j = 0; j < Math.min(k, l2.length); j++) {
      let sum = l1[i] + l2[j]
      // (l1[i], l2[j])
      if (minHeap.length < k) {
        minHeap.add([l1[i], l2[j], sum])
      } else {
        if (sum > minHeap.peek()[2]) {
          minHeap.pop()
          minHeap.add([l1[i], l2[j], sum])
        } else {
          break
        }
      }
    }
  }

  return minHeap.map(([firstNum, secondNum]) => [firstNum, secondNum])
}

module.exports = {findkPairs}
