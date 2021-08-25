const Heap = require("collections/heap");

function compareElement(a, b) {
  // [ val, freq, seq ]
  return a[1] === b[1] ? a[2] - b[2] : a[1] - b[1];
}

class Stack {
  constructor() {
    // [val, freq, seq]
    this.maxHeap = new Heap([], null, (a, b) => compareElement(a, b));
    this.freq = {};
    this.curSeq = 0;
  }

  push(val) {
    // update freq map
    if (!(val in this.freq)) this.freq[val] = 0;
    this.freq[val] += 1;

    // add to max heap
    this.maxHeap.add([val, this.freq[val], ++this.curSeq]);
  }

  pop() {
    const popValue = this.maxHeap.pop()[0];

    // update freq map
    this.freq[popValue] -= 1;
    if (this.freq[popValue] === 0) delete this.freq[popValue];

    return popValue;
  }
}

module.exports = { Stack };
