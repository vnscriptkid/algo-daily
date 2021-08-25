class InfiniteArray {
  constructor(arr = []) {
    this.arr = arr
  }

  getValueAt(index) {
    return this.arr[index] || Infinity
  }
}

function binarySearch(arr, key, left, right) {
  let middle

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)

    if (key === arr.getValueAt(middle)) return middle

    if (key > arr.getValueAt(middle)) left = middle + 1
    else right = middle - 1
  }

  return -1
}

function search(arr, key) {
  let left = 0
  let right = 1

  while (key > arr.getValueAt(right)) {
    left = right + 1
    right = right + (right - left + 10) * 2
  }

  return binarySearch(arr, key, left, right)
}

module.exports = {search, InfiniteArray}
