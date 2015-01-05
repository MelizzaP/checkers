var numToChar = ["a", "b", "c", "d", "e", "f", "g", "h"];
var charToNum = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7
}

var displayBoard = function () {
  var column = [0, 1, 2, 3, 4, 5, 6, 7];
  console.log("  | " + column.join("   "));
  console.log("-----------------------------------");
  for (var i = 0; i < board.length; i++) {
    console.log(numToChar[i] + " |" + board[i].join(" "));
  }  
};

var letterToNumber = function (x){
  var position = ['a','b','c','d','e','f','g','h'];
  for (i = 0; i < position.length; i++){
    if (x === position[i]){
     x = i;
    }
  }
  return x;
};


var getMove = function (row1, col1, row2, col2) {
  //create a conditional for user inputting q, adds quit: true to move object
  move = {startRow: row1, startCol: col1, endRow: row2,endCol: col2}; 
  console.log(move);
  row1 = letterToNumber(row1);
  row2 = letterToNumber(row2);
  attemptMove(row1, col1, row2, col2);
  displayBoard();
  console.log(currentPlayer + "'s turn!");
};

var quit = function (){
  console.log('Game quit');
  resetBoard();
}

/* *************** TEST STUFF ******************* */
resetBoard();
displayBoard();
getMove('a',1,'b',1); //invalid
getMove('a',1,'b',0); //invalid
getMove('c',1,'d',0); //valid
getMove('f',0,'e',1); //valid
getMove('d',0,'e',1); //invalid
getMove('c',3,'d',2); //valid
getMove('e',1,'d',2); //valid and capture
quit();





