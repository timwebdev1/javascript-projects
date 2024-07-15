const rpsTest = require('../RPS.js');

describe("whoWon", function(){
  
  test("should respond that there is a tie when both players choose the same option", function(){
    let output = rpsTest.whoWon('paper', 'paper');
    expect(output).toBe('TIE!');
  });

  test("should respond that player 2 wins when playing paper to player 1's rock", function(){
    let output = rpsTest.whoWon('rock', 'paper');
    expect(output).toBe('Player 2 wins!');
  });

  test("should respond that player 2 wins when playing scissor to player 1's paper", function(){
    let output = rpsTest.whoWon('paper', 'scissors');
    expect(output).toBe('Player 2 wins!');
  });

  test("should respond that player 1 wins when playing paper to player 2's rock", function(){
    let output = rpsTest.whoWon('paper', 'rock');
  });

  test("should respond that player 1 wins when playing scissors to player 2's paper", function(){
    let output = rpsTest.whoWon('scissors', 'paper');
  });

  test("should respond that player 1 winds when playing rock to player 2's scissors", function(){
    let output = rpsTest.whoWon('rock', 'scissors');
  });
})