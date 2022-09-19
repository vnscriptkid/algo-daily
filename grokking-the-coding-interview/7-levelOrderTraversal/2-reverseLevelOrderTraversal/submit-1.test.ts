import { TreeNode } from "../../shared";
import { reverseLevelOrderTraversal } from "./submit-1";

test('works', () => {
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    const node6 = new TreeNode(6);
    const node7 = new TreeNode(7);
    const node2 = new TreeNode(2, node4, node5);
    const node3 = new TreeNode(3, node6, node7);
    const node1 = new TreeNode(1, node2, node3);

    const result = reverseLevelOrderTraversal(node1);

    expect(result).toEqual([
        [4, 5, 6, 7],
        [2, 3],
        [1],
    ])
})