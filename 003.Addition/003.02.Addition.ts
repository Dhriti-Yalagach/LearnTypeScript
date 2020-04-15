import * as Readline from 'readline-sync';

( () => {

    let number_1: number;
    let number_2: number;
    
    let sum: number;
    
    number_1 = Readline.questionInt('Enter the 1st number: ');
    number_2 = Readline.questionInt('Enter the 2nd number: ');
    
    sum = number_1 + number_2;
    
    console.log(`The sum of 2 numbers(${number_1} + ${number_2}) is : ${sum}`);
    
})();