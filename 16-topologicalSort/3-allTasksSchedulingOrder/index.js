// All Tasks Scheduling Orders

// There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, write a method to print all possible ordering of tasks meeting all prerequisites.

// Input: Tasks=4, Prerequisites=[3, 2], [3, 0], [2, 0], [2, 1]
// Output:
// 1) [3, 2, 0, 1]
// 2) [3, 2, 1, 0]

function findAllSchedulingOrders(tasks, prerequisites) {
  // build graph, deps map
  const graph = new Map()
  const incommings = new Map()

  for (let task of Array(tasks).keys()) {
    graph.set(task, [])
    incommings.set(task, 0)
  }

  for (let [source, dest] of prerequisites) {
    graph.get(source).push(dest)
    incommings.set(dest, incommings.get(dest) + 1)
  }

  // build candidates
  const candidates = []
  for (let [task, numOfDeps] of incommings.entries()) {
    if (numOfDeps === 0) candidates.push(task)
  }

  return dfs(graph, incommings, candidates)
}

function dfs(graph, incommings, candidates, cur = [], all = []) {
  // base case
  if (cur.length === graph.size) {
    all.push([...cur])
    return
  }

  for (let task of candidates) {
    cur.push(task)

    const newCandidates = candidates.filter(c => c !== task)

    for (let dest of graph.get(task)) {
      incommings.set(dest, incommings.get(dest) - 1)

      if (incommings.get(dest) === 0) newCandidates.push(dest)
    }

    dfs(graph, incommings, newCandidates, cur, all)

    // backtrack
    cur.pop()

    for (let dest of graph.get(task)) {
      incommings.set(dest, incommings.get(dest) + 1)
    }
  }

  return all
}

module.exports = {findAllSchedulingOrders}
