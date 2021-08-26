// [1, 2, 3, 4, 5], k=3
//       [       ]
//        ^
//              $

// curSum = 3 + 4 + 5 => 12/3=4
// result: [2, 3, 4]

function getAveragesSubarray(arr, k) {
  const result = []
  let curSum = 0
  let left = 0

  for (let right = 0; right < arr.length; right++) {
    curSum += arr[right]

    if (right >= k - 1) {
      result.push(curSum / k)
      curSum -= arr[left]
      left++
    }
  }

  return result
}

module.exports = {getAveragesSubarray}
