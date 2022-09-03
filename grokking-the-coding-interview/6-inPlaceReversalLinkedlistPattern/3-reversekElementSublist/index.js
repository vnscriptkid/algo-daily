// Reverse every K-element Sub-list
// Given the head of a LinkedList and a number ‘k’,
// reverse every ‘k’ sized sub-list starting from the head.
// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> null , k = 3

// 1 <- 2 <- 3    4 <- 5 <- 6    7 <- 8

// 3 -> 2 -> 1 -> 6 -> 5 -> 4 -> 8 -> 7 -> null

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}
// x iterate every node
// x group nodes in to sublists of size k and reverse
// remember new tail of prev sub list
// remember new head of cur sub list
// connect sublist

function reverse(head, k) {
  // 1 <- 2 <- 3    4 <- 5 <- 6    7 <- 8
  let prev = null
  let cur = head
  let tailOfPrevSublist = null
  let tailOfCurSublist = null

  while (cur) {
    tailOfCurSublist = cur
    // reverse cur sublist of size k
    let i = 0
    while (cur && i < k) {
      let curNext = cur.next
      cur.next = prev
      // processing before next iteration
      prev = cur
      cur = curNext
      i++
    }

    // prev now is new head of cur sublist
    if (tailOfPrevSublist) {
      tailOfPrevSublist.next = prev
    } else {
      head = prev
    }

    // update tail of prev sublist
    tailOfPrevSublist = tailOfCurSublist
  }

  tailOfCurSublist.next = null

  return head
}

module.exports = {Node, reverse}
