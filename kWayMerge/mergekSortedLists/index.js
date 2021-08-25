const Heap = require("collections/heap")

function mergeLists(lists) {
  const result = []

  const minHeap = new Heap([], null, (a, b) => b[0] - a[0])

  // push first numbers from all lists to minHeap along with listIndex && itemIndex
  for (let [index, list] of lists.entries()) {
    // [value, listIndex, itemIndex]
    minHeap.push([list[0], index, 0])
  }

  while (minHeap.length) {
    const [value, listIndex, itemIndex] = minHeap.pop()

    result.push(value)

    const theList = lists[listIndex]

    if (itemIndex < theList.length - 1) {
      minHeap.push([theList[itemIndex + 1], listIndex, itemIndex + 1])
    }
  }

  return result
}

module.exports = {mergeLists}
