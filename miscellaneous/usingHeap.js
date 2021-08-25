const Heap = require("collections/heap");

function findkthSmallest(nums, k) {
  const maxHeap = new Heap([], null, (a, b) => a - b);

  for (let [index, num] of nums.entries()) {
    maxHeap.push(num);

    if (index > k - 1) maxHeap.pop();
  }

  return maxHeap.peek();
}

module.exports = { findkthSmallest };
