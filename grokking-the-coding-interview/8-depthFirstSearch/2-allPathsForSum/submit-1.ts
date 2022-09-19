import { TreeNode } from "../../shared";

export function findPathsForASum(root: TreeNode<number> | null, sum: number, curPath: number[] = [], allPaths: number[][] = []): number[][] {
    if (!root) {
        return [];
    }

    // visit curNode
    curPath.push(root.value);

    if (!root.left && !root.right) {
        if (sum === root.value) {
            allPaths.push([...curPath]);
        }
        return [];
    }


    for (let child of [root.left, root.right]) {
        if (child) {
            findPathsForASum(child, sum - root.value, curPath, allPaths);
            // backtrack
            curPath.pop();
        }
    }

    return allPaths;
}