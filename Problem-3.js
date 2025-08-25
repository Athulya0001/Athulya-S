// If a is odd, print first a odd numbers
// If a is even, print first (a-1) odd numbers

const oddSeries = (a) => {
    let limit = a%2===0?a-1:a
  let result = [];
  for (let i = 0; i < limit; i++) {
    result.push(2 * i + 1);
  }
  return result;
};

console.log(oddSeries(5));
