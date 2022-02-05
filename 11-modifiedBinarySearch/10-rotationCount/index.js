// case 1: 8 9 1 2 4 5 6 7

// case 2: 4 5 6 7 8 9 1 2

function countRotations(arr) {
  // find min idx
  let left = 0,
    right = arr.length - 1

  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (middle < right && arr[middle] > arr[middle + 1]) return middle + 1

    if (left < middle && arr[middle - 1] > arr[middle]) return middle

    if (arr[left] < arr[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return 0
}

module.exports = {countRotations}
