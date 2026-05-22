/**
 * FUNCTION CHAINING & RECURSION
 * 
 * Function Chaining:
 * - One function calls another, which calls another
 * - Creates call stack: login() → search() → addToCart()
 * - Each function must complete before next starts
 * 
 * Call Stack:
 * - Stack trace shows execution order
 * - Useful for debugging
 * - Deep chains harder to debug
 * 
 * Recursion: Function calling itself
 * - Function calls itself with different parameters
 * - MUST HAVE: Base case (exit condition)
 * - Without base case: Stack overflow (Maximum call stack exceeded)
 * - WHY: Solve problems with repetitive structure
 * - WHERE: Tree traversal, factorial, fibonacci, file system recursion
 * 
 * Common Error:
 * - RangeError: Maximum call stack size exceeded
 * - Means: Infinite recursion, stack memory exhausted
 * - Caused by: Missing base case or infinite loop
 * 
 * Example Recursive Use-Cases:
 * - Calculate factorial: factorial(5) = 5 * factorial(4)
 * - Navigate nested object/array structures
 * - DOM tree traversal
 * - File system directory traversal
 * 
 * Testing Use-Cases:
 * - Recursive test data structures
 * - Deep API response parsing
 * - Testing error handling in complex flows
 * - WHERE: Complex assertions, error scenarios
 * 
 * Best Practice:
 * - Prefer iteration over recursion (stack safe)
 * - Use for elegant solutions, not performance-critical code
 * - Always include base case
 */
function login(){
    console.log("login to app");
    search();
};

function search(){
    console.log("I am search function");
    addToCart();
};

function addToCart(){
    console.log("I am add to cart function");
    //login(); //RangeError: Maximum call stack size exceeded
};

login();

console.log("=============recurssion=============");

function billing(){
    console.log("billing function ");
    let x = 10;
    let y = x+10; 
    console.log(y);
    billing();
}
billing(); //Maximum call stack size exceeded
// we tried to avoid recursion 
// WAP to calculate factorial using recursive.



