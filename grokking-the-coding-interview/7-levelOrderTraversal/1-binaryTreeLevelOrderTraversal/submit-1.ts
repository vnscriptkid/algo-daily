import { Queue, TreeNode } from "../../shared";

export function traverse(root: TreeNode<number>): number[][] {
    //     1
    //    / \
    //    2  3
    //   /\  /\
    //  4 5  6 7

    // queue: <-[ 4 5 6 7 ]<-
    //            ^

    // levelSize: 2
    // curLevel: []
    // result: []

    // cur: 3

    const queue = new Queue<TreeNode<number>>();

    queue.enqueue(root);

    const result: number[][] = [];

    while (queue.size > 0) {
        let levelSize = queue.size;

        // process all nodes of cur level
        let curLevel: number[] = [];
        while (levelSize > 0) {
            const nodeOut = queue.dequeue()!;
            curLevel.push(nodeOut.value);

            if (nodeOut.left) queue.enqueue(nodeOut.left);
            if (nodeOut.right) queue.enqueue(nodeOut.right);

            levelSize--;
        }

        result.push(curLevel);

    }

    return result;
}