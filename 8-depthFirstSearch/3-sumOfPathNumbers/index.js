// Sum of Path Numbers
// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number.
// Find the total sum of all the numbers represented by all paths.

//    1
//   / \
//  2   3
//     / \
//    4   5

// 1 * 10 + 2 = 12

// 12 + 134 + 135 = 281

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function sumPathNumbers(root, curPath = 0, final = {value: 0}) {
  // visit cur node
  const newCurPath = curPath * 10 + root.val

  if (!root.left && !root.right) {
    // it's a leaf node
    final.value = final.value + newCurPath
    return
  }

  for (let child of [root.left, root.right]) {
    if (child) sumPathNumbers(child, newCurPath, final)
  }

  return final.value
}

module.exports = {sumPathNumbers, Node}
