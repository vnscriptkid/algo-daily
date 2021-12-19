// Longest Subarray with Ones after Replacement (hard)

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s,
// find the length of the longest contiguous subarray having all 1s.

// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

// [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
//                 ^              $
// numOfZeroes: 2
// sizeOfLongest: 6

function longestSubarrayOfOnes(arr, k) {
  let zeroesCount = 0
  let longestOnes = 0

  let windowStart = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    let curNum = arr[windowEnd]

    if (curNum === 0) zeroesCount++

    while (zeroesCount > k) {
      let headNum = arr[windowStart]

      if (headNum === 0) zeroesCount--

      windowStart++
    }

    const windowSize = windowEnd - windowStart + 1

    longestOnes = Math.max(longestOnes, windowSize)
  }

  return longestOnes
}

module.exports = {longestSubarrayOfOnes}
