function searchPairs(arr, left, target, triplets) {
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) {
      triplets.push([-target, arr[left], arr[right]])
      left++
      right--

      while (left < right && arr[left] === arr[left - 1]) {
        left++
      }

      while (left < right && arr[right] === arr[right + 1]) {
        right--
      }
    } else if (sum > target) right--
    else left++
  }
}

function searchTriplets(arr) {
  const triplets = []

  // sort
  arr.sort((a, b) => a - b)

  for (let [curIndex, curNumber] of arr.entries()) {
    if (curIndex >= arr.length - 2) break
    searchPairs(arr, curIndex + 1, -curNumber, triplets)
  }

  return triplets
}

module.exports = {searchTriplets}
