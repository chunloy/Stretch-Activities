const multiplicationTable = function (maxValue) {
  let table = ''; //declare empty string

  /*multiplicand = value to be multiplied
    multiplier = factor for multiplication
  */
 
  for (let multiplier = 1; multiplier <= maxValue; multiplier++) {
    for (let multiplicand = 1; multiplicand <= maxValue; multiplicand++) {
      table += String(multiplicand * multiplier) + ' '; //append the product to the string followed by a space
      if (multiplicand === maxValue) {
        table += '\n'; //add new line to string if last column was reached
      }
    }
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));