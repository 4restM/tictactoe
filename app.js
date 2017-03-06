const chalk = require('chalk')

console.log(chalk.cyan("Lets Play A Game"))

console.log(chalk.yellow.inverse('here is a reference sheet for board positions'))

console.log(chalk.magenta([7], "|",[8], "|",[9]));
console.log(chalk.magenta([4], "|",[5], "|",[6]));
console.log(chalk.magenta([1],"|",[2],"|",[3]));

console.log(chalk.yellow('Use these positions when adding your token'))

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
console.log(board)

// build toggle piece function

// build check piece function

// build dummy AI to randomly place tickets

// build winning or draw checker function
