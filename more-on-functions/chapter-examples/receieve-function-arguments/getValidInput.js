const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}
// let isValid = function(userInput) {
//   console.log("Invalid input. Try again. ");
//   userInput = input.question[0] === 'a';
// }
let isValid = function(userInput) {
  if (userInput.question[0] === 'a' || 'A') {
    return true;
  }
  return false;
};

console.log(getValidInput('Select a vowel.'))
// TODO 1: write a validator 
// that ensures input starts with "a"

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
