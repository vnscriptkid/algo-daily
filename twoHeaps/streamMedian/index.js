const Heap = require('collections/heap')

class MedianOfStream {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b)
    this.minHeap = new Heap([], null, (a, b) => b - a)
  }

  insert(val) {
    if (this.maxHeap.length === 0 || val <= this.maxHeap.peek()) {
      this.maxHeap.push(val)
    } else {
      this.minHeap.push(val)
    }
    this.balanceHeaps()
  }

  balanceHeaps() {
    // maxHeap is prioritized to have 1 odd num
    if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.add(this.minHeap.pop())
    }

    // maxHeap can't be more than 1
    else if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.add(this.maxHeap.pop())
    }
  }

  findMedian() {
    if (this.maxHeap.length > this.minHeap.length) return this.maxHeap.peek()
    else return this.maxHeap.peek() / 2 + this.minHeap.peek() / 2
  }
}

module.exports = {MedianOfStream}
