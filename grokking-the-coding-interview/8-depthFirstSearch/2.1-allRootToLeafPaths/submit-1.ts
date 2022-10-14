import { TreeNode } from "../../shared";

export function allRootToLeafPaths(root: TreeNode<number> | null, curPath: number[] = [], allPath: number[][] = []): number[][] {
    if (!root) {
        return allPath;
    }

    // visit cur node
    curPath.push(root.value);

    if (!root.left && !root.right) {
        allPath.push([...curPath]);
        return allPath;
    }

    // visit left
    if (root?.left) {
        allRootToLeafPaths(root.left, curPath, allPath)
        curPath.pop()
    }

    // visit right
    if (root?.right) {
        allRootToLeafPaths(root.right, curPath, allPath)
        curPath.pop();
    }

    return allPath;
}