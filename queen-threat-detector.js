const generateBoard = function (whiteQueen, blackQueen) {
  //Create an array filled with zeros
  //map each element in that array with another array filled with zeros
  let board = new Array(8).fill(0).map(() => new Array(8).fill(0));

  //insert coordinates for each queen
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;

  return board;
}

const queenThreat = function (board) {
  let firstQueen = []; //empty array to store coordinates of first queen found
  let attack = false; //assume queens can't attack each other

  //find the coordinates of first queen starting from top left corner (0,0)
  for (let i = 0; i < 8; i++) {
    if (board[i].indexOf(1) >= 0) {
      firstQueen[0] = i;
      firstQueen[1] = board[i].indexOf(1);
      break;
    }
  }

  //check horizontal in +ve direction for other queen
  for (let i = firstQueen[1] + 1; i < 8; i++) {
    if (board[firstQueen[0]][i] === 1) {
      attack = true;
      return attack; 
    }
  }

  //check vertical in +ve direction for other queen
  for (let i = firstQueen[0] + 1; i < 8; i++) {
    if (board[i][firstQueen[1]] === 1) {
      attack = true;
      return attack;
    }
  }

  //copy coordinates of first queen found
  let temp1 = firstQueen[0];
  let temp2 = firstQueen[1];

  //check bottom right diagonal for other queen
  while ((temp1 < 7) && (temp2 < 7)) {
    temp1 += 1;
    temp2 += 1;
    if (board[temp1][temp2] === 1) {
      attack = true;
      return attack;
    }
  }

  //reset coordinates
  temp1 = firstQueen[0];
  temp2 = firstQueen[1];

  //check bottom left diagonal for other queen
  while ((temp1 < 7) && (temp2 > 0)) {
    temp1 += 1;
    temp2 -= 1;
    if (board[temp1][temp2] === 1) {
      attack = true;
      return attack;
    }
  }
  return attack;
}

let whiteQueen = [0,7];
let blackQueen = [1, 3];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));