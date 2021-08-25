class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function findMiddle(head) {
  let slow = (fast = head)

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

  let right = (last = reverse(middle))

  let left = head

  while (left !== right) {
    if (left.val !== right.val) return false

    if (left.next === right) break

    left = left.next
    right = right.next
  }

  return true
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(2)
const node5 = new Node(1)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

const result = isPalindromic(node1)

module.exports = {Node, isPalindromic}
