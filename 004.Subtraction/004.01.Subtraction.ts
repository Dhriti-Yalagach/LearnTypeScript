import * as Readline from 'readline-sync';
import * as Chalk from 'chalk';

( () => {
    let number_1: number = Readline.questionInt(Chalk.blue('Enter the 1st number: '));
    let number_2: number = Readline.questionInt(Chalk.blue('Enter the 2nd number: '));
    
    let difference: number = number_1 - number_2; // Subtraction: -, Multiplication: *, Division: /
    
    console.log(Chalk.green(`The difference of 2 numbers(${number_1} - ${number_2}) is : ${difference}`));
})();