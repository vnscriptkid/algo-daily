class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function sumPathNumbers(root, curPath = 0, final = {value: 0}) {
  // visit cur node
  const newPath = curPath * 10 + root.val

  // leaf node ?
  if (!root.left && !root.right) {
    final.value += newPath
    return
  }

  // has child
  for (let child of [root.left, root.right]) {
    if (child) {
      sumPathNumbers(child, newPath, final)
    }
  }

  return final.value
}

module.exports = {sumPathNumbers, Node}
