const Heap = require('collections/heap')

function findTopFrequent(nums, k) {
  // build freq map
  const freq = {}
  for (let num of nums) {
    if (!(num in freq)) freq[num] = 0
    freq[num] += 1
  }

  // find top k
  // item in heap [ num, freq ]
  const minHeap = new Heap([], null, (a, b) => b[1] - a[1])

  for (let [num, count] of Object.entries(freq)) {
    minHeap.add([num, count])

    if (minHeap.length > k) {
      minHeap.pop()
    }
  }

  return minHeap.content.map(([num]) => parseInt(num))
}

module.exports = {findTopFrequent}
