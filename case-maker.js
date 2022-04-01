const camelCase = function (input) {
  let characters = input.split(''); //split string into individual characters

  //look for whitespaces and convert the next character to uppercase
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === ' ') {
      characters[i + 1] = characters[i + 1].toUpperCase(); //convert to uppercase
      characters.splice(i,1); //remove whitespace
    }
  }
return characters.join('');
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));