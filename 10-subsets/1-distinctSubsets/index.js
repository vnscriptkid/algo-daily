// Given a set with distinct elements, find all of its distinct subsets.

// Input: [1, 5, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

//        [ ]
//        / \
// add 1 [] [1]
//         /    \
// add 3 [][1]  [3][1,3]
//            /          \
// add 5 [][1][3][1,3]   [5][1,5][3,5][1,3,5]
function findDistinctSubsets(nums) {
  const result = [[]]

  for (let num of nums) {
    let curSize = result.length
    for (let i = 0; i < curSize; i++) {
      result.push([...result[i], num])
    }
  }

  return result
}

// 1 5 3

//             [](1,5,3)
//              /         \
//        [1](5,3)         [5](3)          [3]()
//          /      \           |
//      [1,5](3)   [1,3]()     [5,3]()
//        /
//    [1,5,3]()

// result: [ [], [1], [1,5], [1,5,3], [1,3], [5], [5,3], [3] ]

class Solution {
  constructor() {
    this.all = []
  }

  findDistinctSubsets(nums) {
    this._dfs([], nums)
    return this.all
  }

  _dfs(path, space) {
    this.all.push(path)

    for (let i = 0; i < space.length; i++) {
      this._dfs([...path, space[i]], space.slice(i + 1))
    }
  }
}

module.exports = {findDistinctSubsets, Solution}
