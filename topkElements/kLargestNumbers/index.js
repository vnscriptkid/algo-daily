const Heap = require("collections/heap")

function findkLargest(arr, k) {
  const minHeap = new Heap([], null, (a, b) => b - a)

  for (let num of arr) {
    minHeap.add(num)

    if (minHeap.length > k) {
      minHeap.pop()
    }
  }

  return Array.from(minHeap)
}

module.exports = {findkLargest}
