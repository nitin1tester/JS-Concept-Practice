/**
 * STRING CONCATENATION
 * 
 * Concatenation: Joining multiple strings/values into one string using + operator
 * 
 * Rules:
 * 1. If either operand is a STRING, result is STRING
 * 2. Numbers + Numbers = Addition (10 + 20 = 30)
 * 3. String + Anything = String concatenation ("10" + 20 = "1020")
 * 4. Order matters: 10 + 20 + "x" = "30x" (addition first, then concatenation)
 * 5. "x" + 10 + 20 = "x1020" (all treated as string concatenation)
 * 
 * Modern Alternative: Template Literals (backticks) are preferred for clarity
 */
// concat -- merge -- add 

let a = 10;
let b = 20;
console.log(a+b); // 30
console.log("Nitin " + "Automation"); // Nitin Automation

let x = `here `;
let y = 'I am ';
let z = "now";
console.log(x+y+z); //here I am now
console.log(x+y+a+b);//here I am 1020
console.log(a+b+x); //30here
console.log("this is my code " + a); //this is my code 10



