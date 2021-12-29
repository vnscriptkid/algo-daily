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

function maxSumPath(root) {
  function _maxSumPath(curRoot) {
    if (!curRoot) {
      return {
        rootLeafMax: 0,
        pathMax: 0,
      }
    }

    const {rootLeafMax: rootLeafMaxLeft, pathMax: pathMaxLeft} = _maxSumPath(
      curRoot.left,
    )
    const {rootLeafMax: rootLeafMaxRight, pathMax: pathMaxRight} = _maxSumPath(
      curRoot.right,
    )

    return {
      rootLeafMax: curRoot.val + Math.max(rootLeafMaxLeft, rootLeafMaxRight),
      pathMax: Math.max(
        pathMaxLeft,
        pathMaxRight,
        curRoot.val + rootLeafMaxLeft + rootLeafMaxRight,
      ),
    }
  }

  return _maxSumPath(root).pathMax
}

module.exports = {maxSumPath, Node}
