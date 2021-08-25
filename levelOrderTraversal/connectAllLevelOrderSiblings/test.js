const { connectAllLevelSiblings, Node } = require("./index");

test("it works 1", () => {
  const node1 = new Node(1);
  const node9 = new Node(9);
  const node7 = new Node(7);
  const node5 = new Node(5);
  const node10 = new Node(10);
  const node12 = new Node(12);

  node12.left = node7;
  node12.right = node1;
  node7.left = node9;
  node1.left = node10;
  node1.right = node5;

  let result = connectAllLevelSiblings(node12);
  expect(result).toEqual(node12);

  expect(node12.next).toEqual(node7);
  expect(node7.next).toEqual(node1);
  expect(node1.next).toEqual(node9);
  expect(node9.next).toEqual(node10);
  expect(node10.next).toEqual(node5);
  expect(node5.next).toEqual(null);
});
