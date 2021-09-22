// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi]
// indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

function canFinish(numCourses, prerequisites) {
  // build graph using adjacency list
  // build incommings map: { course: numOfDeps }
  const graph = new Map()
  const incommings = new Map()

  for (let course of Array(numCourses).keys()) {
    graph.set(course, [])
    incommings.set(course, 0)
  }

  for (let [dest, src] of prerequisites) {
    graph.get(src).push(dest)
    incommings.set(dest, incommings.get(dest) + 1)
  }

  // init sources queue, storing course which has no deps
  const sources = []
  const ordering = []

  for (let [course, numOfDeps] of incommings.entries()) {
    if (numOfDeps === 0) sources.push(course)
  }

  // loop as long as queue is not empty
  while (sources.length > 0) {
    // take one course out
    const courseOut = sources.shift()
    // put in the ordering
    ordering.push(courseOut)
    // update courses that depends on the course out
    for (let dest of graph.get(courseOut)) {
      incommings.set(dest, incommings.get(dest) - 1)

      // if deps reach 0, add to queue
      if (incommings.get(dest) === 0) sources.push(dest)
    }
  }

  return ordering.length === numCourses
}

module.exports = {canFinish}
