// Given ‘M’ sorted arrays, find the median number among all arrays.
// L1 = [2, (6), 8],
// L2 = [3, (6), 7],
// L3 = [1, 3, 4]
// list: [L1, L2, L3]

// minHeap: (6), 6
// sorted: 1, 2, 3, 3, (4)

// 1 (3) 9
// 1 (3 4) 9 => (3 + 4) / 2 => 3.5

const Heap = require('collections/heap')

class Node {
  constructor(val, arrIndex, numIndex) {
    this.val = val
    this.arrIndex = arrIndex
    this.numIndex = numIndex
  }
}

function findMedian(list) {
  const totalNumbers = list.reduce((acc, subArr) => acc + subArr.length, 0)

  let halfNumbers = Math.floor(totalNumbers / 2 + 1)

  const minHeap = new Heap([], null, (a, b) => b.val - a.val)

  const sortedList = []

  // add first numbers of each subarray into heap
  for (let [arrIndex, arr] of list.entries()) {
    // arr[0]
    minHeap.add(new Node(arr[0], arrIndex, 0))
  }

  while (halfNumbers > 0) {
    const {val, arrIndex, numIndex} = minHeap.pop()

    sortedList.push(val)

    let curArr = list[arrIndex]
    if (numIndex + 1 < curArr.length) {
      let nextNode = new Node(curArr[numIndex + 1], arrIndex, numIndex + 1)
      minHeap.add(nextNode)
    }

    halfNumbers--
  }

  if (totalNumbers % 2 === 1) {
    return sortedList[sortedList.length - 1]
  } else {
    return (
      (sortedList[sortedList.length - 1] + sortedList[sortedList.length - 2]) /
      2
    )
  }
}

module.exports = {findMedian}
