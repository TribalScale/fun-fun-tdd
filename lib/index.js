

// This is an easy map
// const map = (array, fn) => {

//   let result = [];

//   for (i = 0; i < array.length; i++) {
//     let element = fn(array[i]);
//     result.push(element);
//   }

//   return result;
// }

const reduce = (array, fn, initial=0) => {
  let acc = initial;
  for (i = 0; i< array.length; i++) {
    acc = fn(acc, array[i]);
  }
  return acc;
}

// Rewrite map to use reduce -- easy to understand way
const map = (array, fn) => {

  let reduceFunc = (acc, element) => {
    acc.push(fn(element))
    return acc
  }

  return reduce(array, reduceFunc, [])
}

// npm run test:watch | npx faucet cleans up the terminal a bit

// Rewrite map to use reduce -- fancy way
// ... spreads elements in the array
// const map = (array, fn) => {
//   return reduce(
//     array,
//     (acc, element) => [...acc, fn(element)],
//     [])
// }

module.exports = {
  map, reduce
}
