const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("should produce response that number is less than 5 when number is less than 5", function() {
      let output = checkFive(2);
      expect(output).toBe("2 is less than 5.");
   });

   test("should produce response that number is greater than 5 when number is greater than 5", function() {
    let output = checkFive(7);
    expect(output).toBe("7 is greater than 5.");
   });

   test("should produce response that number is equal to 5 when number is equal to 5.", function() {
    let output = checkFive(5);
    expect(output).toBe("5 is equal to 5.");
   });

});