function findkthSmallest(nums, k) {
  function swap(x, y) {
    ;[nums[x], nums[y]] = [nums[y], nums[x]]
  }

  function partition(left, right) {
    if (left === right) return left

    const pivot = nums[right]

    for (let cur = left; cur < right; cur++) {
      if (nums[cur] < pivot) {
        swap(cur, left)
        left++
      }
    }

    swap(left, right)
  }

  function findkthSmallestRecursively(left, right) {
    const pivotIndex = partition(left, right)

    if (pivotIndex === k - 1) return nums[pivotIndex]
    else if (pivotIndex < k - 1)
      return findkthSmallestRecursively(pivotIndex + 1, right)
    else return findkthSmallestRecursively(left, pivotIndex - 1)
  }

  return findkthSmallestRecursively(0, nums.length - 1)
}

module.exports = {findkthSmallest}
