function findCeilingNumber(arr, target) {
  let left = 0,
    right = arr.length - 1

  if (target > arr[right]) return -1

  let middle

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)

    if (arr[middle] === target) return middle

    if (target > arr[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  // left > right now
  return left
}

module.exports = {findCeilingNumber}
