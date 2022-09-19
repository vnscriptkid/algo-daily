import { TreeNode } from "../../shared";
import { findPathsForASum } from "./submit-1";

test('works 1', () => {
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    const node2 = new TreeNode(2);
    const node7Leaf = new TreeNode(7);
    const node7 = new TreeNode(7, node4, node5);
    const node9 = new TreeNode(9, node2, node7Leaf);
    const node1 = new TreeNode(1, node7, node9);

    const result = findPathsForASum(node1, 12);
    console.log({ result })
    expect(result).toEqual([[1, 7, 4], [1, 9, 2]]);
})
