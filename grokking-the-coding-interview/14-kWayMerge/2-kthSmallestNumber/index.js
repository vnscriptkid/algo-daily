// Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.

const Heap = require('collections/heap')

// Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4], K=5
// L1=[2, 6, 8],
//        ^
// L2=[3, 6, 7],
//        ^
// L3=[1, 3, 4]
//           ^
// minHeap: [ 6, 6, 4 ]
// result: [ 1, 2, 3, 3, 4 ]

// Output: 4
// [1, 2, 3, 3, 4, 6, 6, 7, 8]

class Node {
  constructor(val, arrIndex, numIndex) {
    this.val = val
    this.arrIndex = arrIndex
    this.numIndex = numIndex
  }
}

function findKthSmallest(list, k) {
  // init minHeap
  const minHeap = new Heap([], null, (a, b) => b.val - a.val)

  for (let i = 0; i < list.length; i++) {
    const arr = list[i]
    minHeap.add(new Node(arr[0], i, 0))
  }

  // put the next smallest to result
  let count = 0
  while (minHeap.length) {
    const nextSmallestNode = minHeap.pop()
    const {val, arrIndex, numIndex} = nextSmallestNode
    const arr = list[arrIndex]

    count++
    if (count === k) return val

    // new node to heap
    if (numIndex + 1 < arr.length) {
      minHeap.push(new Node(arr[numIndex + 1], arrIndex, numIndex + 1))
    }
  }

  // oops
  return null
}

module.exports = {findKthSmallest}
