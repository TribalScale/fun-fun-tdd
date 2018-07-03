const { describe, Try } = require('riteway')
const { map, reduce } = require('./index')

describe('some fns methods', async should => {
  const { assert } = should('Have the following fns...')

  assert({
    given: 'A collection of numbers and a multiply by two function',
    should: 'return every number multiply by 2',
    actual: map([1, 2, 3], number => number * 2),
    expected: [2, 4, 6],
  })

  assert({
    given: 'A collection of numbers and a multiply by two function',
    should: 'return every number multiply by 2',
    actual: map([2, 3, 4], number => number * 2),
    expected: [4, 6, 8],
  })

  assert({
    given: 'A collection of numbers and a multiply by two function',
    should: 'return every number multiply by 4',
    actual: map([2, 3, 4], number => number * 4),
    expected: [8, 12, 16],
  })


  assert({
    given: 'A collection of numbers and a reduce function to get a value',
    should: 'return a summed value number',
    actual: reduce([1, 2, 3], (acc, number) => acc + number),
    expected: 6,
  })

})
