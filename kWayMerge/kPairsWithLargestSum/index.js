const Heap = require('collections/heap')

function findkPairs(l1, l2, k) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0])

  for (let num1 of l1) {
    for (let num2 of l2) {
      minHeap.push([num1 + num2, num1, num2])
      if (minHeap.length > k) minHeap.pop()
    }
  }

  return minHeap.content.map(([, num1, num2]) => [num1, num2])
}

module.exports = {findkPairs}
