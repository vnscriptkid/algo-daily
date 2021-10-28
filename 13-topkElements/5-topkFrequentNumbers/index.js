// Top 'K' Frequent Numbers (medium)

// Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

// Input: [1, 3, 5, 12, 11, 12, 11], K = 2
// Output: [12, 11]
// Explanation: Both '11' and '12' apeared twice.

const Heap = require('collections/heap')

function findTopFrequent(nums, k) {
  let freq = {}

  for (let num of nums) {
    if (!(num in freq)) freq[num] = 0
    freq[num]++
  }

  const heap = new Heap([], null, (a, b) => b[1] - a[1])

  for (let num of Object.keys(freq)) {
    heap.add([Number(num), freq[num]])

    if (heap.length > k) {
      heap.pop()
    }
  }

  return heap.content.map(item => item[0])
}

module.exports = {findTopFrequent}
