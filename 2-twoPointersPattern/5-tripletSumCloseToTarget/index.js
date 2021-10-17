// Triplet Sum Close to Target

// Given an array of unsorted numbers and a target number,
// find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet.
// If there are more than one such triplet, return the sum of the triplet with the smallest sum.

function searchTriplets(arr, target) {
  // sort in asending order
  arr.sort((a, b) => a - b)

  let minDiff = Infinity
  let bestSum = Infinity

  for (let firstIdx = 0; firstIdx < arr.length - 2; firstIdx++) {
    let secondIdx = firstIdx + 1
    let thirdIdx = arr.length - 1

    while (secondIdx < thirdIdx) {
      let sum = arr[firstIdx] + arr[secondIdx] + arr[thirdIdx]

      if (sum === target) return target

      let curDiff = Math.abs(sum - target)
      if (curDiff < minDiff) {
        minDiff = curDiff
        bestSum = sum
      }

      if (sum < target) secondIdx++
      else thirdIdx--
    }
  }

  return bestSum
}

module.exports = {searchTriplets}
