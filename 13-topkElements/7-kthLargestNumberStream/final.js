const Heap = require('collections/heap')

class Stream {
  constructor(nums, k) {
    this.k = k
    this.minHeap = new Heap([], null, (a, b) => b - a)
    this.init(nums)
  }

  init(nums) {
    for (let num of nums) {
      this.add(num)
    }
  }

  add(val) {
    this.minHeap.add(val)

    if (this.minHeap.length > this.k) {
      this.minHeap.pop()
    }

    return this.minHeap.peek()
  }
}

module.exports = {Stream}
