function countRotations(arr) {
  let left = 0,
    right = arr.length - 1
  let middle

  // at least 2 elements
  while (left < right) {
    middle = left + Math.floor((right - left) / 2)

    if (arr[middle - 1] > arr[middle]) return middle
    if (arr[middle] > arr[middle + 1]) return middle + 1

    if (arr[left] < arr[middle]) {
      // sorted part is on the left, max
      left = middle + 1
    } else {
      // sorted part: [middle, right] => max on the left
      right = middle - 1
    }
  }
  return 0
}

module.exports = {countRotations}
