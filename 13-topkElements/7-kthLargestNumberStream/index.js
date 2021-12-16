// Design a class to efficiently find the Kth largest element in a stream of numbers.

// The class should have the following two things:

// The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
// The class should expose a function add(int num) which will store the given number and return the Kth largest number.

const Heap = require('collections/heap')

class Stream {
  constructor(initial = [], k) {
    this.k = k
    this.minHeap = new Heap([], null, (a, b) => b - a)
    // init
    for (let num of initial) {
      this.add(num)
    }
  }

  add(num) {
    this.minHeap.add(num)

    if (this.minHeap.length > this.k) this.minHeap.pop()

    return this.minHeap.peek()
  }
}

module.exports = {Stream}
