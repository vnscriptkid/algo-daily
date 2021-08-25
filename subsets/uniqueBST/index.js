class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function _countUniqueBST(start, end) {
  // base case
  if (start === end) return [new Node(start)];
  if (start > end) return [null];
  const trees = [];

  // loop from start to end
  for (let i = start; i <= end; i++) {
    // choose one as root node
    // build trees with left nodes
    leftTrees = _countUniqueBST(start, i - 1);

    // build trees with right nodes
    rightTrees = _countUniqueBST(i + 1, end);

    // combine root, left trees and right trees
    for (let leftRoot of leftTrees) {
      for (let rightRoot of rightTrees) {
        const root = new Node(i);
        root.left = leftRoot;
        root.right = rightRoot;
        trees.push(root);
      }
    }
  }
  // return result
  return trees;
}

function countUniqueBST(n) {
  return _countUniqueBST(1, n).length;
}

module.exports = { countUniqueBST };
