const squareCode = function (message) {
  message = message.replace(/ /g, ''); //find and delete any spaces
  message = message.split(''); //split the string into characters

  let columns = Math.ceil(Math.sqrt(message.length)); //calculate columns needed
  let encodedMessage = []; //store characters in this array

  for (let i = 0; i < columns; i++) {
    encodedMessage.push(message[i]); //store the ith element in the array
    for (let j = i + columns; j <= (message.length - 1); j += columns) {
      encodedMessage.push(message[j]); //store the jth elements in the array j = i + columns
    }
    encodedMessage.push(' '); //add a space after inner for loop
  }
  encodedMessage.pop(); //delete last space after encoding

  return encodedMessage.join(''); //return a single string
  }

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));