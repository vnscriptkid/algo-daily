// [2, 1, 5, 2, 3, 2], S=7
//        ^  $
//        [  ]

// curSum = 7
// minLength = 2

function findSmallestSubarray(arr, sum) {
  let windowStart = 0
  let curSum = 0

  // for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
  //     curSum += arr[windowEnd];
  // }
  let minLength = Infinity

  //   let windowEnd = 0
  //   while (windowEnd >= arr.length) {
  //     if (curSum < sum) {
  //       windowEnd++
  //       curSum += arr[windowEnd]
  //     } else {
  //       // curSum >= sum
  //       const curLength = windowEnd - windowStart + 1
  //       minLength = Math.min(minLength, curLength)

  //       // can we find smaller window
  //       curSum -= arr[windowStart]
  //       windowStart++
  //       // TODO: Edge case windowStart === windowEnd
  //     }
  //   }

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // expanding window
    curSum += arr[windowEnd]

    if (curSum < sum) continue // to expand window

    // curSum >= sum
    // can we have smaller subarray
    do {
      const curLength = windowEnd - windowStart + 1
      minLength = Math.min(minLength, curLength)
      curSum -= arr[windowStart]
      windowStart++
    } while (curSum >= sum)
  }

  return minLength
}

module.exports = {findSmallestSubarray}
