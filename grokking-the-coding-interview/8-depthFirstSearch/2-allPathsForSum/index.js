// All Paths for a Sum
// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

//   1
// 7   9
//4 5 2 7
// Sum: 12

// callstack: f(1, 12)

// cur: 1, 7
// all: [ [1, 7, 4] ]
// all: [ [1,7,4], [1,9,2] ]

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

class Solution {
  constructor() {
    this.all = []
    this.curPath = []
  }

  dfs(node, sum) {
    this.curPath.push(node.val)

    if (!node.left && !node.right) {
      if (sum === node.val) this.all.push([...this.curPath])
      return
    }

    if (node.left) {
      this.dfs(node.left, sum - node.val)
      this.curPath.pop()
    }

    if (node.right) {
      this.dfs(node.right, sum - node.val)
      this.curPath.pop()
    }

    return this.all
  }
}

function findAllPathsSum(root, sum) {
  return new Solution().dfs(root, sum)
}

module.exports = {Node, findAllPathsSum}
