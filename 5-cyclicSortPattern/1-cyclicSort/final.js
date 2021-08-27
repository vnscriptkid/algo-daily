function swap(arr, index1, index2) {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function sort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) {
      swap(arr, i, arr[i] - 1)
    }
  }
}

module.exports = {sort}
