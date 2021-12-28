// 'K' Closest Numbers

// Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array.
// Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.

// Input: [5, 6, 7, 8, 9], K = 3, X = 7
// Output: [6, 7, 8]

const Heap = require('collections/heap')

function findKClosetNums(arr, k, x) {
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])

  for (let num of arr) {
    let diff = Math.abs(x - num)

    maxHeap.add([num, diff])

    if (maxHeap.length > k) {
      maxHeap.pop()
    }
  }

  return maxHeap.content.map(i => i[0]).sort()
}

module.exports = {findKClosetNums}
