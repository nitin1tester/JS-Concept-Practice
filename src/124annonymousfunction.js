/**
 * ANONYMOUS FUNCTIONS: Functions Without Names
 * 
 * Definition: Function with NO identifier
 * Must use function expression (cannot be standalone)
 * Syntax: let varName = function() { }
 * 
 * Key Differences from Named Functions:
 * 1. No hoisting: Cannot call before definition
 * 2. Must assign to variable or use immediately
 * 3. Called via variable name, not function name
 * 4. Hard to debug (stack traces show variable name)
 * 
 * Hoisting Behavior:
 * - Cannot hoist anonymous functions
 * - Calling before assignment throws: "x is not a function"
 * - let/const have temporal dead zone
 * 
 * Use-Cases:
 * - Callback functions: .then(), .map(), setTimeout()
 * - Event handlers
 * - Array methods
 * - HOF (higher-order functions)
 * 
 * Advantages:
 * - Function identifiers (like "initDriver") available in closure
 * - Can reference itself for recursion (named IIFE)
 * - Better for callbacks (cleaner code)
 * 
 * Testing Use-Cases:
 * - Login page handler: let login = function(browserName) { }
 * - Test utilities assigned to variables
 * - Callbacks for async operations
 * - WHERE: Page objects, test fixtures, utilities
 * 
 * Modern Alternative: Arrow functions (=>) are more concise
 * - let login = (browserName) => { }
 * - Preferred in modern JavaScript
 */

// Annonymous function : function with no name.
// we cannot create Annonymous function without function expression. 
// hoisting is not allowed for Annonymous function  (its allowed only for simple function)
// let can use only let not var
// here function expression name is called indentifier (value,initDriver)

//tried hoisting not allowed with Annonymous function 
// let value = world(); //Cannot access 'world' before initialization

let world =  function(){
    console.log("i am nitin");
    return 10;
}
console.log(world); // [Function: world]
let value = world();
console.log(value);

console.log("=============");

/**
 * 
 * @param {String} browserName 
 */
let initDriver = function( browserName){
    console.log('browser name is ',browserName);
    switch(browserName.trim().toLowerCase()){
        case 'chrome': console.log("launch ", browserName );
         return true;

        case 'firefox' : console.log("launch ", browserName );
         return true;

        case 'safari' : console.log("launch ", browserName );
         return true;

         default: console.log("Pleaae pass right browser ", browserName);
         return false;
    }

}

let isValidBrowser =  initDriver('chrome');
console.log(isValidBrowser);
if (isValidBrowser) {
    console.log("enter user google.com");
}