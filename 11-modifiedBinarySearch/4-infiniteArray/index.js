// Search in a Sorted Infinite Array

// Given an infinite sorted array (or an array with unknown size), find if a given number ‘key’ is present in the array. Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

// Since it is not possible to define an array with infinite (unknown) size, you will be provided with an interface ArrayReader to read elements of the array. ArrayReader.get(index) will return the number at index; if the array’s size is smaller than the index, it will return Integer.MAX_VALUE.

// Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 16
//               $           ^

function search(infiniteArr, key) {
  // find search space first
  let left = 0,
    right = 1

  while (key > infiniteArr.get(right)) {
    let sizeOfCurrentBound = right - left + 1
    left = right + 1
    right += sizeOfCurrentBound * 2
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
