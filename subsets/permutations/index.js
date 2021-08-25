function _findPermutations(nums, seen, all, cur = []) {
  if (seen.size === nums.length) {
    all.push([...cur])
    return
  }

  for (let num of nums) {
    if (!seen.has(num)) {
      cur.push(num)
      seen.add(num)
      _findPermutations(nums, seen, all, cur)
      cur.pop()
      seen.delete(num)
    }
  }
}

function findPermutations(nums) {
  const seen = new Set()
  const all = []
  _findPermutations(nums, seen, all)
  return all
}

module.exports = {findPermutations}
