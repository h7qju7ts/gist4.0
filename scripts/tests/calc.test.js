const addition = require("../calc");

describe("calculator", () => {
    function addition(num1, num2) {
        return num1 + num2;
    }
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
              expect(addition(42, 31)).toBe(73);
        })      
        module.exports = addition;   
    });
     describe("Substraction function", () => {
        
    })
     describe("Multiply function", () => {
        
    })
     describe("Division function", () => {
        
    })
})