function getAveragesSubarray(arr, k) {
  let left = 0,
    right = 0
  let curSum = 0
  let averages = []
  while (right < arr.length) {
    curSum += arr[right]

    let subarraySize = right - left + 1
    if (subarraySize === k) {
      averages.push(curSum / k)
      curSum -= arr[left]
      left++
    }
    // expand the window
    right++
  }
  return averages
}

module.exports = {getAveragesSubarray}
