function makeSquares(arr) {
  let left = 0,
    right = arr.length - 1

  while (left <= right) {
    const leftSquare = Math.pow(arr[left], 2)
    const rightSquare = Math.pow(arr[right], 2)

    if (leftSquare > rightSquare) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
    }
    arr[right] = Math.max(leftSquare, rightSquare)
    right--
  }
}

module.exports = {makeSquares}
