// Kth Smallest Number in a Sorted Matrix (Hard)
// Given an N * NN∗N matrix where each row and column is sorted in ascending order,
// find the Kth smallest element in the matrix.

class Node {
  constructor(val, rowIndex, numIndex) {
    this.val = val
    this.rowIndex = rowIndex
    this.numIndex = numIndex
  }
}

// Input: Matrix=[
//     [2, 6, 8],
//     [3, 7, 10],
//     [5, 8, 11]
//   ],

const Heap = require('collections/heap')

function findKsmallest(matrix, k) {
  const minHeap = new Heap([], null, (a, b) => b.val - a.val)

  for (let [rowIndex, row] of matrix.entries()) {
    minHeap.add(new Node(row[0], rowIndex, 0))
  }

  let i = 0
  let nodeOut
  while (i < k || !minHeap.length) {
    nodeOut = minHeap.pop()

    const {rowIndex, numIndex} = nodeOut

    const curRow = matrix[rowIndex]
    if (numIndex + 1 < curRow.length) {
      minHeap.add(new Node(curRow[numIndex + 1], rowIndex, numIndex + 1))
    }
    i++
  }

  return nodeOut.val
}

module.exports = {findKsmallest}
