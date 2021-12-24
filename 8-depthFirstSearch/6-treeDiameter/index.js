class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function findTreeDiameter(root) {
  function _findTreeDiameter(root) {
    if (!root) return {height: 0, diameter: 0}

    const {height: hLeft, diameter: dLeft} = _findTreeDiameter(root.left)
    const {height: hRight, diameter: dRight} = _findTreeDiameter(root.right)

    return {
      height: 1 + Math.max(hLeft, hRight),
      diameter: Math.max(dLeft, dRight, 1 + hLeft + hRight),
    }
  }

  return _findTreeDiameter(root).diameter
}

module.exports = {findTreeDiameter, Node}
