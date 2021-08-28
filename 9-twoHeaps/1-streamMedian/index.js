// Find the Median of a Number Stream
// Design a class to calculate the median of a number stream. The class should have the following two methods:

// insertNum(int num): stores the number in the class
// findMedian(): returns the median of all numbers inserted in the class

// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

// [] | []
//   stream.insert(3)
// [3] | [4, 5]
//   stream.insert(4)
//   stream.insert(5)

//   stream.insert(1)
// [1, 3] | []
// 1 3
// -> output: 2

//   stream.insert(5)
// 1 3 | 5
// -> output: 3

//   stream.insert(4)
// 1 3 | 4 5
// -> output: 3.5

const Heap = require('collections/heap')

class MedianOfStream {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b)
    this.minHeap = new Heap([], null, (a, b) => b - a)
  }

  insert(num) {
    // decide which heap to push the number in
    if (this.maxHeap.length === 0 || num < this.maxHeap.peek())
      this.maxHeap.add(num)
    else this.minHeap.add(num)
    // reballance 2 heaps
    if (this.maxHeap.length - this.minHeap.length > 1) {
      this.minHeap.add(this.maxHeap.pop())
    } else if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.add(this.minHeap.pop())
    }
  }

  findMedian() {
    if (this.maxHeap.length === this.minHeap.length)
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2
    return this.maxHeap.peek()
  }
}

module.exports = {MedianOfStream}
