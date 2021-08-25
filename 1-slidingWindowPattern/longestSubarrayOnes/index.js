function getWindowSize(start, end) {
  return end - start + 1
}

function longestSubarrayOfOnes(arr, k) {
  let onesCount = 0
  let longestOnesSize = 0

  let windowStart = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    let curNum = arr[windowEnd]

    if (curNum === 1) onesCount += 1

    // do we need to shrink down current window
    while (getWindowSize(windowStart, windowEnd) - onesCount > k) {
      let leftMostNum = arr[windowStart]
      if (leftMostNum === 1) onesCount -= 1
      windowStart++
    }

    // update longest 1s subarray size
    longestOnesSize = Math.max(
      longestOnesSize,
      getWindowSize(windowStart, windowEnd),
    )
  }

  return longestOnesSize
}

module.exports = {longestSubarrayOfOnes}
