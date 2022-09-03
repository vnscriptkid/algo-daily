// Tree Diameter
// Given a binary tree, find the length of its diameter.
// The diameter of a tree is the number of nodes on the longest path between any two leaf nodes.
// The diameter of a tree may or may not pass through the root.

// Note: You can always assume that there are at least two leaf nodes in the given tree.

//    1
//   / \
//  2   3
//   \  /\
//   4 5  6
//      \
//       7

//      1
//     / \
//    2   3
//       / \
//      5   6
//     /   /
//    8   9
//   /     \
//  10      11

// diameter = leftHeight + rightHeight + 1 || leftDiameter || rightDiameter

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function findTreeDiameter(root) {
  function _findTreeDiameter(root) {
    if (!root)
      return {
        height: 0,
        diameter: 0,
      }

    const {height: leftHeight, diameter: leftDiameter} = _findTreeDiameter(
      root.left,
    )
    const {height: rightHeight, diameter: rightDiameter} = _findTreeDiameter(
      root.right,
    )

    return {
      height: 1 + Math.max(leftHeight, rightHeight),
      diameter: Math.max(
        leftHeight + rightHeight + 1,
        leftDiameter,
        rightDiameter,
      ),
    }
  }

  return _findTreeDiameter(root).diameter
}

module.exports = {findTreeDiameter, Node}
