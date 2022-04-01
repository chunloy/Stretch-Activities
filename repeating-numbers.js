const repeatNumbers = function (data) {
  let repeatedNumber = ''; //declare repeatedNumber as empty string
  let repeatedArray = []; //declare repeatedArray as empty array

  switch (data.length) {
    //if data.length = 1, return a single repeated value
    case 1: 
      for (let i = 0; i < data[0][1]; i++) {
        repeatedNumber += String(data[0][0]);
      }
      return repeatedNumber;
      
    //if data.length > 1, return a set of repeated values separated by commas
    default: 
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i][1]; j++) {
          repeatedNumber += String(data[i][0]);
        }
        repeatedArray.push(repeatedNumber); //fill array with repeated values
        repeatedNumber = ''; //reset before next iteration of outer for loop
      }
      return repeatedArray.join(', ');
  }
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));