/*
Problem Statement 
Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.
Example 1:
Input: nums=[1, 2, -1, 3, 5], k = 2
Output: [1.5, 0.5, 1.0, 4.0]
Explanation: Lets consider all windows of size ‘2’:
[(1, 2), -1, 3, 5] -> median is 1.5
[1, (2, -1), 3, 5] -> median is 0.5
[1, 2, (-1, 3), 5] -> median is 1.0
[1, 2, -1, (3, 5)] -> median is 4.0
Example 2:
Input: nums=[1, 2, -1, 3, 5], k = 3
Output: [1.0, 2.0, 3.0]
Explanation: Lets consider all windows of size ‘3’:
[1, 2, -1, 3, 5] -> median is 1.0
[1, 2, -1, 3, 5] -> median is 2.0
[1, 2, -1, 3, 5] -> median is 3.0
*/

const Heap = require('collections/heap')

// maxHeap | minHeap (0 <= maxHeap.length - minHeap.length < 2)
// maxHeap.length === minHeap.length => median: (peekOfMaxHeap + peekofMinHeap) / 2
// maxHeap.length > minHeap.length: => median peekOfMaxHeap

// 1, 2, -1, 3, 5, k = 3
//              ^                   (i === k - 1)
// maxHeap: -1, (3)
// minHeap: 5

// medians: [ 1, 2, 3]

// maxHeap (2) | (3)  minHeap

// Input: nums=[1, 2, -1, 3, 5], k = 3
//                     @      ^
// maxHeap: (-1)
// minHeap: (3), 5
// medians: [1, 2, 3]

class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b)
    this.minHeap = new Heap([], null, (a, b) => b - a)
  }

  balanceHeaps() {
    if (this.maxHeap.length - this.minHeap.length === 2) {
      this.minHeap.add(this.maxHeap.peek())
    } else if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.addd(this.minHeap.peek())
    }
  }

  removeVal(val) {
    if (val <= this.maxHeap.peek()) {
      this.maxHeap.delete(val)
    } else {
      this.minHeap.delete(val)
    }
  }

  getMedianNow() {
    if (this.maxHeap.length === this.minHeap.length)
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2

    return this.maxHeap.peek()
  }

  findMedians(nums, k) {
    const medians = []
    // iterate through nums
    let windowStart = 0
    for (let windowEnd = 0; windowEnd < nums; windowEnd++) {
      let curNum = nums[windowEnd]

      if (this.maxHeap.length === 0 || curNum <= this.maxHeap.peek()) {
        this.maxHeap.add(curNum)
      } else {
        this.minHeap.add(curNum)
      }
      this.balanceHeaps()

      if (windowEnd >= k - 1) {
        // we have window of size k
        medians.push(this.getMedianNow())

        let startVal = nums[windowStart]
        this.removeVal(startVal)
        this.balanceHeaps()
      }
    }

    return medians
  }
}

module.exports = {SlidingWindowMedian}
