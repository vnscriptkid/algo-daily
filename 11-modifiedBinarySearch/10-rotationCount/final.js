function findMax(arr) {
  let left = 0,
    right = arr.length - 1
  let middle

  while (left < right) {
    middle = left + Math.floor((right - left) / 2)

    if (arr[middle] > arr[middle] + 1) return middle
    if (arr[middle - 1] > arr[middle]) return middle - 1

    if (left === middle) return right // [1,2]

    if (arr[left] < arr[middle]) {
      // sorted part is on the left, max is from here to the right
      left = middle
    } else {
      // sorted part is on the right, max is on the left
      right = middle - 1
    }
  }

  // now left is right
  return left
}

function countRotations(arr) {
  const maxIndex = findMax(arr)

  return (maxIndex + 1) % arr.length
}

module.exports = {countRotations}
