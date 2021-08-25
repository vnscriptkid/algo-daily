class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function reverse(head, k) {
  let cur = head
  let prev = null

  while (cur) {
    let oldHeadOfCurSublist = cur
    let endOfPrevSublist = prev

    // reverse cur sublist of k elements
    let i = 0
    while (cur && i < k) {
      const temp = cur.next
      cur.next = prev
      prev = cur
      cur = temp
      i++
    }

    // connect to prev sublist
    if (endOfPrevSublist) {
      // null in case working on the first sublist
      endOfPrevSublist.next = prev
    } else {
      head = prev
    }

    // connect to next sublist
    oldHeadOfCurSublist.next = cur

    prev = oldHeadOfCurSublist
  }
  return head
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)
const node7 = new Node(7)
const node8 = new Node(8)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node8

const result = reverse(node1, 3)

module.exports = {Node, reverse}
