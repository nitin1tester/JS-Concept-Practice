/**
 * ARROW FUNCTIONS (=>): Modern Function Syntax
 * 
 * Syntax: (params) => { body } or param => expression
 * - Concise syntax, no 'function' keyword
 * - Anonymous by default
 * - Heavily used in modern JavaScript (Playwright, Node.js)
 * 
 * Parameter Variations:
 * 1. No params: () => console.log("hello")
 * 2. One param: name => console.log(name)  (no parens needed)
 * 3. Multiple params: (a, b) => a + b
 * 4. Rest params: (...args) => { }
 * 
 * Return Behavior:
 * 1. Single expression: x => x * 2  (auto returns)
 * 2. Block body: (x) => { let y = x * 2; return y; }  (need explicit return)
 * 3. Return object: () => ({name: 'test'})  (need parentheses)
 * 
 * Key Differences from Regular Functions:
 * - No 'this' binding: 'this' refers to parent scope
 * - No 'arguments' object
 * - Cannot use as constructor (no 'new')
 * - No hoisting
 * 
 * WHY Use Arrow Functions:
 * - Cleaner, more readable syntax
 * - Perfect for callbacks
 * - Consistent 'this' binding (lexical scoping)
 * - WHERE: Callbacks, array methods, async/await
 * 
 * Use-Cases in Testing:
 * - Array operations: arr.map(e => e.name)
 * - Callbacks: .then(res => { })
 * - Test methods: const login = (user) => { }
 * - Event handlers (be careful with 'this')
 * - WHY: Modern, concise, works great with promises
 * - WHERE: Playwright, Webdriver, test utilities
 * 
 * WARNING: Don't use arrow functions for:
 * - Object methods needing 'this'
 * - Constructor functions
 * - When you need 'arguments' object
 */

//Arrow Function: => 
// has no name: annonymous function 
// heavlily used in callback function and playwright
// no function keyword

//1. No param arrow function: 

let print = ()=> console.log("I love JS");
print();

// 2. one param arrow function

let printName = (name)=> console.log("my name ",name);
printName('nitin');

console.log("=========================");

let addTen = (a)=> console.log(a+10);
addTen(11);

console.log("=========================");

let addUsingBacktick = (num)=> console.log(`hello ${num}`);
addUsingBacktick(14);

console.log("=========================");

let printTotal = total => console.log(total+90); // without bracket if there is only on param.(total)
printTotal(1000);

console.log("=========================");

let printBill = (billing)=> { // added multiple line in bracket now.
    console.log(billing + 30);
    console.log("I am billing");
    console.log("end here");
}
printBill(12);

console.log("=========================");
 
let returnValue =  (a)=> a+2; // here a+2 will be return directly
let retn =  returnValue(5);
console.log(retn);

console.log("=========================");
/**
 * 
 * @param {String} name 
 * @returns 
 */
let doLowerCase = (name) => name.toLowerCase();
let lower = doLowerCase("NiTiN");
console.log(lower);


// 2. two param arrow function
console.log("=========================");

let sumNum =  (num1,num2)=> num1+num2;
let sum = sumNum(3,5);
console.log(sum);

console.log("=========================");

let initBrowser = (browserName)=>{

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

};
let flag = initBrowser('chrome');
console.log(flag);

console.log("=========================");

let empDetails = (...details)=>{
    console.log(details);
    console.log(details.length);    
}
empDetails("nitin",32,'Bangalore',true)

 
let result = (a,b)=> a*b;
let res = result(3,6);
console.log(res);

