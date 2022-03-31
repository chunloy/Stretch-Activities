const merge = function (array1, array2) {

  //merge arrays before sorting
  for (let element of array2) {
    array1.push(element);
  }
  /*
  Need to place a compare function within the sort method to sort numbers
  Current array: [4, 5, 6, 1, 2, 3, 4, 5, 6]
  compare function: xxx.sort((a,b) => a-b)
  This compare function will sort in ascending order
  Note: if a-b = -ve, then a < b
        if a-b = +ve, then a > b
        if a-b = 0, no change
  */

  //begin sorting
  array1.sort((a, b) => a - b);

  return array1;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);