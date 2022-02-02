// Path with Maximum Sum

// Find the path with the maximum sum in a given binary tree.
// Write a function that returns the maximum sum.
// A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

//     -1
//     / \
//   -3   null

function maxSumPath(root) {
  function _maxSumPath(root) {
    if (!root)
      return {
        maxSum: -Infinity,
        maxRootToLeafSum: -Infinity,
      }

    // leaf node
    if (!root.left && !root.right) {
      return {
        maxSum: root.val,
        maxRootToLeafSum: root.val,
      }
    }

    let {maxSum: maxSumLeft, maxRootToLeafSum: maxRootToLeafSumLeft} =
      _maxSumPath(root.left)
    let {maxSum: maxSumRight, maxRootToLeafSum: maxRootToLeafSumRight} =
      _maxSumPath(root.right)

    // maxSumLeft = Math.max(maxSumLeft, 0)
    // maxSumRight = Math.max(maxSumRight, 0)
    maxRootToLeafSumLeft = Math.max(maxRootToLeafSumLeft, 0)
    maxRootToLeafSumRight = Math.max(maxRootToLeafSumRight, 0)

    return {
      maxSum: Math.max(
        maxSumLeft,
        maxSumRight,
        maxRootToLeafSumLeft + maxRootToLeafSumRight + root.val,
      ),
      maxRootToLeafSum:
        root.val + Math.max(maxRootToLeafSumLeft, maxRootToLeafSumRight),
    }
  }

  return _maxSumPath(root).maxSum
}

module.exports = {maxSumPath, Node}
