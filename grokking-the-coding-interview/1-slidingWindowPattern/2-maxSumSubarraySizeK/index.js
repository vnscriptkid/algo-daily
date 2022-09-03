// Maximum Sum Subarray of Size K
// Given an array of positive numbers and a positive number ‘k’,
// find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3
//                  $     ^
// curSum=9-5+2=6
// maxSum=9
// [5, 1, 3] => 9

function maxSumSubarray(arr, k) {
  let curSum = 0
  let curMax = -Infinity
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    curSum += arr[windowEnd]

    if (windowEnd >= k - 1) {
      curMax = Math.max(curMax, curSum)
      curSum -= arr[windowStart]
      windowStart++
    }
  }

  return curMax
}

module.exports = {maxSumSubarray}
