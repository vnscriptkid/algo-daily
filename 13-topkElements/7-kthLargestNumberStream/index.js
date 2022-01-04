// Kth Largest Number in a Stream

// Design a class to efficiently find the Kth largest element in a stream of numbers.

// The class should have the following two things:

// The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
// The class should expose a function add(int num) which will store the given number and return the Kth largest number.

// Input: [3, 1, 5, 12, 2, 11], K = 4
//                         ^
// ((3), 5, 12, 11)

// 1. Calling add(6) should return '5'.
// 2. Calling add(13) should return '6'.
// 2. Calling add(4) should still return '6'.

const Heap = require('collections/heap')

class Stream {
  constructor(nums, k) {
    this.k = k
    this.minHeap = new Heap([], null, (a, b) => b - a)

    for (let num of nums) {
      this.add(num)
    }
  }

  add(num) {
    this.minHeap.add(num)

    if (this.minHeap.length === this.k + 1) {
      this.minHeap.pop()
    }

    return this.minHeap.peek()
  }
}

module.exports = {Stream}
