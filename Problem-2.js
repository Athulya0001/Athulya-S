// Generating first a odd numbers.

const oddSeries = (a) => {
  let result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

console.log(oddSeries(4));
