class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}
//     null
//      ^
// 1 -> 2 <- 3 <- 4    5  -> null, p=2, q=4
//                ^    $
// prev = 3
// i = 4

function reverse(head, p, q) {
  let i = 1
  let cur = head

  // go to right before sublist
  let prev = null
  while (i < p) {
    prev = cur
    cur = cur.next
    i++
  }

  let rightBeforeSublist = prev

  // reverse from next node

  prev = null
  let nextOfCur = null
  while (i <= q) {
    nextOfCur = cur.next
    cur.next = prev
    prev = cur
    // loop
    cur = nextOfCur
    i++
  }

  let newEndOfSublist = rightBeforeSublist.next
  rightBeforeSublist.next = prev
  newEndOfSublist.next = cur

  return head
}

module.exports = {reverse, Node}
