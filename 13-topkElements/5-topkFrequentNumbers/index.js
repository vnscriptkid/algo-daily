// Top 'K' Frequent Numbers (medium)

// Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

// Input: [1, 3, 5, 12, 11, 12, 11], K = 2
//                               ^

// req; { 1: 1, 3: 1, 5: 1, 12: 2, 11: 2 }
//                                         ^
// maxSize: 3
// minHeap: { [12,2], [11,2]  }

// Output: [12, 11]
// Explanation: Both '11' and '12' apeared twice.

const Heap = require('collections/heap')

function findTopFrequent(nums, k) {
  const freq = {}
  for (let num of nums) {
    if (!(num in freq)) freq[num] = 0
    freq[num]++
  }

  const minHeap = new Heap([], null, (a, b) => b[1] - a[1])

  for (let key in freq) {
    minHeap.add([Number(key), freq[key]])

    if (minHeap.length === k + 1) minHeap.pop()
  }

  return minHeap.content.map(item => item[0])
}

module.exports = {findTopFrequent}
