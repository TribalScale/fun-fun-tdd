const reduce = (collection, fn, initialValue = 0) => {
  let result = initialValue
  for (let i = 0; i < collection.length; i++) {
    result = fn(result, collection[i])
  }
  return result
}

const map = () => {}

module.exports = {
  map,
}
