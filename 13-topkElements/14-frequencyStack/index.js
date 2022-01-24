// Design a class that simulates a Stack data structure, implementing the following two operations:

// push(int num): Pushes the number ‘num’ on the stack.
// pop(): Returns the most frequent number in the stack. If there is a tie, return the number which was pushed later.

// 1 2 3 2 1 2 5
//             ^

// heap: [(1:1), (2:1), (3:1), (2:2), (1:2), (5:1)]
// map: { 1:2, 2:2, 3:1, 5:1 }

const Heap = require('collections/heap')

class Stack {
  constructor() {
    this.data = new Heap([], null, (a, b) => {
      // [num, freq, order]
      return a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]
    })
    this.count = 0
    this.freq = {}
  }

  push(num) {
    if (!(num in this.freq)) this.freq[num] = 0
    this.freq[num]++

    this.data.add([num, this.freq[num], this.count++])
  }

  pop() {
    if (this.data.length === 0) return null

    const [num] = this.data.pop()

    this.freq[num]--
    if (this.freq[num] === 0) delete this.freq[num]

    return num
  }
}

module.exports = {Stack}

// 1 2 3 1

//{ (1:2), (2:1), (3:1) }

// { 1:2, 2:1, 3:1 }
