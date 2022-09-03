// Maximum Distinct Elements

// Given an array of numbers and a number ‘K’,
// we need to remove ‘K’ numbers from the array such that we are left with maximum distinct numbers.

// Input: [7, 3, 5, 8, 5, 3, 3], and K=2
// Output: 3
// Explanation: We can remove two occurrences of 3 to be left with 3 distinct numbers [7, 3, 8], we have
// to skip 5 because it is not distinct and occurred twice.
// Another solution could be to remove one instance of '5' and '3' each to be left with three
// distinct numbers [7, 5, 8], in this case, we have to skip 3 because it occurred twice.

const Heap = require('collections/heap')

function maximizeDistinctNumbers(nums, k) {
  // build a freq map { number: it's freq }
  const freq = {}

  for (let num of nums) {
    if (!(num in freq)) freq[num] = 0
    freq[num]++
  }

  // don't need to remove numbers appear once (distinct by itself)
  // start to remove from numbers appear twice upward (heap)
  // numFreq
  const minHeap = new Heap([], null, (a, b) => b - a)

  let distinctNums = 0

  for (let num in freq) {
    if (freq[num] > 1) minHeap.add(freq[num])
    /* freq[num] === 1 */ else distinctNums++
  }

  // loop: remove until we're out of k
  while (k > 0 && minHeap.length) {
    let numFreq = minHeap.pop()

    // we want to delete (numFreq - 1)
    // maximum deletions we can make here is k
    const deletions = numFreq - 1 <= k ? numFreq - 1 : k

    numFreq -= deletions
    k -= deletions

    if (numFreq > 1) minHeap.add(numFreq)
    /* numFreq === 1 */ else distinctNums++
  }

  return k > 0 ? distinctNums - k : distinctNums
}

module.exports = {maximizeDistinctNumbers}
