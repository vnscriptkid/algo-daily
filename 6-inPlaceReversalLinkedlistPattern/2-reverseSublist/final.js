class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function reverse(head, p, q) {
  let cur = head
  let i = 1
  let prev = null
  while (i < p) {
    prev = cur
    cur = cur.next
    i++
  }

  const oldHead = cur

  // cur is now at p, reverse from here
  while (cur && i <= q) {
    let temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
    i++
  }

  // cur is now at q

  // fix 2 ends
  const left = oldHead.next
  oldHead.next = cur
  left.next = prev

  return head
}

module.exports = {reverse, Node}
