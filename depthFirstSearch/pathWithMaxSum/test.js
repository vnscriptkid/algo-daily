const {maxSumPath, Node} = require("./index")

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

  const result = maxSumPath(node1)
  expect(result).toEqual(16)
})

test("it works 2", () => {
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const anotherNode3 = new Node(3)
  const anotherNode1 = new Node(1)
  const node5 = new Node(5)
  const node6 = new Node(6)
  const node7 = new Node(7)
  const node8 = new Node(8)
  const node9 = new Node(9)

  node1.left = node2
  node1.right = node3
  node2.left = anotherNode1
  node2.right = anotherNode3
  node3.left = node5
  node3.right = node6
  node5.left = node7
  node5.right = node8
  node3.right = node6
  node6.right = node9

  const result = maxSumPath(node1)
  expect(result).toEqual(31)
})

// TODO
// test("it works 3", () => {
//   const nodeMinus1 = new Node(-1);
//   const nodeMinus3 = new Node(-3);

//   nodeMinus1.left = nodeMinus3;

//   const result = maxSumPath(nodeMinus1);
//   expect(result).toEqual(-1);
// });
