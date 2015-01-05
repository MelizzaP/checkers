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

var play = function (){
  console.log("Let's play some checkers!");
  resetBoard();
  var winner = 'no one';
  var turnCount = 0;
  while (winner === 'no one'){
    var move = getMove();
    errors = attemptMove(move.row1, move.col1, move.row2, move.col2);
    if (errors.length > 0){
      $(document).trigger('invalidMove', errors);
    }
    else {
      turnCount += 1; 
      $(document).trigger('boardChange');
      $(document).trigger('turns', turnCount);      
    }
    var winnerCheck = [];
    winnerCheck = winnerCheck.concat.apply(winnerCheck, board)
    if (winnerCheck.indexOf('red') < 0 ){
      winner = 'wht'
    }
    if (winnerCheck.indexOf('wht') < 0){
      winner = 'red'
    }
  }
};

$(document).on('boardChange', function(e) {
  displayBoard();
});

$(document).on('turns', function(e, turnCount) {
  console.log('Turns: ' + turnCount);
});

$(document).on('pieceTaken', function(e, currentPlayer){
  console.log(currentPlayer + " captured a checker!");
});

$(document).on('invalidMove', function(e, errors) {
  console.log('Invalid move');
  console.log(errors);
});


var getMove = function () {
  //create a conditional for user inputting q, adds quit: true to move object
  console.log(currentPlayer + ', please make a move');
  var startRow = letterToNumber(prompt("Starting Row"));
  var startCol = parseInt(prompt("Starting Column"));
  var endRow = letterToNumber(prompt("Ending Row"));
  var endCol = parseInt(prompt("Ending Column"));
  var move = {row1: startRow, col1: startCol, row2: endRow, col2: endCol}
  console.log(move);
  return move;
};

/* *************** TEST STUFF ******************* */
/*
play()
getMove('a',1,'b',1); //invalid
getMove('a',1,'b',0); //invalid
getMove('c',1,'d',0); //valid
getMove('f',0,'e',1); //valid
getMove('d',0,'e',1); //invalid
getMove('c',3,'d',2); //valid
getMove('e',1,'d',2); //valid and capture
quit();
*/





