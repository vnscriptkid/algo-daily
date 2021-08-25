const Heap = require("collections/heap");

function findKthSmallest(lists, k) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  for (let [listIndex, list] of lists.entries()) {
    minHeap.push([list[0], listIndex, 0]);
  }

  while (minHeap.length) {
    const [value, listIndex, itemIndex] = minHeap.pop();

    k--;

    if (k === 0) return value;

    const theList = lists[listIndex];

    if (itemIndex < theList.length - 1) {
      minHeap.push([theList[itemIndex + 1], listIndex, itemIndex + 1]);
    }
  }

  return null;
}

module.exports = { findKthSmallest };
