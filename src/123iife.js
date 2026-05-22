/**
 * IIFE: Immediately Invoked Function Expression
 * 
 * Syntax: (function() { })();
 * - Function declaration wrapped in parentheses
 * - Immediately called with () at end
 * - Executes as soon as code is parsed
 * 
 * Key Characteristics:
 * - Function has NO NAME (anonymous)
 * - Function has NO IDENTIFIER (cannot call again)
 * - Executes once automatically
 * - Creates own scope (encapsulation)
 * 
 * With Parameters:
 * - (function(param) { })(value);
 * - Pass arguments in second parentheses
 * - WHY: Pass external values into isolated scope
 * 
 * Cannot Store as Variable:
 * - let x = (function() { })(); stores RETURN value, not function
 * - Calling x() throws "x is not a function"
 * - Result is undefined (no return statement)
 * 
 * WHY Use IIFE:
 * - Avoid global scope pollution
 * - Create private variables (scope isolation)
 * - Execute initialization code once
 * - Prevent naming conflicts
 * 
 * Use-Cases in Testing:
 * - Initialize test environment (setup fixture)
 * - Create private test utilities
 * - Encapsulate test data (avoid global test vars)
 * - Execute async setup logic immediately
 * - WHERE: Test initialization, data factories
 * 
 * Modern Alternative:
 * - Modules (import/export) are preferred now
 * - Classes for better organization
 * - But IIFE still useful for simple tasks
 */

// IIFE function: Immediate Invoke Function Expression(IIFE)
//  (function(){"logic here"})();   function has no name. its called Annonymous function
(function(){
    console.log("hello world");
})();


// not allowed function expression
// let rest = (function(){
//     console.log("hello world");
// })();
// rest(); // rest is not a function at Object.<anonmous>
 

// we can supply parameter to function 
(function(browserName){
    console.log("browser name ", browserName);
})("firefox");

(function(){
    console.log("I am in middle of the program");
})();


(
    function(){
        console.log("Bye");
    }
)();