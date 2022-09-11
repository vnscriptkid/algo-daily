import { Queue } from "../../shared";

export function topoSort(vertices: number, edges: number[][]): number[] {
    // build graph
    // build incommings count map

    const graph = new Map();
    const incommings = new Map();

    for (let vertex = 0; vertex < vertices; vertex++) {
        graph.set(vertex, []);
        incommings.set(vertex, 0);
    }

    for (const [fromVertex, toVertex] of edges) {
        graph.get(fromVertex)!.push(toVertex);
        incommings.set(toVertex, incommings.get(toVertex)! + 1);
    }

    // find vertex with no incomming
    const sources = new Queue<number>();
    for (let [vertex, numOfIncommings] of incommings.entries()) {
        if (numOfIncommings === 0) {
            sources.enqueue(vertex);
        }
    }

    const ordering: number[] = [];

    while (sources.size) {
        const nextVertex = sources.dequeue()!;

        ordering.push(nextVertex);

        // update incomming
        for (let dest of graph.get(nextVertex)!) {
            incommings.set(dest, incommings.get(dest) - 1);

            if (incommings.get(dest) === 0) {
                sources.enqueue(dest);
            }
        }
    }

    return ordering;
}