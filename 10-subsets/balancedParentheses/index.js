const Queue = require('collections/deque')

class Paren {
  constructor(content = '', opening = 0, closing = 0) {
    this.content = content
    this.opening = opening
    this.closing = closing
  }
}

function generateBalancedParen(n) {
  const result = []
  const queue = new Queue()

  queue.push(new Paren())

  while (queue.length > 0) {
    const {content, opening, closing} = queue.shift()

    if (content.length === 2 * n) {
      result.push(content)
      continue
    }

    if (opening < n) queue.push(new Paren(content + '(', opening + 1, closing))

    if (opening > closing)
      queue.push(new Paren(content + ')', opening, closing + 1))
  }

  return result
}

module.exports = {generateBalancedParen}
