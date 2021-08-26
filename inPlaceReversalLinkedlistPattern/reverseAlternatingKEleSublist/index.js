class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function reverse(head, k) {
  let cur = head
  let prev = null
  let reversed = true

  while (cur) {
    // init new connections
    let lastOfPrevSublist = prev
    let headOfCurSublist = cur
    // check reversed to decide to reverse current sublist or not
    if (reversed) {
      let i = 0
      while (cur && i < k) {
        const temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
        i++
      }
      // connect the prev sublist
      if (lastOfPrevSublist) {
        lastOfPrevSublist.next = prev
      } else {
        head = prev
      }
      lastOfPrevSublist = headOfCurSublist
      prev = lastOfPrevSublist
      // connect the next sublist
      headOfCurSublist.next = cur
    } else {
      let i = 0
      while (cur && i < k) {
        prev = cur
        cur = cur.next
        i++
      }
      lastOfPrevSublist = prev
    }

    // flip reversed var
    reversed = !reversed
  }
  return head
}

module.exports = {reverse, Node}
