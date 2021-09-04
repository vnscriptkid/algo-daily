// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}
//     null
//      ^
// 1 -> 2    3 -> 4 -> 5 -> null, p=2, q=4
//      p         q
//           ^$
//      2 <- 3 <- 4
// 1 -> 4 -> 3 -> 2 -> 5 -> null

function reverse(head, p, q) {
  // find the node at p
  let curIndex = 1
  let cur = head
  let prev = null

  while (curIndex < p) {
    prev = cur
    cur = cur.next
    curIndex++
  }

  let nodeBeforeSublist = prev
  let oldHeadOfSublist = cur
  // curIndex === p
  // Start reversing from here (p) to q
  prev = null
  while (curIndex <= q) {
    let nextNode = cur.next
    cur.next = prev
    //
    prev = cur
    cur = nextNode
    curIndex++
  }

  // our sublist is reversed now, we are at q + 1 (cur)
  nodeBeforeSublist.next = prev
  oldHeadOfSublist.next = cur

  return head
}

module.exports = {reverse, Node}
