const Heap = require("collections/heap")

function findkLargest(arr, k) {
  const minHeap = new Heap([], null, (a, b) => b - a)

  // insert first k numbers to heap
  for (let i = 0; i < k; i++) {
    minHeap.push(arr[i])
  }

  // swap if cur is better than minimum of heap
  for (let i = k; i < arr.length; i++) {
    if (arr[i] > minHeap.peek()) {
      minHeap.pop()
      minHeap.add(arr[i])
    }
  }

  return Array.from(minHeap)
}

module.exports = {findkLargest}
