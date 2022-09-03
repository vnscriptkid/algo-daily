// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

// [2, 1, 5, 2, 3, 2], S=7
//              [  ]
//              @     ^

// curSum = 5
// minLength = 2

function findSmallestSubarray(arr, sum) {
  let windowStart = 0
  let curSum = 0
  let minLength = Infinity

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    curSum += arr[windowEnd]

    while (curSum >= sum) {
      let curSize = windowEnd - windowStart + 1
      minLength = Math.min(minLength, curSize)
      // shrink down the window
      curSum -= arr[windowStart]
      windowStart++
    }
  }

  return minLength === Infinity ? 0 : minLength
}

module.exports = {findSmallestSubarray}
