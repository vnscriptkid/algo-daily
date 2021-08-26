const Heap = require('collections/heap')

function findClosestBst(nums, x) {
  let left = 0,
    right = nums.length - 1
  let middle

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)

    let curDiff = Math.abs(nums[middle] - x)
    if (curDiff === 0) return middle

    if (x > nums[middle]) left = middle + 1
    else right = middle - 1
  }

  return right
}

function findKClosetNums(nums, k, x) {
  const result = []
  let closestIndex = findClosestBst(nums, x)
  const minHeap = new Heap([], null, (a, b) => b[1] - a[1])

  let left = Math.max(0, closestIndex - k)
  let right = Math.min(nums.length - 1, closestIndex + k)

  for (let i = left; i <= right; i++) {
    minHeap.push([nums[i], Math.abs(x - nums[i])])
  }

  // extract k from heaps
  // eslint-disable-next-line no-unused-vars
  for (let _ of Array(k)) {
    if (!minHeap.length) break
    result.push(minHeap.pop()[0])
  }

  // return
  return result.sort()
}

module.exports = {findKClosetNums}
