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

function findMaxSumPath(root) {
  return root
}

module.exports = {findMaxSumPath, Node}
