/**
 * FUNCTION OVERLOADING: Not Supported in JavaScript
 * 
 * The Problem:
 * - JavaScript does NOT support method overloading (unlike Java, C++)
 * - When you define multiple functions with same name
 * - The LATEST definition overwrites all previous ones
 * - Only the last function is available
 * 
 * Why No Overloading:
 * - Functions identified by name, not signature
 * - No type checking at compile time
 * - JavaScript is dynamically typed
 * 
 * Workaround Solutions:
 * 
 * 1. Default Parameters:
 * - function login(username, password, role='admin') { }
 * - Provide default values for optional parameters
 * - WHY: Simulates overloading behavior
 * - WHERE: Test fixtures with defaults
 * 
 * 2. Rest Parameters:
 * - function func(...args) { }
 * - Accept variable number of arguments
 * - Check arguments.length or arr.length
 * 
 * 3. Check Argument Types:
 * - if(typeof param === 'string') { } else { }
 * - Execute different logic based on argument types
 * 
 * 4. Options Object:
 * - function func({ param1, param2 }) { }
 * - Destructure configuration object
 * 
 * Use-Cases in Testing:
 * - Create flexible test helper functions
 * - Build data factories with optional parameters
 * - WHERE: Parameterized tests, data-driven testing
 */

// duplication function can be written but latest will be called.
// make sure never create deplicate function (overloading is not allowed in JS)


function search(){
    console.log("hello search");
}

function search(productName){
    console.log("search hello " , productName);// this will called search hello  undefined
}

function search(productName, price){ // 2 param
    console.log("search hello " , productName, price);// this will called search hello  undefined
}

search("mac" , 100, 300); 

