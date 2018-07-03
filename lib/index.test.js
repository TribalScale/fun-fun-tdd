const { describe, Try } = require('riteway')
const { map, reduce, forEach, filter } = require('./index')

describe('some fns methods', async should => {
  const { assert } = should('Have the following fns...')

  assert({
    given: 'A collection of numbers and a multiply by two function',
    should: 'return every number multiply by 2',
    actual: map([1, 2, 3], number => number * 2),
    // expected: [2, 4, 6],
    expected: [1, 2, 3].map(n => n * 2),
  })

  // expected: [1, 2, 3].map(n => n * 2),

  assert({
    given: 'A collection of numbers and a sum function',
    should: 'return the sum of the elements',
    actual: reduce([1, 2, 3], (accumulator, number) => accumulator + number),
    // expected: 6,
    expected: [1, 2, 3].reduce(
      (accumulator, number) => accumulator + number,
      0,
    ),
  })

  assert({
    given: 'A collection of numbers and a console log fn',
    should: 'return nothing and log every element',
    actual: forEach([1, 2, 3], console.log),
    // XXX: Bad assertion here!
    expected: undefined,
  })

  assert({
    given:
      'A collection of numbers and function that returns true for numbers bigger than one',
    should: 'return a list with the numbers bigger than 1',
    actual: filter([1, 2, 3], number => number > 1),
    // expected: [2, 3],
    expected: [1, 2, 3].filter(number => number > 1),
  })
})
