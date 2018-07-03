const { describe, Try } = require('riteway')
const { map, reduce } = require('./index')

describe('map function', async should => {
  const { assert } = should('work')

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
})

describe('reduce function', async should => {
  const { assert } = should('work')

  // acc -- accumulator
  assert({
    given: 'A collection of numbers and a sum function',
    should: 'return the sum of all the numbers',
    actual: reduce([1, 2, 3], (acc, number) => acc + number),
    expected: 6, // 1 + 2 + 3
  })

  assert({
    given: 'A collection of numbers and a sum function',
    should: 'return the sum of all the numbers',
    actual: reduce([4, 6, 1], (acc, number) => acc + number),
    expected: 11,
  })

})