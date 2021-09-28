// Reverse alternating K-element Sub-list
// Given the head of a LinkedList and a number ‘k’,
// reverse every alternating ‘k’ sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> null, k = 2
// [----]   [     ]   [-----]   [     ]
// [==============]   [===============]
//      ^
// n <- 1 <- 2   3 -> 4 -> 5 -> 6 -> 7 -> 8 -> n
//           p   c

// endOfPrevSublist
// headOfCurSublist
// endOfCurSublist

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function reverse(root, k) {
  let prev = null,
    cur = root

  let endOfCurSublist = null,
    endOfPrevSublist = null

  while (cur) {
    let i = k
    endOfCurSublist = cur
    // 1 -> 2
    // ^
    while (cur && i > 0) {
      let curNext = cur.next
      cur.next = prev
      prev = cur
      cur = curNext
      i--
    }
    // 1 <- 2   3
    //      p   c

    // connect with prev sublist
    if (!endOfPrevSublist) root = prev
    else endOfPrevSublist.next = prev
    // connect with cur sublist
    endOfCurSublist.next = cur

    i = k
    // 2    3 -> 4
    // p    c
    while (cur && i > 0) {
      prev = cur
      cur = cur.next
      i--
    }
    endOfPrevSublist = prev
    // 3 -> 4 -> 5
    //      p    c
  }

  return root
}

module.exports = {Node, reverse}
