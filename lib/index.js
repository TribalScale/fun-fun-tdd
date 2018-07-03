const reduce = (input, reduceFunction) => {
  let acc = 0;
  for (i=0; i< input.length; i++) {
    acc = reduceFunction(acc,input[i]);
  }

  return acc;
}

const map = (arr, timesFunc) => 
  arr.reduce((acc, number) => [...acc, timesFunc(number)], [])


module.exports = {
  map, reduce
}

