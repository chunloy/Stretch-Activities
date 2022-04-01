const calculateChange = function (total, cash) {
  const dollarNames = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar',
    'oneDollar', 'quarter', 'dime', 'nickel', 'penny',];          //declare array of strings for use with denominations object
  const dollarValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1]; //declare array of integers for denomination object
  const denominations = {}; //declare empty object to store appropriate bills/coins

  let change = cash - total; //calculate remainder from transaction

  for (let i = 0; i < dollarValues.length; i++) {
    if (Math.floor(change / dollarValues[i]) > 0) {
      denominations[dollarNames[i]] = Math.floor(change / dollarValues[i]);
      change %= dollarValues[i]; //update remainder after a denomination was stored
    }
  }
  return denominations;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));