// K Pairs with Largest Sums

// Given two sorted arrays in descending order,
// find ‘K’ pairs with the largest sum where each pair consists of numbers from both the arrays.

// Input: L1=[9, 8, 2], L2=[6, 3, 1], K=3
// Output: [9, 3], [9, 6], [8, 6]
// Explanation: These 3 pairs have the largest sum. No other pair has a sum larger than any of these.

const Heap = require('collections/heap')

function findkPairs(l1, l2, k) {
  const minHeap = new Heap([], null, (a, b) => b[2] - a[2])

  for (let i = 0; i < Math.min(k, l1.length); i++) {
    for (let j = 0; j < Math.min(k, l2.length); j++) {
      const sum = l1[i] + l2[j]
      if (minHeap.length < k) minHeap.push([l1[i], l2[j], sum])
      else {
        if (sum >= minHeap.peek()[2]) {
          minHeap.pop()
          minHeap.push([l1[i], l2[j], sum])
        } else break
      }
    }
  }

  return minHeap.content.map(i => [i[0], i[1]])
}

module.exports = {findkPairs}
