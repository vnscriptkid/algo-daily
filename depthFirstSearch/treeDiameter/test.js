const {findTreeDiameter, Node} = require("./index")

test("it works 1", () => {
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node4 = new Node(4)
  const node5 = new Node(5)
  const node6 = new Node(6)

  node1.left = node2
  node1.right = node3
  node2.left = node4
  node3.left = node5
  node3.right = node6

  const result = findTreeDiameter(node1)
  expect(result).toEqual(5)
})

test("it works 2", () => {
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node5 = new Node(5)
  const node6 = new Node(6)
  const node7 = new Node(7)
  const node8 = new Node(8)
  const node9 = new Node(9)
  const node10 = new Node(10)
  const node11 = new Node(11)

  node1.left = node2
  node1.right = node3
  node3.left = node5
  node3.right = node6
  node5.left = node7
  node5.right = node8
  node8.right = node10
  node6.right = node9
  node9.right = node11

  const result = findTreeDiameter(node1)
  expect(result).toEqual(7)
})
