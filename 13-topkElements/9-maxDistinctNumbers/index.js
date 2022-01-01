// Maximum Distinct Elements

// Given an array of numbers and a number ‘K’,
// we need to remove ‘K’ numbers from the array such that we are left with maximum distinct numbers.

const Heap = require('collections/heap')

function maximizeDistinctNumbers(nums, k) {
  // build char map
  let freq = {}
  for (let num of nums) {
    if (!(num in freq)) freq[num] = 0
    freq[num]++
  }

  let minHeap = new Heap([], null, (a, b) => b[1] - a[1])
  // feed chars with freq >= 2 in minHeap
  let distinctChars = 0
  for (let numStr in freq) {
    let count = freq[numStr]
    let num = parseInt(numStr)

    if (count >= 2) minHeap.add([num, count])
    else distinctChars++
  }

  // take out k elements from minHeap
  while (k > 0 && minHeap.length) {
    const [num, count] = minHeap.pop()

    if (count === 2) distinctChars++
    else minHeap.add([num, count - 1])

    k--
  }

  // return distinct chars
  return k > 0 ? distinctChars - k : distinctChars
}

module.exports = {maximizeDistinctNumbers}
