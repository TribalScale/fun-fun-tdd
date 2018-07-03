const reduce = (collection, fn, initialValue = 0) => {
  let result = initialValue
  for (let i = 0; i < collection.length; i++) {
    result = fn(result, collection[i])
  }
  return result
}

const map = (collection, fn) =>
  reduce(
    collection,
    (acc, value) => {
      acc.push(fn(value))
      return acc
    },
    [],
  )

// const map = (collection, fn) => {
//   const results = []
//   for (let i = 0; i < collection.length; i++) {
//     results.push(fn(collection[i]))
//   }
//   return results
// }

const forEach = (collection, fn) => {
 return  map(collection, fn)
  // return null
}

const filter = (collection, fn) =>
  reduce(
    collection,
    (acc, element) => (fn(element) ? acc.concat(element) : acc),
    [],
  )

// (acc, element) => {
// if (fn(element)) {
//   acc.push(element)
// }
// return acc
// },

module.exports = {
  map,
  reduce,
  forEach,
  filter,
}
