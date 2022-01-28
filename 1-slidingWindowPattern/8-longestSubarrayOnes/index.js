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
  // keep a count of zeroes
  // let zeroesCount = 0;
  const count = {
    0: 0,
    1: 0,
  }

  let windowStart = 0
  let longest = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // expand window as long as zeroesCount <= k
    count[arr[windowEnd]]++

    while (count[0] > k) {
      // shrink down when zeroesCount > k
      count[arr[windowStart]]--
      windowStart++
    }
    // check windowSize at valid state to update longestOfOnes
    longest = Math.max(windowEnd - windowStart + 1, longest)
  }

  return longest
}

module.exports = {longestSubarrayOfOnes}
