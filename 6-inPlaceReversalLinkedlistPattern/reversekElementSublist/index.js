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

module.exports = {Node, reverse}
