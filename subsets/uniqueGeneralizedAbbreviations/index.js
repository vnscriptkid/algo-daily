const Queue = require("collections/deque")

class Abbreviation {
  constructor(str = "", start = 0, count = 0) {
    this.str = str
    this.start = start
    this.count = count
  }
}

function generateAbbreviations(word) {
  const queue = new Queue()
  queue.push(new Abbreviation("", 0, 0))
  const result = []

  while (queue.length > 0) {
    let {str, start, count} = queue.shift()

    if (start === word.length) {
      if (count > 0) str += count
      result.push(str)
      continue
    }

    queue.push(new Abbreviation(str, start + 1, count + 1))

    if (count > 0) str += count

    str += word.charAt(start)

    queue.push(new Abbreviation(str, start + 1, 0))
  }

  return result
}

const word = "BAT"
const result = generateAbbreviations(word)

module.exports = {generateAbbreviations}
