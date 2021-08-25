const { hasPathSumTo, Node } = require("./index");

test("it works 1", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const node6 = new Node(6);
  const node7 = new Node(7);

  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.left = node6;
  node3.right = node7;

  const result = hasPathSumTo(node1, 10);
  expect(result).toEqual(true);
});

test("it works 2", () => {
  const node1 = new Node(1);
  const node5 = new Node(5);
  const node7 = new Node(7);
  const node9 = new Node(9);
  const node10 = new Node(10);
  const node12 = new Node(12);

  node12.left = node7;
  node12.right = node1;
  node7.left = node9;
  node1.left = node10;
  node1.right = node5;

  const result = hasPathSumTo(node12, 23);
  expect(result).toEqual(true);
});

test("it works 3", () => {
  const node1 = new Node(1);
  const node5 = new Node(5);
  const node7 = new Node(7);
  const node9 = new Node(9);
  const node10 = new Node(10);
  const node12 = new Node(12);

  node12.left = node7;
  node12.right = node1;
  node7.left = node9;
  node1.left = node10;
  node1.right = node5;

  const result = hasPathSumTo(node12, 16);
  expect(result).toEqual(false);
});
