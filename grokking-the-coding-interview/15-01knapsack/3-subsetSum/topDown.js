// Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.
// set = [1, 2, 3, 7],
//        0  1  2  3
// S = 6
// The given set has a subset whose sum is '6': {1, 2, 3}

//                               👇f(6, 0)
//
// 1:                👇f(5, 1)               👇f(6, 1)

// 2:       👇f(3, 2)     👇f(5, 2)         👇f(4, 2)     👇f(6, 2)

// 3:   ✔️f(0,3)  f(3,3) f(2,3) f(5,3)  f(1,3) f(4,3)  f(3,3) f(6,3)

// 7:

function canFindSubset(nums, sum) {
  const cache = {}

  function _canFindSubset(sum, curIndex) {
    const args = [sum, curIndex]
    if (cache[args] !== undefined) return cache[args]

    // base case
    if (sum === 0) return true

    if (curIndex === nums.length) return false

    // 2 choices
    // Choice 1: Take cur num
    let takeIt = false
    if (sum >= nums[curIndex]) {
      takeIt = _canFindSubset(sum - nums[curIndex], curIndex + 1)
    }
    if (takeIt) return true
    // Choice 2: Skip cur num
    let skipIt = _canFindSubset(sum, curIndex + 1)
    if (skipIt) return true
    cache[args] = false
    return false
  }

  return _canFindSubset(sum, 0)
}

module.exports = {canFindSubset}
