// Structurally Unique Binary Search Trees

// Given a number ‘n’, write a function to return all
// structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’?

// n = 3
// 1 2 3
//
//
// 1
//  \
//   2
//    \
//     3

// 1
//  \
//   3
//  /
// 2

// [ treeWithRoot2, treeWithRoot3 ]

//   2
//  / \
// 1   3

//    3
//   /
//  2
// /
//1

//    3
//   /
//  1
//   \
//    2

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function findUniqueBst(n) {
  function _findUniqueBst(start, end) {
    // base case
    if (start > end) return [null]

    if (start === end) return [new Node(start)]

    const trees = []
    // run i from 1 to n
    for (let i = start; i <= end; i++) {
      // with each i, make i as the root node

      // all values from 0 to i - 1 should be put on the left side of root node: findUniqueBst
      // all values from i + 1 to n should be put on the right side of root node
      const leftTrees = _findUniqueBst(start, i - 1) // [null]
      const rightTrees = _findUniqueBst(i + 1, end)

      for (let leftRoot of leftTrees) {
        for (let rightRoot of rightTrees) {
          let node = new Node(i)

          node.left = leftRoot
          node.right = rightRoot

          trees.push(node)
        }
      }

      //    a b c i x y z
    }

    return trees
  }

  return _findUniqueBst(1, n)
}

module.exports = {findUniqueBst, Node}
