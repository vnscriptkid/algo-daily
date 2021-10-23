// Rotate a LinkedList (medium) #
// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

// 1 -> 2 -> 3 -> 4 -> 5 -> null, k = 7 same as 2, k = 12 same as 2 => k % numOfNodes = k

// total of 5 nodes
// 5 - 2 = 3 => skip 3 nodes
// go to node 4, make 4 the new head of the linkedlist
// go to node 5, connect 5 with current head
// make new tail for new linkedlist (node right before sublist)

// first node: 5 -> 1 -> 2 -> 3 -> 4 -> null

// second node: 4 -> 5 -> 1 -> 2 -> 3 -> null

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function rotate(head, k) {
  // count the nodes
  let numOfNodes = 0
  let cur = head
  let oldTail = null
  while (cur) {
    if (!cur.next) oldTail = cur
    numOfNodes++
    cur = cur.next
  }

  // simplify k
  k = k % numOfNodes

  // nodes to skip
  let nodesToSkip = numOfNodes - k - 1

  // go to new tail
  cur = head
  while (nodesToSkip > 0) {
    cur = cur.next
    nodesToSkip--
  }

  // cur now is the new tail of linkedlist
  const newHead = cur.next

  // make new tail
  cur.next = null

  // connect sublist with oldHead
  oldTail.next = head

  return newHead
}

module.exports = {rotate, Node}
