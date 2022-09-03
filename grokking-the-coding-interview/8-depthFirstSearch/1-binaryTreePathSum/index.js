// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

//           1
//          / \
//         2   3
//          \ / \
//          5 6  7

//       sum = 9

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function hasPathSumTo(root, sum) {
  if (!root) return false

  if (!root.left && !root.right) return root.val === sum

  return (
    hasPathSumTo(root.left, sum - root.val) ||
    hasPathSumTo(root.right, sum - root.val)
  )
}

module.exports = {hasPathSumTo, Node}
