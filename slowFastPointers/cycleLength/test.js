const {cycleLength, Node} = require("./index")

test("it works 1", () => {
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node4 = new Node(4)
  const node5 = new Node(5)

  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node5
  node5.next = node3

  const result = cycleLength(node1)
  expect(result).toEqual(3)
})

test("it works 2", () => {
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node4 = new Node(4)
  const node5 = new Node(5)
  const node6 = new Node(6)

  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node5
  node5.next = node6
  node6.next = node2

  const result = cycleLength(node1)
  expect(result).toEqual(5)
})
