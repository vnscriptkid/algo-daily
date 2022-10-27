import { canFinishAllCourses } from "./submit-1"

test('it works 1', () => {
    const numCourses = 4,
        prerequisites = [
            [1, 0],
            [2, 0],
            [3, 1],
            [3, 2],
        ] //=> true
    const result = canFinishAllCourses(numCourses, prerequisites)
    expect(result).toEqual(true)
})

test('it works 2', () => {
    const numCourses = 2,
        prerequisites = [
            [1, 0],
            [0, 1],
        ] // => false
    const result = canFinishAllCourses(numCourses, prerequisites)
    expect(result).toEqual(false)
})

test('it works 3', () => {
    const numCourses = 2,
        prerequisites = [[1, 0]] //=> true
    const result = canFinishAllCourses(numCourses, prerequisites)
    expect(result).toEqual(true)
})
