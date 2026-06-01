/**
 * FUNCTION EXPRESSIONS: Functions as Values
 * 
 * Definition: Assigning function to variable
 * Syntax: let varName = function functionName() { }
 * 
 * Key Differences from Function Declarations:
 * 1. No hoisting: Cannot call before definition (unlike regular functions)
 * 2. Function has TWO names:
 *    - varName: Expression identifier (used to call function)
 *    - functionName: Actual function name (used for recursion, debugging)
 * 3. Can use as value: Pass to other functions, store in variables
 * 
 * Named vs Anonymous Function Expression:
 * - Named: let cart = function addToCart() { } - better for debugging
 * - Anonymous: let cart = function() { } - simpler but harder to debug
 * 
 * Calling Function Expression:
 * - Use expression name: cart() works
 * - Use function name: addToCart() throws error (not defined in scope)
 * - Only expression identifier is available outside function
 * 
 * Use-Cases:
 * - WHY: Create functions dynamically, pass as callbacks
 * - WHERE: Event handlers, array methods (map, filter), setTimeout
 * 
 * Use-Cases in Testing:
 * - Create test utilities dynamically
 * - Pass to higher-order functions
 * - Use with Promise.then() callbacks
 * - Create custom assertions
 * 
 * Best Practice:
 * - Use arrow functions (=>) for modern code
 * - Use function expressions for callbacks
 * - Named expressions for better stack traces
 * 
 * 
 * key update notes:- 
 * - using var as well we can't hoist function expression.
 * - now we can't call it by function name if we have function expression.
 * 
 * 
 */


// function expression

let cart = function addToCart(){
    console.log("add to cart");
    return 100;
}
// now we can't call it by function name as we are using function expression if we
//  have function expression then we have to call it but function expression name.
// addToCart(); 

console.log(cart); // [Function: addToCart] >> its a function expression.
console.log(typeof cart); // type >> function

// function expression name :- cart
// actual function name addToCart.

let n = cart();
console.log(n);
// call method using function expression name.
// use case somtime function name is too long so its being used to make a short name.

// addToCart(); 
// //Error when we call method where function expression is already define:- addToCart is not defined.


// with param
let cartAgain = function addToCartAgain(productName){
    console.log("add to cart again");
    return 100;
}
 
let price = cartAgain("iphone");
console.log(price);