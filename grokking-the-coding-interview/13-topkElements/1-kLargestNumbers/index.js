// Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

// Input: [3, 1, 5, 12, 2, 11], K = 3
//                      ^
// MinHeap: [(3), 5, 12]

// Output: [5, 12, 11]

const Heap = require('collections/heap')

// function findkLargest(nums, k) {
//   const minHeap = new Heap([], null, (a, b) => b - a)

//   // process
//   for (let i = 0; i < nums.length; i++) {
//     minHeap.add(nums[i])

//     if (i >= k) minHeap.pop()
//   }

//   return Array.from(minHeap)
// }

function findkLargest(nums, k) {
  const minHeap = new Heap([], null, (a, b) => b - a)

  for (let i = 0; i < k; i++) {
    minHeap.add(nums[i])
  }

  // process
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop()
      minHeap.add(nums[i])
    }
  }

  return Array.from(minHeap).sort((a, b) => a - b)
}

module.exports = {findkLargest}
