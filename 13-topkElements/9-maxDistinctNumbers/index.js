// Maximum Distinct Elements

// Given an array of numbers and a number ‘K’,
// we need to remove ‘K’ numbers from the array such that we are left with maximum distinct numbers.

// Input: [7, 3, 5, 8, 5, 3, 3], and K=2
// Output: 3
// Explanation: We can remove two occurrences of 3 to be left with 3 distinct numbers [7, 3, 8], we have
// to skip 5 because it is not distinct and occurred twice.
// Another solution could be to remove one instance of '5' and '3' each to be left with three
// distinct numbers [7, 5, 8], in this case, we have to skip 3 because it occurred twice.

// { 7: 1, 3: 3, 5: 2, 8: 1 }
// distinct: 3
// {  }

const Heap = require('collections/heap')

function maximizeDistinctNumbers(nums, k) {
  // know freq of each char
  const freq = {}

  for (let num of nums) {
    if (!(num in freq)) freq[num] = 0
    freq[num]++
  }
  // char with freq 1 should not be touched
  const minHeap = new Heap([], null, (a, b) => b[1] - a[1])

  let distinctNums = 0

  for (let num in freq) {
    if (freq[num] === 1) {
      delete freq[num]
      distinctNums++
    } else minHeap.add([num, freq[num]])
  }

  // favor of removing chars with freq of 2 upward (heap)
  // [num, freq]
  while (k > 0 && minHeap.length) {
    const [num, count] = minHeap.pop()

    if (count > 2) minHeap.add([num, count - 1])
    /* count === 2 */ else distinctNums++

    k--
  }

  return k > 0 ? distinctNums - k : distinctNums
}

module.exports = {maximizeDistinctNumbers}
