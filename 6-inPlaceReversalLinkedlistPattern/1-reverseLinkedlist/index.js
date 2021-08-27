// Reverse Linkedlist (in-place)
// null<- 1 <-2 <- 3 <- 4    null
//                            ^$

// prev = 3

// null <- 1 <- 2 <- 3 <- 4

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function reverse(head) {
  let prev = null

  let cur = head

  while (cur) {
    let curNext = cur.next
    cur.next = prev
    // move to next node
    prev = cur
    cur = curNext
  }
}

module.exports = {reverse, Node}
