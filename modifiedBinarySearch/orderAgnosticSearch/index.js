function search(arr, target) {
  let left = 0,
    right = arr.length - 1
  const isAscending = arr[left] <= arr[right]

  let middle

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)

    if (arr[middle] === target) return middle

    if (isAscending) {
      if (target > arr[middle]) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    } else {
      if (target > arr[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
  }
  return -1
}

module.exports = {search}
