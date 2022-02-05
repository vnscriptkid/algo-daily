function findSmallestWindow(arr) {
  // find first num out of order from left, call left
  let left = 0
  while (arr[left + 1] !== undefined && arr[left] < arr[left + 1]) left++

  if (left === arr.length - 1) return 0

  // find first num out of order from right, call right
  let right = arr.length - 1
  while (arr[right - 1] !== undefined && arr[right - 1] < arr[right]) right--

  if (right === 0) return 0

  // find min,max between [left - 1, right + 1]
  let i = left
  let min = Infinity
  let max = -Infinity
  while (i <= right) {
    if (arr[i] < min) min = arr[i]
    if (arr[i] > max) max = arr[i]
    i++
  }

  // from left - 1, go to the left find first num less than min
  let finalLeft = left
  while (finalLeft - 1 >= 0 && min < arr[finalLeft - 1]) finalLeft--

  // from right + 1, go to the right, find first num greater than max
  let finalRight = right
  while (finalRight + 1 < arr.length && max > arr[finalRight + 1]) finalRight++

  return finalRight - finalLeft + 1
}

module.exports = {findSmallestWindow}
