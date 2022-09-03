// [1, 3, 3]
// ^

// callstacks: f([1,3,3], [])

// =============DFS==============
//            [](1,3,3)

//    [1](3,3)            [3](3)             [3]()
//
// [1,3](3)  [1,3]()       [3,3]()
//
// [1,3,3]()

// cur: []
// space: [1,3,3]
// result: [ [] ]

// function findDistinctSubsets(nums) {
//   return new Solution().dfs([], nums)
// }

// class Solution {
//   constructor() {
//     this.all = []
//     this.seen = {}
//   }

//   dfs(curPath, leftSpace) {
//     if (!this.seen[curPath]) {
//       this.all.push(curPath)
//       this.seen[curPath] = true
//     }

//     for (let i = 0; i < leftSpace.length; i++) {
//       this.dfs([...curPath, leftSpace[i]], leftSpace.slice(i + 1))
//     }

//     return this.all
//   }
// }

// ================BFS================
//       [1, 3, 3]
//                 ^
//    all: [ [] ]
//               []
// 1:      []     |     [1]
//
// 3:   []    [1]  |   [3]    [1,3]
//
// 3:   []  [1]  [3]  [1,3] | [3,3]  [1,3,3]

// [[], [1], [3], [1,3], [3,3], [1,3,3]]
//            @     $
//                  ^
// curNum: 3
// cur: [1, 3, 3]

// Given a set of numbers that might contain duplicates, find all of its distinct subsets.
// Input: [1, 3, 3]
// Output: [], [1], [3], [1,3], [3,3], [1,3,3]

function findDistinctSubsets(nums) {
  // sort nums in ascending order
  nums.sort((a, b) => a - b)

  // initialize
  const result = [[]]
  let start = 0,
    end = 0

  // loop every number in nums, add new subsets at current level
  for (let i = 0; i < nums.length; i++) {
    start = 0

    let curNum = nums[i]

    if (i > 0 && curNum === nums[i - 1]) start = end + 1

    end = result.length - 1

    for (let j = start; j <= end; j++) {
      let subset = result[j]
      let newSubset = [...subset, curNum]

      result.push(newSubset)
    }
  }

  return result
}

module.exports = {findDistinctSubsets}
