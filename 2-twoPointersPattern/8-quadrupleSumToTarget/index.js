// Quadruple Sum to Target (medium) #

// Given an array of unsorted numbers and a target number,
// find all unique quadruplets in it, whose sum is equal to the target number.

// Input: [4, 1, 2, -1, 1, -3], target=1
// Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
// Explanation: Both the quadruplets add up to the target.

// 4, 1, 2, -1, 1, -3 | twoSum, target = 3
// -3 -1  1  1  2  4
//              ^$

// [[-1, 4], [1, 2]]

function searchTriplets(arr, startIdx, target) {
  const triplets = []

  for (let secondIdx = startIdx; secondIdx < arr.length - 2; secondIdx++) {
    const secondNum = arr[secondIdx]

    let left = secondIdx + 1,
      right = arr.length - 1

    while (left < right) {
      const curSum = secondNum + arr[left] + arr[right]

      if (curSum === target) {
        triplets.push([secondNum, arr[left], arr[right]])

        // 1 1 1 2 ... 2 3
        //       ^       $
        left++
        while (arr[left] === arr[left - 1] && left < right) left++

        right--
        while (arr[right] === arr[right + 1] && left < right) right--
      } else if (curSum < target) {
        left++
      } else {
        right--
      }
    }
  }

  return triplets
}

function searchQuadruplets(arr, target) {
  // sort array in ascending order
  arr.sort((a, b) => a - b)

  const quadruplets = []

  for (let firstIdx = 0; firstIdx < arr.length - 3; firstIdx++) {
    let firstNum = arr[firstIdx]

    const triplets = searchTriplets(arr, firstIdx + 1, target - firstNum)

    triplets.forEach(triplet => {
      quadruplets.push([firstNum, ...triplet])
    })
  }

  return quadruplets
}

module.exports = {searchQuadruplets}
