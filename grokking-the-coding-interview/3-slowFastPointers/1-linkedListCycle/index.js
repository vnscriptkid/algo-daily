class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}
//           @
//           $
// 1 -> 2 -> 9 -> 7
//      ^         |
//      |_________|

//      @
//           $
// 1 -> 2 -> 3 -> null

function hasCycle(head) {
  let slow = head,
    fast = head

  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) return true
  }

  return false
}

module.exports = {Node, hasCycle}
