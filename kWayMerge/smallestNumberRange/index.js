const Heap = require('collections/heap')

function findSmallestRange(lists) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0])

  let max = -Infinity

  for (let [listIndex, list] of lists.entries()) {
    if (list[0] > max) max = list[0]
    minHeap.push([list[0], listIndex, 0])
  }

  let minRange = Infinity
  let output = [-1, -1]

  while (minHeap.length === lists.length) {
    const [value, listIndex, itemIndex] = minHeap.pop()

    const curRange = max - value

    if (curRange < minRange) {
      minRange = curRange
      output = [value, max]
    }

    const theList = lists[listIndex]

    if (itemIndex < theList.length - 1) {
      let nextItem = theList[itemIndex + 1]
      if (nextItem > max) max = nextItem
      minHeap.push([nextItem, listIndex, itemIndex + 1])
    }
  }

  return output
}

module.exports = {findSmallestRange}
