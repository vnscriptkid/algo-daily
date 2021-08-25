function bst(arr, key, left, right, increasing) {
  let middle
  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)

    if (key === arr[middle]) return middle

    if (increasing) {
      if (key > arr[middle]) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    } else {
      if (key > arr[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
  }

  return -1
}

function search(arr, key) {
  let left = 0,
    right = arr.length - 1
  let middle

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)

    let resultOnRight
    if (arr[middle] < arr[middle + 1]) {
      resultOnRight = bst(arr, key, middle, right, true)
    } else {
      resultOnRight = bst(arr, key, middle, right, false)
    }

    if (resultOnRight !== -1) return resultOnRight
    else right = middle - 1
  }

  return -1
}

module.exports = {search}
