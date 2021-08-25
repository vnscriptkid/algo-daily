const Heap = require("collections/heap");

function sumOf(nums, k1, k2) {
  let bigK = Math.max(k1, k2);
  let smallK = Math.min(k1, k2);
  // maintain max(k1, k2) elements in a max heap
  const maxHeap = new Heap([], null, (a, b) => a - b);

  for (let num of nums) {
    maxHeap.push(num);

    if (maxHeap.length > bigK) maxHeap.pop();
  }

  let sum = 0;
  maxHeap.pop();
  // remove until maxHeap size is smallK
  while (maxHeap.length > smallK) {
    sum += maxHeap.pop();
  }

  return sum;
}

module.exports = { sumOf };
