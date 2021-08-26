function find_duplicate(nums) {
  let i = 0
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      let j = nums[i] - 1
      if (nums[i] !== nums[j]) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
        // swap
      } else {
        return nums[i]
      }
    } else {
      i += 1
    }
  }
  return -1
}

console.log(find_duplicate([1, 4, 4, 3, 2]))
console.log(find_duplicate([2, 1, 3, 3, 5, 4]))
console.log(find_duplicate([2, 4, 1, 4, 4]))

// Other solution (Not mofify the array)
// https://leetcode.com/problems/find-the-duplicate-number/discuss/1202994/c%2B%2B-O(N)-solution-with-O(1)-space-using-Tortois-and-Hare-method-with-clear-and-easiest-explanation
// Diagram: https://app.diagrams.net/#G1JqY8n1i4WIuQ9Z-BEJlHaWxxNlRKKxdj
