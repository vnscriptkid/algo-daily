import { TreeNode } from "../../shared";

export function hasPath(root: TreeNode<number> | null, targetSum: number): boolean {

    if (!root) return false;

    // leaf node
    if (!root.left && !root.right) {
        return targetSum === root.value;
    }

    return hasPath(root.left, targetSum - root.value) || hasPath(root.right, targetSum - root.value);
}