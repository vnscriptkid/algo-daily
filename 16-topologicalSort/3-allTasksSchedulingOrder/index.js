function findAllSchedulingOrders(tasks, prerequisites) {
  // build graph of deps
  // build incommings
  const graph = new Map()
  const incommings = new Map()

  for (let task of Array(tasks).keys()) {
    graph.set(task, [])
    incommings.set(task, 0)
  }

  for (let [src, dest] of prerequisites) {
    graph.get(src).push(dest)
    incommings.set(dest, incommings.get(dest) + 1)
  }

  const sources = []

  for (let [task, numOfDeps] of incommings.entries()) {
    if (numOfDeps === 0) sources.push(task)
  }

  return dfs(sources, graph, incommings)
}

function dfs(sources, graph, incommings, cur = [], all = []) {
  if (graph.size === cur.length) {
    all.push([...cur])
    return
  }

  for (let task of sources) {
    cur.push(task)

    const newSources = sources.filter(curTask => curTask !== task)

    // update incommings
    for (let dest of graph.get(task)) {
      incommings.set(dest, incommings.get(dest) - 1)

      if (incommings.get(dest) === 0) newSources.push(dest)
    }

    dfs(newSources, graph, incommings, cur, all)

    // backtrack
    cur.pop()

    for (let dest of graph.get(task)) {
      incommings.set(dest, incommings.get(dest) + 1)
    }
  }

  return all
}

module.exports = {findAllSchedulingOrders}
