// Longest Subarray with Ones after Replacement (hard)

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s,
// find the length of the longest contiguous subarray having all 1s.

// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

// translation: find the longest subarray with maximum of k 0s

// zerosCount = 2
// longestSubarraySize = 6

// [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
//                 ^
//                                   $

function longestSubarrayOfOnes(arr, k) {
  let windowStart = 0
  let zerosCount = 0
  let longestSubarraySize = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // assumption: current window is valid, i want to expand it the find better window
    let newNum = arr[windowEnd]

    if (newNum === 0) zerosCount++

    // adding new number could make our window invalid (zerosCount > K)
    while (zerosCount > k) {
      // shrink the window down
      let firstNum = arr[windowStart]
      if (firstNum === 0) zerosCount--
      windowStart++
    }

    // zerosCount <= k now
    longestSubarraySize = Math.max(
      longestSubarraySize,
      windowEnd - windowStart + 1 /* current window sizes */,
    )
  }

  return longestSubarraySize
}

module.exports = {longestSubarrayOfOnes}
