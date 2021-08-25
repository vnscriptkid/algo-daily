function findDistinctSubsets(nums) {
  const subsets = []
  subsets.push([])

  for (let curNum of nums) {
    const n = subsets.length
    for (let i = 0; i < n; i++) {
      const existingSubset = subsets[i]
      const newSubset = [...existingSubset, curNum]
      subsets.push(newSubset)
    }
  }

  return subsets
}

module.exports = {findDistinctSubsets}
