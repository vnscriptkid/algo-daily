const Heap = require("collections/heap")

function maximizeDistinctNumbers(nums, k) {
  // build num-freq map
  const freq = {}
  for (let num of nums) {
    if (!(num in freq)) freq[num] = 0
    freq[num] += 1
  }

  // push all non-distinct numbers to minHeap
  // count current distinct
  const minHeap = new Heap([], null, (a, b) => b - a)
  let distinct = 0
  for (let count of Object.values(freq)) {
    if (count === 1) distinct += 1
    else minHeap.push(count)
  }

  // greedly take out from minHeap, increase current distinct, decrease k
  while (minHeap.length && k > 0) {
    let count = minHeap.pop()

    k -= count - 1

    if (k >= 0) distinct += 1
  }

  // if k > 0, subtract current distinct by k
  if (k > 0) {
    distinct -= k
  }

  return distinct
}

module.exports = {maximizeDistinctNumbers}
