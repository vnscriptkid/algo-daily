function search(infiniteArr, key) {
  // find bound of key
  let left = 0,
    right = 1
  while (key > infiniteArr.get(right)) {
    let boundSize = right - left + 1
    // expand bound to the right
    left = right + 1
    right += boundSize * 2
  }

  return binarySearch(infiniteArr, left, right, key)
}

function binarySearch(arr, left, right, key) {
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (key === arr.get(middle)) return middle
    else if (key > arr.get(middle)) left = middle + 1
    else right = middle - 1
  }

  return -1
}

class InfiniteArray {
  constructor(arr) {
    this.arr = arr
  }

  get(index) {
    if (index >= this.arr.length) return Infinity
    return this.arr[index]
  }
}

module.exports = {search, InfiniteArray}
