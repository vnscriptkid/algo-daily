// Rotate a LinkedList (medium) #
// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function rotate(head, k) {
  // count num of nodes
  let numOfNodes = 0
  let cur = head
  while (cur) {
    numOfNodes++
    cur = cur.next
  }

  // simplify rotating
  k = k % numOfNodes

  // go to node that is k nodes away from tail
  let fast = head,
    slow = head
  while (fast && k > 0) {
    fast = fast.next
    k--
  }

  // fast is now k nodes away from slow
  let oldTail = null
  let prevOfSlow = null

  while (fast) {
    if (!fast.next) oldTail = fast

    fast = fast.next
    prevOfSlow = slow
    slow = slow.next
  }

  // reassign new head (cur)
  const newHead = slow
  // connect cur tail with cur head
  oldTail.next = head
  // make a new tail (prev)
  prevOfSlow.next = null

  return newHead
}

module.exports = {rotate, Node}
