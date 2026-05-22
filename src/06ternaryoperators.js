/**
 * TERNARY OPERATOR (Conditional Expression)
 * 
 * Syntax: condition ? valueIfTrue : valueIfFalse
 * 
 * Characteristics:
 * - Inline conditional operator (one-liner alternative to if-else)
 * - Returns a value (can be assigned to variable)
 * - Evaluates condition and returns appropriate value
 * - Can be nested (but becomes hard to read)
 * 
 * Use-Cases:
 * - Assigning values based on condition: let age = x > 18 ? 'adult' : 'minor'
 * - Rendering UI in templates: user.isActive ? showDashboard() : showLogin()
 * - Validation checks: email.includes('@') ? 'valid' : 'invalid'
 * 
 * Best Practice: Use for simple conditions; use if-else for complex logic
 */

// ? : 

let num = 20;
let bill = num>=15 ? 100 : 200;
console.log(bill);


let age = 20;
let isElgibleFOrVoting = age>=18 ? true : false;
console.log(isElgibleFOrVoting);


