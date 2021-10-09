// Kth Smallest Number in a Sorted Matrix (Hard)
// Given an N * N matrix where each row and column is sorted in ascending order,
// find the Kth smallest element in the matrix.

// Input: Matrix=[
//     [2, 6, 8],
//     [3, 7, 10],
//     [5, 8, 11]
//   ],

// minHeap: (7,) 8, 8

// 2, 3, 5, 6, 7

// K=5
// Output: 7

class Node {
  constructor(val, rowIndex, numIndex) {
    this.val = val
    this.rowIndex = rowIndex
    this.numIndex = numIndex
  }
}

const Heap = require('collections/heap')

function findKsmallest(matrix, k) {
  const minHeap = new Heap([], null, (a, b) => b.val - a.val)

  for (let [rowIndex, row] of matrix.entries()) {
    minHeap.add(new Node(row[0], rowIndex, 0))
  }

  let i = 0
  while (minHeap.length) {
    const nodeOut = minHeap.pop()
    if (++i === k) return nodeOut.val

    const {rowIndex, numIndex} = nodeOut

    const row = matrix[rowIndex]
    if (numIndex + 1 < row.length) {
      minHeap.add(new Node(row[numIndex + 1], rowIndex, numIndex + 1))
    }
  }

  return null
}

module.exports = {findKsmallest}
