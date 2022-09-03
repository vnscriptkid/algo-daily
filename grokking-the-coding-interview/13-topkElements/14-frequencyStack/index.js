// Frequency Stack (hard)
// Design a class that simulates a Stack data structure, implementing the following two operations:

const Heap = require('collections/heap')

// push(int num): Pushes the number ‘num’ on the stack.
// pop(): Returns the most frequent number in the stack. If there is a tie, return the number which was pushed later.
// Example:

// After following push operations: push(1), push(2), push(3), push(2), push(1), push(2), push(5)

// 1. pop() should return 2, as it is the most frequent number
// 2. Next pop() should return 1

class Stack {
  constructor() {
    this.freq = {} // num: numFreq
    // [ num, numFreq, order ]
    this.maxHeap = new Heap([], null, (a, b) => {
      return a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2]
    })
    this.order = 0
  }

  push(num) {
    if (!(num in this.freq)) this.freq[num] = 0
    this.freq[num]++

    this.maxHeap.add([num, this.freq[num], this.order++])
  }

  pop() {
    return this.maxHeap.pop()[0]
  }
}

module.exports = {Stack}
