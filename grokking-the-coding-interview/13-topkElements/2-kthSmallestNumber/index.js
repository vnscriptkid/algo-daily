// Given an unsorted array of numbers, find Kth smallest number in it.

// Input: [5, 12, 11, -1, 12], K = 3
//                           ^
// Output: 11
// maxHeap: [5, -1, (11)]

const Heap = require('collections/heap')

function findKSmallestNumber(arr, k) {
  const maxHeap = new Heap([], null, (a, b) => a - b)

  for (let i = 0; i < k; i++) {
    maxHeap.add(arr[i])
  }

  // now we have k numbers in heap
  for (let i = k; i < arr.length; i++) {
    if (arr[i] < maxHeap.peek()) {
      maxHeap.pop()
      maxHeap.add(arr[i])
    }
  }

  return maxHeap.peek()
}

module.exports = {findKSmallestNumber}
