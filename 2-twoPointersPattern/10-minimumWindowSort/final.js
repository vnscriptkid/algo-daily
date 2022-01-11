function findSmallestWindow(arr) {
  let left = 0,
    right = arr.length - 1

  while (left < arr.length - 1 && arr[left] <= arr[left + 1]) {
    left++
  }

  if (left === arr.length - 1) return 0

  while (right > 0 && arr[right] >= arr[right - 1]) {
    right--
  }

  let windowMax = -Infinity
  let windowMin = Infinity

  for (let i = left; i <= right; i++) {
    if (arr[i] > windowMax) windowMax = arr[i]
    if (arr[i] < windowMin) windowMin = arr[i]
  }

  // there's at least 1 on the right and it is smaller than windowMax
  while (right < arr.length - 1 && windowMax > arr[right + 1]) {
    right++
  }

  // can i include left - 1
  while (left > 0 && windowMin < arr[left - 1]) {
    left--
  }

  return right - left + 1
}

module.exports = {findSmallestWindow}
