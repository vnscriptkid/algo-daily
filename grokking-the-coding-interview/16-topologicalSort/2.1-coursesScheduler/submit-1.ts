
export function canFinishAllCourses(numOfCourses: number, prerequisites: number[][]) {
    const graph = new Map<number, number[]>();
    const incomings = new Map<number, number>();

    for (let course = 0; course < numOfCourses; course++) {
        graph.set(course, []);
        incomings.set(course, 0);
    }

    for (let [to, from] of prerequisites) {
        graph.get(from)!.push(to);
        incomings.set(to, incomings.get(to)! + 1);
    }

    const sources: number[] = [];
    for (let [course, numOfIncommings] of incomings.entries()) {
        if (numOfIncommings === 0) {
            sources.push(course);
        }
    }

    const ordering: number[] = [];

    while (sources.length) {
        const curCourse = sources.shift()!;

        ordering.push(curCourse);

        for (let dest of graph.get(curCourse)!) {
            incomings.set(dest, incomings.get(dest)! - 1);

            if (incomings.get(dest)! === 0) {
                sources.push(dest);
            }
        }
    }

    return numOfCourses === ordering.length;
}
