function findkthSmallest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

module.exports = { findkthSmallest };
