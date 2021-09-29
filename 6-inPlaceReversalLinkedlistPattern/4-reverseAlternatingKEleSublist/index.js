// Reverse alternating K-element Sub-list
// Given the head of a LinkedList and a number ‘k’,
// reverse every alternating ‘k’ sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> null, k = 2
// [    ]              [    ]
// 2 -> 1 -> 3 -> 4 -> 6 -> 5 -> 7 -> 8 -> null

// newTailOfPrevSublist

// 2 -> 1 -> 3 -> 4 -> 6 -> 5 -> 7 -> 8 -> null

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function reverse(root, k) {
  let cur = root,
    prev = null
  let tailOfPrevSublist = null

  while (cur) {
    // process k * 2 nodes

    // process sublist to reverse
    let tailOfCurSublist = cur
    let i = k
    while (i > 0 && cur) {
      // reversing logic
      let curNext = cur.next
      cur.next = prev
      prev = cur
      cur = curNext
      i--
    }

    // connect prev sublist with cur sublist
    if (!tailOfPrevSublist) root = prev
    else tailOfPrevSublist.next = prev

    // connect cur sublist with next sublist
    tailOfCurSublist.next = cur

    // skip next sublist of size k
    i = k
    while (i > 0 && cur) {
      // move forward
      prev = cur
      cur = cur.next
      i--
    }

    tailOfPrevSublist = prev
  }

  return root
}

module.exports = {Node, reverse}
