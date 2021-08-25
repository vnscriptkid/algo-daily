const Heap = require("collections/heap")

function minimizeRopeCost(ropes) {
  let cost = 0

  // push all to min heap, so to have instant access to min length rope
  const minHeap = new Heap(ropes, null, (a, b) => b - a)

  // loop as long as there's at least 2 ropes inside heap
  while (minHeap.length > 1) {
    // take 2 ropes with min length
    // connect them , add to cost
    // add new rope to min heap
    let newRope = minHeap.pop() + minHeap.pop()
    cost += newRope
    minHeap.push(newRope)
  }

  return cost
}

module.exports = {minimizeRopeCost}
