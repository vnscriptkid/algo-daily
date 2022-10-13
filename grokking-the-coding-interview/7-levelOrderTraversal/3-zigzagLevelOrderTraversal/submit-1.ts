import { Queue, TreeNode } from "../../shared";

export function zigzag(head: TreeNode<number>): number[][] {
    const queue = new Queue<TreeNode<number>>();

    queue.enqueue(head);

    let leftToRight = true;

    const result: number[][] = [];

    while (queue.size) {
        // process one level
        let levelCount = queue.length;
        const curLevel: number[] = [];

        while (levelCount > 0) {
            levelCount--;

            const nodeOut = queue.dequeue()!;

            if (leftToRight) {
                curLevel.push(nodeOut.value);
            } else {
                curLevel.unshift(nodeOut.value);
            }

            if (nodeOut.left) {
                queue.enqueue(nodeOut.left);
            }

            if (nodeOut.right) {
                queue.enqueue(nodeOut.right);
            }
        }

        result.push(curLevel);

        leftToRight = !leftToRight;
    }

    return result;
}