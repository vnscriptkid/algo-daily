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
  const minHeap = new Heap([], null, (a, b) => b - a)

  let distinctEles = 0

  for (let num in freq) {
    if (freq[num] > 1) minHeap.add(freq[num])
    /* freq[num] === 1 */ else distinctEles++
  }

  // favor of removing chars with freq of 2 upward (heap)
  // [num, freq]

  while (k > 0 && minHeap.length) {
    let count = minHeap.pop()

    let deletingAmount = count - 1 <= k ? count - 1 : k

    k -= deletingAmount
    count -= deletingAmount

    if (count > 1) minHeap.push(count)
    else distinctEles++
  }

  return k > 0 ? distinctEles - k : distinctEles
}

module.exports = {maximizeDistinctNumbers}
