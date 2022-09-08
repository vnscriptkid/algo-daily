import { MedianOfStream } from "./submit-1"

test('works', () => {
    const stream = new MedianOfStream()
    stream.insert(3)
    stream.insert(1)
    let medianNow = stream.findMedian() // -> output: 2
    expect(medianNow).toEqual(2)

    stream.insert(5)
    medianNow = stream.findMedian() // -> output: 2
    expect(medianNow).toEqual(3)

    stream.insert(4)
    medianNow = stream.findMedian() // -> output: 2
    expect(medianNow).toEqual(3.5)
})