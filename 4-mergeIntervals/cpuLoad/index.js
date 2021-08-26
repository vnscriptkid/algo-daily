const Heap = require('collections/heap')

function findMaxCpuLoad(jobs) {
  // Input: [ [startTime, endTime, cpuLoad] ]

  // store activeJobs to minHeap (take out first the job that ended earliest)
  const activeJobs = new Heap([], null, (a, b) => b[1] - a[1])

  // sort jobs by start time
  jobs.sort((a, b) => a[0] - b[0])

  // init cpu load to 0
  let cpuLoad = 0
  let maxCpuLoad = 0

  // loop through all jobs
  for (let job of jobs) {
    // take out from heaps the jobs that already ended
    while (activeJobs.length && job[0] >= activeJobs.peek()[1]) {
      const oldJob = activeJobs.pop()
      // update cpu load
      cpuLoad -= oldJob[2]
    }

    // push current job to activeJobs
    activeJobs.push(job)
    // update cpu load
    cpuLoad += job[2]
    // update maxCpu load
    maxCpuLoad = Math.max(maxCpuLoad, cpuLoad)
  }

  // return maxCpuLoad
  return maxCpuLoad
}

module.exports = {findMaxCpuLoad}
