function findPermutations(nums) {
  let prev = [],
    cur = []
  prev.push([nums[0]])

  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i]
    cur = []

    for (let curPer of prev) {
      let n = curPer.length
      for (let j = 0; j <= n; j++) {
        const newPer = [...curPer.slice(0, j), curNum, ...curPer.slice(j)]
        cur.push(newPer)
      }
    }

    prev = cur
  }

  return cur
}

const nums = [1, 3, 5]
let result = findPermutations(nums)

module.exports = {findPermutations}
