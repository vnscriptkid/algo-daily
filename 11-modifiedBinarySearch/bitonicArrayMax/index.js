function findMaxInBitonicArr(arr) {
  let left = 0,
    right = arr.length - 1
  let middle

  while (left < right) {
    middle = left + Math.floor((right - left) / 2)

    if (arr[middle] < arr[middle + 1]) {
      // max point on the right, excluding current middle
      left = middle + 1
    } else {
      // max point to the left, including current middle
      right = middle
    }
  }

  // now left === right;
  return arr[left]
}

module.exports = {findMaxInBitonicArr}
