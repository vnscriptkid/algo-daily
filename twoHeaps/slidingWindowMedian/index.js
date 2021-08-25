/*
Problem Statement 
Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.
Example 1:
Input: nums=[1, 2, -1, 3, 5], k = 2
Output: [1.5, 0.5, 1.0, 4.0]
Explanation: Lets consider all windows of size ‘2’:
[1, 2, -1, 3, 5] -> median is 1.5
[1, 2, -1, 3, 5] -> median is 0.5
[1, 2, -1, 3, 5] -> median is 1.0
[1, 2, -1, 3, 5] -> median is 4.0
Example 2:
Input: nums=[1, 2, -1, 3, 5], k = 3
Output: [1.0, 2.0, 3.0]
Explanation: Lets consider all windows of size ‘3’:
[1, 2, -1, 3, 5] -> median is 1.0
[1, 2, -1, 3, 5] -> median is 2.0
[1, 2, -1, 3, 5] -> median is 3.0
*/
const Heap = require("collections/heap");

class SlidingWindowMedian {
  constructor(arr, k) {
    this.k = k;
    this.arr = arr;
    this.maxHeap = new Heap([], null, (a, b) => a - b);
    this.minHeap = new Heap([], null, (a, b) => b - a);
  }

  findMedians() {
    // output
    const result = [];

    // loop through each number
    for (let i = 0; i < this.arr.length; i++) {
      // push on either maxHeap or minHeap
      const cur = this.arr[i];
      if (this.maxHeap.length === 0 || cur <= this.maxHeap.peek())
        this.maxHeap.push(cur);
      else this.minHeap.push(cur);

      // balance 2 heaps, prioritize maxHeap
      this.balanceHeaps();

      // when window size is k, calculate median, push to result
      if (i + 1 >= this.k) {
        result.push(this.getMedianNow());
        // remove number of index i from heaps
        const first = this.arr[i - this.k + 1];
        this.removeFromHeaps(first);
      }
    }

    return result;
  }

  removeFromHeaps(val) {
    if (val <= this.maxHeap.peek()) this.maxHeap.delete(val);
    else this.minHeap.delete(val);
  }

  getMedianNow() {
    if (this.maxHeap.length > this.minHeap.length) return this.maxHeap.peek();
    else return this.maxHeap.peek() / 2 + this.minHeap.peek() / 2;
  }

  balanceHeaps() {
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }
}

module.exports = { SlidingWindowMedian };
