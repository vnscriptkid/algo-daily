function findMinDiffElement(arr, key) {
  let left = 0,
    right = arr.length - 1
  let middle

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)

    if (key === arr[middle]) return arr[middle]

    if (key > arr[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  if (Math.abs(key - arr[left]) < Math.abs(key - arr[right])) return arr[left]

  return arr[right]
}

module.exports = {findMinDiffElement}
