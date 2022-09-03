//     Problem 1: Given a binary tree, return all root-to-leaf paths.

//       1
//      / \
//     7   9
//    /\   /\
//    4 5  2 7

// Stackcall:

// all: [[1, 7, 4], [1, 7, 5], [1, 9, 2], [1, 9, 7]]
// curPath: [1]

//     [[1, 7, 4], [1, 7, 5], [1, 9, 2], [1, 9, 7]]

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

class Solution {
  constructor() {
    this.curPath = []
    this.all = []
  }

  dfs(node) {
    this.curPath.push(node.val)

    // base case
    if (!node.left && !node.right) {
      // we're at leaf node now
      this.all.push([...this.curPath])
      return
    }

    for (let child of [node.left, node.right]) {
      if (child) {
        this.dfs(child)
        this.curPath.pop()
      }
    }

    return this.all
  }
}

function findAllPaths(root) {
  return new Solution().dfs(root)
}

module.exports = {findAllPaths, Node}
