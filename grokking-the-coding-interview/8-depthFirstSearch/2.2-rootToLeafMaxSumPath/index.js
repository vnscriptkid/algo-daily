// Given a binary tree, find the root-to-leaf path with the maximum sum.

//       1
//      / \
//     7   9
//    /\   /\
//    4 5  2 7

// 12, 13, 12, 17
// [1, 9, 7]

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const sum = (arr = []) => arr.reduce((a, num) => a + num, 0)

function findMaxSumPath(root, curPath = [], bestPath = {}) {
  if (!root) return

  curPath.push(root.val)

  if (!root.left && !root.right) {
    // leaf node now
    if (sum(curPath) > sum(bestPath.current)) bestPath.current = [...curPath]
    return
  }

  for (let child of [root.left, root.right]) {
    if (child) {
      findMaxSumPath(child, curPath, bestPath)
      curPath.pop()
    }
  }

  return bestPath.current
}

module.exports = {findMaxSumPath, Node}
