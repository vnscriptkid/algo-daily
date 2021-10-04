// Connect Ropes

const Heap = require('collections/heap')

// Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost.
// The cost of connecting two ropes is equal to the sum of their lengths.

// Input: [1, 3, 11, 5, 2]
// Output: 42

// [(11), 11]

// first: 5
// sec: 6
// connect: 11

function minimizeRopeCost(ropes = []) {
  const minHeap = new Heap(ropes, null, (a, b) => b - a)

  let cost = 0

  while (minHeap.length > 1) {
    const combined = minHeap.pop() + minHeap.pop()

    cost += combined

    minHeap.add(combined)
  }

  return cost
}

module.exports = {minimizeRopeCost}
