// Connect Ropes

// Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost.
// The cost of connecting two ropes is equal to the sum of their lengths.

// Input: [1, 3, 11, 5, 2]
// Output: 42

// minHeap: 22
// connect: 11 + 11 = 22
// cost: 42

const Heap = require('collections/heap')

function minimizeRopeCost(ropes = []) {
  const minHeap = new Heap([], null, (a, b) => b - a)

  for (let rope of ropes) {
    minHeap.add(rope)
  }

  let cost = 0

  while (minHeap.length > 1) {
    let newRope = minHeap.pop() + minHeap.pop()
    minHeap.add(newRope)
    cost += newRope
  }

  return cost
}

module.exports = {minimizeRopeCost}
