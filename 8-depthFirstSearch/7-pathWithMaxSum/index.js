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
  function dfs(root) {
    if (!root) {
      return {
        maxRootToLeaf: -Infinity,
        maxSum: -Infinity,
      }
    }

    // base case
    if (!root.left && !root.right) {
      // at leaf now
      return {
        maxRootToLeaf: root.val,
        maxSum: root.val,
      }
    }

    let {maxSum: maxSumLeft, maxRootToLeaf: maxRootToLeafLeft} = dfs(root.left)
    let {maxSum: maxSumRight, maxRootToLeaf: maxRootToLeafRight} = dfs(
      root.right,
    )

    maxRootToLeafLeft = Math.max(0, maxRootToLeafLeft)
    maxRootToLeafRight = Math.max(0, maxRootToLeafRight)

    return {
      maxRootToLeaf: root.val + Math.max(maxRootToLeafLeft, maxRootToLeafRight),
      maxSum: Math.max(
        maxSumLeft,
        maxSumRight,
        root.val + maxRootToLeafLeft + maxRootToLeafRight,
      ),
    }
  }

  return dfs(root).maxSum
}

module.exports = {maxSumPath, Node}
