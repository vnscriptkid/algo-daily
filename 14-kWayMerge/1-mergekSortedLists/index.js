// Merge K Sorted Lists
// Given an array of ‘K’ sorted arrays, merge them into one sorted list.

// Input:
// [L1, L2, L3]
// L1=[2, 6, 8],
//           ^
// L2=[3, 6, 7],
//     ^
// L3=[1, 3, 4]
//     ^
// minHeap: [2, 3, (1)]

// Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]

const Heap = require('collections/heap')

class Node {
  constructor(value, arrIndex, numIndex) {
    this.value = value
    this.arrIndex = arrIndex
    this.numIndex = numIndex
  }
}

function mergeLists(list) {
  const minHeap = new Heap([], null, (a, b) => b.value - a.value)
  const result = []

  // init data for heap
  for (let i = 0; i < list.length; i++) {
    let arr = list[i]
    minHeap.add(new Node(arr[0], i, 0))
  }

  while (minHeap.length) {
    // find next smallest numer, pop it out
    const nodeOut = minHeap.pop()

    // push value of nodeout in result
    result.push(nodeOut.value)

    // push next node of nodeOut to heap
    const arrIndex = nodeOut.arrIndex
    const numIndex = nodeOut.numIndex
    const arr = list[arrIndex]

    if (numIndex + 1 < arr.length) {
      minHeap.add(new Node(arr[numIndex + 1], arrIndex, numIndex + 1))
    }
  }

  return result
}

module.exports = {mergeLists}
