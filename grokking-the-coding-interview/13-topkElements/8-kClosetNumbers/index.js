// 'K' Closest Numbers

// Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array.
// Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.

// Input: [5, 6, 7, 8, 9], K = 3, X = 7
// Output: [6, 7, 8]

// maxHeap: ( (6,1), (7,0), (8,1) )

const Heap = require('collections/heap')

function binarySearch(arr, x) {
  let left = 0,
    right = arr.length - 1

  let idx = -1
  let smallestDiff = Infinity

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)

    let diff = Math.abs(arr[middle] - x)

    if (diff === 0) return middle

    if (diff < smallestDiff) {
      idx = middle
      smallestDiff = diff
    }

    if (x > arr[middle]) {
      left = middle + 1
    } else {
      // x < arr[middle]
      right = middle - 1
    }
  }

  return idx
}

function findKClosetNums(arr, k, x) {
  // find the closet number to x using binary search
  const idxOfClosestNum = binarySearch(arr, x)

  let lowIdx = idxOfClosestNum - k
  let highIdx = idxOfClosestNum + k

  lowIdx = Math.max(0, lowIdx)
  highIdx = Math.min(arr.length - 1, highIdx)

  // find k closet within [lowIdx, highIdx]
  // [num, diff]
  let minHeap = new Heap([], null, (a, b) => b[1] - a[1])

  for (let i = lowIdx; i <= highIdx; i++) {
    const cur = arr[i]
    minHeap.push([cur, Math.abs(cur - x)])
  }

  // take out k elements
  const output = []
  while (k > 0) {
    output.push(minHeap.pop()[0])
    k--
  }

  return output.sort()
}

module.exports = {findKClosetNums}
