// Triplet Sum Close to Target

// Given an array of unsorted numbers and a target number,
// find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet.
// If there are more than one such triplet, return the sum of the triplet with the smallest sum.

// Input: [-3, -1, 1, 2], target=1
//              #
//                    @$

// curSum: 0
// curDiff: 1
// bestAnswer: 1

// Output: 0
// Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

function searchTriplets(arr, target) {
  arr.sort((a, b) => a - b)

  let bestDiff = Infinity
  let bestSum = Infinity

  for (let firstIdx = 0; firstIdx < arr.length - 2; firstIdx++) {
    let secondIdx = firstIdx + 1,
      thirdIdx = arr.length - 1

    while (secondIdx < thirdIdx) {
      let curSum = arr[firstIdx] + arr[secondIdx] + arr[thirdIdx]
      let curDiff = Math.abs(curSum - target)

      if (curDiff < bestDiff) {
        bestDiff = curDiff
        bestSum = curSum
      } else if (curDiff === bestDiff && curSum < bestSum) {
        bestDiff = curDiff
        bestSum = curSum
      }

      if (curSum === target) return curSum
      else if (curSum < target) secondIdx++
      else thirdIdx--
    }
  }
  return bestSum
}

module.exports = {searchTriplets}
