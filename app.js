const chalk = require('chalk')

console.log(chalk.cyan("Lets Play A Game"))

// console.log(chalk.yellow.inverse('here is a reference sheet for board positions'))

//flesh this out more
// console.log(chalk.magenta([7], "|",[8], "|",[9]));
// console.log(chalk.magenta([4], "|",[5], "|",[6]));
// console.log(chalk.magenta([1],"|",[2],"|",[3]));

// console.log(chalk.yellow('Use these positions when adding your token'))

// build game board function
const board = [];
const createBoard = () => {
  for(let i = 0; i < 3; i ++){
    board.push([]);
    for(let j = 0; j < 3; j++){
      board[i].push('-')
    }
  }
}
createBoard();

// build Render Board Function

const renderBoard = () => {
  board.forEach(item => console.log(chalk.magenta(item)))
}
renderBoard();
// build toggle player piece function
  //get piece Position then check if position is occupied 
    // if not then place a X there
  //render board  
  //check if winner
    // if not invoke dummy AI

// build toggle AI piece function
  //get piece Position through Math.random() 
  //then check if position is occupied 
    // if not then place a X there
  //render board
  //check if winner

// build check piece function
  //recursively check on its self

// build winning or draw checker function
  //If 3 O in a row, col, diag then player won
  //if 3 X in a row, col, diag then AI won
  //reset board
