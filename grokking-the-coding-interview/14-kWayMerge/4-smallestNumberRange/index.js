// Smallest Number Range
// Given ‘M’ sorted arrays, find the smallest range that includes at least one number from each of the ‘M’ lists.

// Input: L1=[1, 5, 8], L2=[4, 12], L3=[7, 8, 10]
// Output: [4, 7]
// Explanation: The range [4, 7] includes 5 from L1, 4 from L2 and 7 from L3.

// 1 5 8
// 4 12
// 7 8 10

// (1, 4, 7) => 6
// (5, 4, 7) => 3
// (5, 7, 12) => 7
// (7, 8, 12) => 5
// (8, 8, 12) => 4
// (8, 12, 10)=> 6
// (12, 10)

// smallest => heap
// largest => keep track
// where number come from, what is it current position => Node

const Heap = require('collections/heap')

class Node {
  constructor(val, numIdx, listIdx) {
    this.val = val
    this.numIdx = numIdx
    this.listIdx = listIdx
  }
}

function findSmallestRange(arr) {
  const minHeap = new Heap([], null, (a, b) => b.val - a.val)

  let largest = -Infinity

  // initial state
  for (let [listIdx, list] of arr.entries()) {
    minHeap.add(new Node(list[0], 0, listIdx))
    largest = Math.max(largest, list[0])
  }

  let smallestDiff = Infinity
  let range = [-1, -1]

  while (minHeap.length === arr.length) {
    let smallest = minHeap.peek().val
    let curDiff = largest - smallest

    if (curDiff < smallestDiff) {
      smallestDiff = curDiff
      range = [smallest, largest]
    }

    // find the next combination
    const {numIdx, listIdx} = minHeap.pop()
    const curList = arr[listIdx]
    if (numIdx + 1 < curList.length) {
      minHeap.add(new Node(curList[numIdx + 1], numIdx + 1, listIdx))
      largest = Math.max(largest, curList[numIdx + 1])
    }
  }

  return range
}

module.exports = {findSmallestRange}
