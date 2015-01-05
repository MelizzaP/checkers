var board, currentPlayer;

var resetBoard = function () {
  board = [
    [' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht'],
    ['wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X '],
    [' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht'],
    [' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X '],
    [' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X '],
    ['red', ' X ', 'red', ' X ', 'red', ' X ', 'red', ' X '],
    [' X ', 'red', ' X ', 'red', ' X ', 'red', ' X ', 'red'],
    ['red', ' X ', 'red', ' X ', 'red', ' X ', 'red', ' X ']
  ];

  currentPlayer = 'wht'
};


var attemptMove = function (row1, col1, row2, col2) {
  if (row1 +1 === row2 && col1 + 1 === col2){
    console.log('valid move');
  }
  else if (row1 + 1 === row2 && col1 - 1 === col2){
    console.log('valid move');
  }
  else if (row1 - 1 === row2 && col1 - 1 === col2){
    console.log('valid move');
  }
  else if (row1 - 1 === row2 && col1 + 1 === col2){
    console.log('valid move');
  }
  else {
    console.log('invalid move');
  };
};

var makeMove = function (row1, col1, row2, col2){
  
};

var removePiece = function (row, col){
  
};
