export function isSchedulingPossible(numOfTasks: number, prerequisites: number[][]) {
    const graph = new Map<number, number[]>();
    const incommings = new Map<number, number>();

    // init graph, incommings
    for (let task = 0; task < numOfTasks; task++) {
        graph.set(task, []);
        incommings.set(task, 0);
    }

    // build graph, incommings
    for (let [prevTask, nextTask] of prerequisites) {
        graph.get(prevTask)?.push(nextTask);
        incommings.set(nextTask, incommings.get(nextTask)! + 1);
    }

    // find sources
    const sources: number[] = [];
    for (let [task, numOfPrerequisites] of incommings.entries()) {
        if (numOfPrerequisites === 0) {
            sources.push(task);
        }
    }

    const orderings: number[] = [];

    // process sources queue until out of eles
    while (sources.length) {
        const nextTask = sources.shift()!;

        orderings.push(nextTask);

        // update incommings of tasks that depend on this task
        for (let destTask of graph.get(nextTask)!) {
            incommings.set(destTask, incommings.get(destTask)! - 1);

            if (incommings.get(destTask)! === 0) {
                sources.push(destTask);
            }
        }
    }

    return orderings.length === numOfTasks;
}