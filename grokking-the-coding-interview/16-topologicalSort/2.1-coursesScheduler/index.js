// Course Schedule: There are ‘N’ courses, labeled from ‘0’ to ‘N-1’. Each course can have some prerequisite courses which need to be completed before it can be taken. Given the number of courses and a list of prerequisite pairs, find if it is possible for a student to take all the courses.

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
  const graph = new Map()
  const incommings = new Map()
  // build graph of courses using adjacency list using Map { course1: [ course2, course3 ] }
  // build incommings using Map { course: #ofDeps }
  for (let course of Array(numCourses).keys()) {
    // course: 0 -> numCourses - 1
    graph.set(course, [])
    incommings.set(course, 0)
  }

  for (let [dest, src] of prerequisites) {
    graph.get(src).push(dest)
    incommings.set(dest, incommings.get(dest) + 1)
  }

  // initialize sources queue keeping all courses that have no deps
  // init orderings
  const sources = []
  const orderings = []

  for (let [course, numOfDeps] of incommings.entries()) {
    if (numOfDeps === 0) sources.push(course)
  }

  // loop as long as sources is not empty
  while (sources.length) {
    // take one course out of sources queue
    const courseOut = sources.shift()
    // add to orderings
    orderings.push(courseOut)
    // update incommings map at courses that the courseOut is pointing to
    for (let dest of graph.get(courseOut)) {
      incommings.set(dest, incommings.get(dest) - 1)
      // if it reaches 0, put in the queue
      if (incommings.get(dest) === 0) sources.push(dest)
    }
  }

  // return
  return orderings.length === numCourses
}

module.exports = {canFinish}
