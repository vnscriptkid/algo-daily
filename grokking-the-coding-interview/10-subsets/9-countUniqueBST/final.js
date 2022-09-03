// Structurally Unique Binary Search Trees

// Given a number ‘n’, write a function to return all
// structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’?

function countUniqueBST(n) {
  function _countUniqueBST(start, end) {
    if (start >= end) return 1

    let count = 0
    for (let i = start; i <= end; i++) {
      let countLeft = _countUniqueBST(start, i - 1)
      let countRight = _countUniqueBST(i + 1, end)
      count += countLeft * countRight
    }
    return count
  }

  return _countUniqueBST(1, n)
}

module.exports = {countUniqueBST}
