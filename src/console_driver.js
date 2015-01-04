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
  row1 = letterToNumber(row1);
  row2 = letterToNumber(row2);
  move = {startRow: row1, startCol: col1, endRow: row2,endCol: col2}; 
  console.log(move);
};





