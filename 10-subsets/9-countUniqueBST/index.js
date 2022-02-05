// Count of Structurally Unique Binary Search Trees

// Given a number ‘n’, write a function to return the count of structurally unique Binary Search Trees (BST)
// that can store values 1 to ‘n’.

// n = 3
// 1  2  3

//    1
//   / \
//  n   2,3

// x * 1

//    1
//   / \
//  n   2,3

//    1
//   / \
//  n   2
//     / \
//    n   3

//    1
//   / \
//  n   3
//      /\
//     2  null

//  2
// /
// 1

function countUniqueBST(num) {
  function _countUniqueBST(start, end) {
    // base case
    if (start >= end) return 1

    let output = 0

    for (let rootVal = start; rootVal <= end; rootVal++) {
      // take rootVal as root
      // take values on the left side of rootVal as leftSubtree: start to rootVal - 1
      const leftCount = _countUniqueBST(start, rootVal - 1)
      // take values on the right side of rootVal as rightSubtree
      const rightCount = _countUniqueBST(rootVal + 1, end)
      // combine
      output += leftCount * rightCount
    }

    return output
  }

  return _countUniqueBST(1, num)
}

module.exports = {countUniqueBST}
