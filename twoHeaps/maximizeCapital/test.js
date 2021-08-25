// Input: Project Capitals=[0,1,2], Project Profits=[1,2,3], Initial Capital=1, Number of Projects=2
// Output: 6

const {maximizeCapital} = require("./index")

test("it works 1", () => {
  const projectCapitals = [0, 1, 2],
    projectProfits = [1, 2, 3],
    myCapital = 1,
    totalProjects = 2
  const result = maximizeCapital(
    projectCapitals,
    projectProfits,
    myCapital,
    totalProjects,
  )
  expect(result).toEqual(6)
})

test("it works 2", () => {
  const projectCapitals = [0, 1, 2, 3],
    projectProfits = [1, 2, 3, 5],
    myCapital = 0,
    totalProjects = 3
  const result = maximizeCapital(
    projectCapitals,
    projectProfits,
    myCapital,
    totalProjects,
  )
  expect(result).toEqual(8)
})
