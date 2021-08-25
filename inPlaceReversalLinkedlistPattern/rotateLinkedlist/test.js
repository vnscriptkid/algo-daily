const {rotate, Node} = require("./index")

test("it works 1", () => {
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

  const result = rotate(node1, 3)

  expect(result).toEqual(node4)
  expect(node4.next).toEqual(node5)
  expect(node5.next).toEqual(node6)
  expect(node6.next).toEqual(node1)
  expect(node1.next).toEqual(node2)
  expect(node2.next).toEqual(node3)
  expect(node3.next).toEqual(null)
})

test("it works 2", () => {
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node4 = new Node(4)
  const node5 = new Node(5)

  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node5

  const result = rotate(node1, 8)

  expect(result).toEqual(node3)
  expect(node3.next).toEqual(node4)
  expect(node4.next).toEqual(node5)
  expect(node5.next).toEqual(node1)
  expect(node1.next).toEqual(node2)
  expect(node2.next).toEqual(null)
})
