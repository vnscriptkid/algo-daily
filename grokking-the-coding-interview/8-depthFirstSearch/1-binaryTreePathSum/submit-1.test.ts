import { TreeNode } from "../../shared";
import { hasPath } from "./submit-1";

test('works 1', () => {
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    const node6 = new TreeNode(6);
    const node7 = new TreeNode(7);
    const node2 = new TreeNode(2, node4, node5);
    const node3 = new TreeNode(3, node6, node7);
    const node1 = new TreeNode(1, node2, node3);

    expect(hasPath(node1, 10)).toEqual(true);
})

test('works 2', () => {
    const node9 = new TreeNode(9);
    const node10 = new TreeNode(10);
    const node5 = new TreeNode(5);
    const node7 = new TreeNode(7, node9);
    const node1 = new TreeNode(1, node10, node5);
    const node12 = new TreeNode(12, node7, node1);

    expect(hasPath(node12, 23)).toEqual(true);
})

test('works 3', () => {
    const node9 = new TreeNode(9);
    const node10 = new TreeNode(10);
    const node5 = new TreeNode(5);
    const node7 = new TreeNode(7, node9);
    const node1 = new TreeNode(1, node10, node5);
    const node12 = new TreeNode(12, node7, node1);

    expect(hasPath(node12, 16)).toEqual(false);
})