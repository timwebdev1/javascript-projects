// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
let a = 10;
let b = 0;

function divide(numerator, denominator){
  if (denominator === 0) {
    throw Error('Attempted to divide by zero.');
 
  } else {
    return numerator/denominator;
  }
  
}

console.log(divide(a, b));
// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
