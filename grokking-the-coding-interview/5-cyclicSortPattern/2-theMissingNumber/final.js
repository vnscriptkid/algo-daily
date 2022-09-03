function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function findMissingNumber(arr) {
  let i = 0

  while (i < arr.length) {
    if (arr[i] !== i && arr[i] !== arr.length) swap(arr, i, arr[i])
    else i++
  }

  for (let i = 0; i < arr.length; i++) {
    if (i !== arr[i]) return i
  }

  return arr.length
}

module.exports = {findMissingNumber}
