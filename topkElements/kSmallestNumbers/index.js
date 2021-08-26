const Heap = require('collections/heap')

function findkSmallest(arr, k) {
  const maxHeap = new Heap([], null, (a, b) => a - b)

  // add first k numbers to maxHeap
  for (let i = 0; i < k; i++) {
    maxHeap.push(arr[i])
  }

  // from k-th number in arr, swap with max of heap if it's better
  for (let i = k; i < arr.length; i++) {
    if (arr[i] < maxHeap.peek()) {
      maxHeap.pop()
      maxHeap.add(arr[i])
    }
  }

  return Array.from(maxHeap)
}

module.exports = {findkSmallest}
