// Quadruple Sum to Target (medium) #

// Given an array of unsorted numbers and a target number,
// find all unique quadruplets in it, whose sum is equal to the target number.

function searchTriplets(arr, target, left, right) {
  const result = []

  for (let second = left; second <= right - 2; second++) {
    let third = second + 1,
      fourth = right

    while (third < fourth) {
      let sum = arr[second] + arr[third] + arr[fourth]

      if (sum === target) {
        result.push([arr[second], arr[third], arr[fourth]])

        third++
        while (arr[third] === arr[third - 1] && third < fourth) third++

        fourth--
        while (arr[fourth] === arr[fourth + 1] && third < fourth) fourth--
      } else if (sum < target) {
        third++
      } else {
        fourth--
      }
    }
  }

  return result
}

function searchQuadruplets(arr, target) {
  arr.sort((a, b) => a - b)

  const result = []

  for (let firstIdx = 0; firstIdx < arr.length - 3; firstIdx++) {
    const triplets = searchTriplets(
      arr,
      target - arr[firstIdx],
      firstIdx + 1,
      arr.length - 1,
    )
    triplets.forEach(t => result.push([arr[firstIdx], ...t]))
  }

  return result
}

module.exports = {searchQuadruplets}
