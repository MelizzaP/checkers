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

  currentPlayer = 'wht';
  waitingPlayer = 'red';
};


var attemptMove = function (row1, col1, row2, col2) {
  var errors = [];
  if (board[row2][col2] === currentPlayer){
    console.log('invalid move');
    errors.push("You cannot move onto your own pieces.")
  }
  else if (row1 + 1 === row2 && col1 + 1 === col2) {
    if (board[row2][col2] === ' X '){
      console.log('valid move');
      makeMove(row1, col1, row2, col2);
    }
    else if (board[row2][col2] === waitingPlayer){
      if (board[row2 + 1][col2 + 1] === ' X '){
        console.log(currentPlayer + ' captured a checker!');
        removePiece(row2, col2);
        makeMove(row1, col1, row2 + 1, col2 + 1);
      }
      else {
        console.log('invalid move');
        errors.push('You cannot move onto a piece')
      }
    };
  }
  else if (row1 + 1 === row2 && col1 - 1 === col2){
    if (board[row2][col2] === ' X '){
      console.log('valid move');
      makeMove(row1, col1, row2, col2);
    }
    else if (board[row2][col2] === waitingPlayer){
      if (board[row2 + 1][col2 + 1] === ' X '){
        console.log(currentPlayer + ' captured a checker!');
        removePiece(row2, col2);
        makeMove(row1, col1, row2 + 1, col2 - 1);
      }
      else {
        console.log('invalid move');
        errors.push('You cannot move onto a piece')
      }
    };
  }
  else if (row1 - 1 === row2 && col1 - 1 === col2){
    if (board[row2][col2] === ' X '){
      console.log('valid move');
      makeMove(row1, col1, row2, col2);
    }
    else if (board[row2][col2] === waitingPlayer){
      if (board[row2 + 1][col2 + 1] === ' X '){
        console.log(currentPlayer + ' captured a checker!');
        removePiece(row2, col2);
        makeMove(row1, col1, row2 - 1, col2 - 1);
      }
      else {
        errors.push('You cannot move onto a piece')
      }
    };
  }
  else if (row1 - 1 === row2 && col1 + 1 === col2){
    if (board[row2][col2] === ' X '){
      console.log('valid move');
      makeMove(row1, col1, row2, col2);
    }
    else if (board[row2][col2] === waitingPlayer){
      if (board[row2 + 1][col2 + 1] === ' X '){
        console.log(currentPlayer + ' captured a checker!');
        removePiece(row2, col2);
        makeMove(row1, col1, row2 - 1, col2 + 1);
      }
      else {
        console.log('invalid move');
        errors.push('You cannot move onto a piece')
      }
    };
  }
  else {
    console.log('you smokin crack');
    errors.push("That move is not allowed")
  };
  return errors;
};

var makeMove = function (row1, col1, row2, col2){
  if (currentPlayer === 'wht'){
    board[row1][col1] = ' X ';
    board[row2][col2] = 'wht';
    currentPlayer = 'red';
    waitingPlayer = 'wht';
  }
  else if (currentPlayer === 'red') {
    board[row1][col1] = ' X ';
    board[row2][col2] = 'red';
    currentPlayer = 'wht';
    waitingPlayer = 'red';
  }
};

var removePiece = function (row, col){
  board[row][col] = ' X ';
  $(document).trigger('pieceTaken', currentPlayer, waitingPlayer, row, col);
};
