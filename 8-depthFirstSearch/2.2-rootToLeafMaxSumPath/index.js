// Given a binary tree, find the root-to-leaf path with the maximum sum.

//       1
//      / \
//     7   9
//    /\   /\
//    4 5  2 7

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function sum(arr = []) {
  return arr.reduce((a, b) => a + b, 0)
}

function findMaxSumPath(root, curPath = [], maxPath = {}) {
  if (!root) return

  curPath.push(root.val)

  // left node
  if (!root.left && !root.right) {
    if (sum(curPath) > sum(maxPath.current)) maxPath.current = [...curPath]
    return
  }

  for (let child of [root.left, root.right]) {
    if (child) {
      findMaxSumPath(child, curPath, maxPath)
      curPath.pop()
    }
  }

  return maxPath.current
}

module.exports = {findMaxSumPath, Node}
