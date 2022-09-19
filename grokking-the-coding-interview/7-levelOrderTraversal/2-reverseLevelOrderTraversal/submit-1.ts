import { Queue, TreeNode } from "../../shared";

export function reverseLevelOrderTraversal(root: TreeNode<number>): number[][] {
    //     1
    //    / \
    //    2  3
    //   /\  /\
    //  4 5  6 7

    // queue:     <- [ ] <-
    // curNode: (7)
    // stack: [ [1] [2,3] [4,5,6,7] ]

    const queue = new Queue<TreeNode<number>>();
    const result: number[][] = [];

    queue.enqueue(root);

    while (queue.size > 0) {
        let levelSize = queue.length;
        const curLevel: number[] = [];

        while (levelSize > 0) {
            // process one level
            const nodeOut = queue.dequeue()!;

            curLevel.push(nodeOut.value);

            if (nodeOut.left) queue.enqueue(nodeOut.left);
            if (nodeOut.right) queue.enqueue(nodeOut.right);

            levelSize--;
        }

        result.unshift(curLevel);
    }

    return result;
}