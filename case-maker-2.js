const makeCase = function (input, casingType) {
  let characters = input.split(''); //split string for processing
  let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O']; //for use with vowel & consonant cases

  /*
  psuedo-code:
  if (casingType is not an array) {
    ...
    code executes here
    ...
  } else {
    ...
    code executes here
    ...
  }
  */

  if (!Array.isArray(casingType)) {
    switch (casingType) {
      case 'camel':
        for (let i = 0; i < characters.length; i++) {
          if (characters[i] === ' ') {
            characters[i + 1] = characters[i + 1].toUpperCase(); //convert to uppercase
            characters.splice(i, 1); //remove whitespace
          }
        }
        characters = characters.join(''); //convert back to string
        break;
      case 'pascal':
        characters[0] = characters[0].toUpperCase(); //convert first character to uppercase
        for (let i = 0; i < characters.length; i++) {
          if (characters[i] === ' ') {
            characters[i + 1] = characters[i + 1].toUpperCase(); //convert to uppercase
            characters.splice(i, 1); //remove whitespace
          }
        }
        characters = characters.join(''); //convert back to string
        break;
      case 'snake':
        for (let i = 0; i < characters.length; i++) {
          if (characters[i] === ' ') {
            characters.splice(i, 1, '_');//replace whitespace with underscore
          }
        }
        characters = characters.join(''); //convert back to string
        break;
      case 'kebab':
        for (let i = 0; i < characters.length; i++) {
          if (characters[i] === ' ') {
            characters.splice(i, 1, '-'); //replace whitespace with dash
          }
        }
        characters = characters.join(''); //convert back to string
        break;
      case 'title':
        characters[0] = characters[0].toUpperCase();
        //convert first letter of each word to uppercase
        for (let i = 0; i < characters.length; i++) {
          if (characters[i] === ' ') {
            characters[i + 1] = characters[i + 1].toUpperCase();
          }
        }
        characters = characters.join(''); //convert back to string
        break;
      case 'vowel':
        for (let i = 0; i < characters.length; i++) {
          for (let vowel of vowels) {
            if (characters[i] === vowel) {
              characters[i] = characters[i].toUpperCase();
              break;
            }
          }
        }
        characters = characters.join(''); //convert back to string
        break;
      case 'consonant':
        characters = input.toUpperCase();//temporarily re-join and convert to uppercase
        characters = characters.split('');//split the string again

        for (let i = 0; i < characters.length; i++) {
          for (let vowel of vowels) {
            if (characters[i] === vowel) {
              characters[i] = characters[i].toLowerCase();
              break;
            }
          }
        }
        characters = characters.join(''); //convert back to string
        break;
      case 'upper':
        characters = input.toUpperCase();
        break;
      case 'lower':
        characters = input.toLowerCase();
        break;
    }
  } else {
    //use object for processing precedence; only used when casingType is an array
    let priorities = {
      camel: 0,
      pascal: 1,
      snake: 2,
      kebab: 3,
      title: 4,
      vowel: 5,
      consonant: 6,
      upper: 7,
      lower: 8
    }
    //sort array based on precedence
    casingType.sort((a, b) => priorities[a] - priorities[b]);

    for (let casing of casingType) {
      switch (casing) {
        case 'camel':
          for (let i = 0; i < characters.length; i++) {
            if (characters[i] === ' ') {
              characters[i + 1] = characters[i + 1].toUpperCase(); //convert to uppercase
              characters.splice(i, 1); //remove whitespace
            }
          }
          break;
        case 'pascal':
          characters[0] = characters[0].toUpperCase(); //convert first character to uppercase
          for (let i = 0; i < characters.length; i++) {
            if (characters[i] === ' ') {
              characters[i + 1] = characters[i + 1].toUpperCase(); //convert to uppercase
              characters.splice(i, 1); //remove whitespace
            }
          }
          break;
        case 'snake':
          for (let i = 0; i < characters.length; i++) {
            if (characters[i] === ' ') {
              characters.splice(i, 1, '_');//replace whitespace with underscore
            }
          }
          break;
        case 'kebab':
          for (let i = 0; i < characters.length; i++) {
            if (characters[i] === ' ') {
              characters.splice(i, 1, '-'); //replace whitespace with dash
            }
          }
          break;
        case 'title':
          characters[0] = characters[0].toUpperCase();
          //convert first letter of each word to uppercase
          for (let i = 0; i < characters.length; i++) {
            if (characters[i] === ' ') {
              characters[i + 1] = characters[i + 1].toUpperCase();
            }
          }
          break;
        case 'vowel':
          for (let i = 0; i < characters.length; i++) {
            for (let vowel of vowels) {
              if (characters[i] === vowel) {
                characters[i] = characters[i].toUpperCase();
                break;
              }
            }
          }
          break;
        case 'consonant':
          characters = input.toUpperCase();//temporarily re-join and convert to uppercase
          characters = characters.split('');//split the string again

          for (let i = 0; i < characters.length; i++) {
            for (let vowel of vowels) {
              if (characters[i] === vowel) {
                characters[i] = characters[i].toLowerCase();
                break;
              }
            }
          }
          break;
        case 'upper':
          characters = characters.join(''); //temporarily re-join
          characters = characters.toUpperCase();
          characters = characters.split(''); //split again for processing
          break;
        case 'lower':
          characters = characters.join(''); //temporarily re-join
          characters = characters.toLowerCase();
          characters = characters.split(''); //split again for processing
          break;
      }
    }
    characters = characters.join(''); //re-join after all processing is complete
  }
  return characters;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));