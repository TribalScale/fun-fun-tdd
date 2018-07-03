const { describe, Try } = require('riteway')
const { map } = require('./index')

describe('some fns methods', async should => {
  const { assert } = should('Have the following fns...')

  assert({
    given: 'A collection of numbers and a multiply by two function',
    should: 'return every number multiply by 2',
    actual: map([1, 2, 3], number => number * 2),
    expected: [2, 4, 6],
  })
})
