// 1 5 8
// 4 12
// 7 8 10

// (1,4,7) => 6
// (5,4,7) =>

const Heap = require('collections/heap')

class Node {
  constructor(val, numIndex, arrIndex) {
    this.val = val
    this.numIndex = numIndex
    this.arrIndex = arrIndex
  }
}

function findSmallestRange(list) {
  let smallestRange = Infinity
  let max = -Infinity

  const minHeap = new Heap([], null, (a, b) => b.val - a.val)

  for (let [arrIndex, arr] of list.entries()) {
    const node = new Node(arr[0], 0, arrIndex)
    minHeap.add(node)
    max = Math.max(max, node.val)
  }

  let bestPair = [-1, -1]

  while (minHeap.length) {
    // update smallestRange
    const min = minHeap.peek().val
    const rangeNow = max - min

    if (rangeNow < smallestRange) {
      smallestRange = rangeNow
      bestPair = [min, max]
    }
    // pop the smallest out
    const {numIndex, arrIndex} = minHeap.pop()

    // find next one to push in min Heap
    const arr = list[arrIndex]
    if (numIndex + 1 <= arr.length - 1) {
      const newNode = new Node(arr[numIndex + 1], numIndex + 1, arrIndex)
      minHeap.add(newNode)
      max = Math.max(max, newNode.val)
    } else break
  }

  return bestPair
}

module.exports = {findSmallestRange}
