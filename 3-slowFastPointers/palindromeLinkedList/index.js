class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function findMiddle(head) {
  let slow = head,
    fast = head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function reverse(node) {
  let curNode = node.next
  let leftNode = node

  while (curNode) {
    let rightNode = curNode.next
    curNode.next = leftNode // reverse
    leftNode = curNode
    curNode = rightNode
  }

  return leftNode
}

function isPalindromic(head) {
  let middle = findMiddle(head)

  let right = reverse(middle)

  let left = head

  while (left !== right) {
    if (left.val !== right.val) return false

    if (left.next === right) break

    left = left.next
    right = right.next
  }

  return true
}

module.exports = {Node, isPalindromic}
