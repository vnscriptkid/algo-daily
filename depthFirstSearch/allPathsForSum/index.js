class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function _findAllPathsSum(root, sum, allPath = [], curPath = []) {
  if (!root) return;

  curPath.push(root.val);

  if (!root.left && !root.right) {
    // leaf node
    if (root.val === sum) {
      allPath.push([...curPath]);
    }
    return;
  }

  for (let nextNode of [root.left, root.right]) {
    if (nextNode) {
      _findAllPathsSum(nextNode, sum - root.val, allPath, curPath);
      curPath.pop();
    }
  }
}

function findAllPathsSum(root, sum) {
  const allPath = [];
  _findAllPathsSum(root, sum, allPath);
  return allPath;
}

module.exports = { findAllPathsSum, Node };
