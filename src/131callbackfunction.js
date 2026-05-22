/**
 * CALLBACK FUNCTIONS: Functions as Arguments
 * 
 * Definition: Function passed as argument to another function
 * Called later by the receiving function
 * Enables: HOF (Higher-Order Functions), async operations
 * 
 * Three Calling Patterns:
 * 1. Call by Value: Pass primitive value (copy)
 * 2. Call by Reference: Pass object (reference)
 * 3. Call by Function: Pass function as callback
 * 
 * How It Works:
 * - Parent function accepts callback parameter
 * - Parent function calls callback when needed
 * - Callback parameter name can be anything (convention: 'callback')
 * - WHY: Execute custom logic at specific points
 * 
 * Callback Must Be Last Parameter:
 * - Convention in JavaScript
 * - Makes code more readable
 * - Easier to understand intent
 * 
 * Use-Cases:
 * - array.forEach(callback)
 * - array.map(callback)
 * - array.filter(callback)
 * - setTimeout(callback, delay)
 * - promise.then(callback)
 * 
 * Inline Callbacks:
 * - Can pass anonymous function directly
 * - Arrow functions perfect for this
 * - WHY: Clean, concise inline logic
 * 
 * Use-Cases in Testing:
 * - Page Objects: browser.click(selector, callback)
 * - Test Utilities: waitForElement(selector, onFound)
 * - Data Processing: forEach(testCase, runTest)
 * - Event Handling: onClick(() => { })
 * - WHERE: Async operations, array processing, event handlers
 * 
 * Problems with Callbacks:
 * - Callback Hell: Deeply nested callbacks (hard to read)
 * - Solution: Promises, async/await
 */

// callback : as callback function is a simple function passed as argument to another function
//  which will be called later.


// call by value
// call by obj ref 
// call by function : callback


let sayHi = function (){
    console.log("Say hi ");
}

let sayHello = function(callback){ // you can write any keyword like nitin, ram...etc as per standard use "callback"
    callback();
}

sayHello(sayHi);

console.log("====================================");
  
//utility function
let add = (a,b)=> a+b; 
let sub = (a,b )=> a-b;
let div = (a,b)=> a/b;
let mul = (a,b)=> a*b;

// core function : end user function 
function  calc(a,b, callback){ // callback must be last param
    return callback(a,b);
}

let result = calc(10,20,add);
console.log(result);


console.log("====================================");

/**
 * 
 * @param {string} browserName 
 */
function intiDriver(browserName){
    console.log('Launching browser ', browserName);
    let flag = false;
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log("launched ",browserName.toUpperCase());
            flag = true;
            break;   
        case 'firefox':
            console.log("launched ",browserName.toUpperCase());
            flag = true;
            break;    
        case 'safari':
            console.log("launched ",browserName.toUpperCase());
            flag = true;
            break;    
        default: console.log('Please enter a valid browser', browserName);
            break;  
    }
    return flag;
};

function enterUrl(browserName, url, callback){
    console.log('starting test case');

    
    if (callback(browserName)) {
        console.log("enter a user",url);
    } 
};

enterUrl('ie',"google.com",intiDriver);


console.log("====================================");


function myCalc(a,b,callback){
    return callback(a,b);
}

let addition =  myCalc(10,20,(a,b)=>a+b); // arrow function addvantage is directly pass function to callback function 
console.log(addition);

console.log("====================================");

function launchBrow(browserName, callback){
     if (callback(browserName)) {
        console.log('Browser is launched');
     } ;
}
let flag = launchBrow("chrome", (browserName)=>{
    console.log('Launching browser ', browserName);
    let flag = false;
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log("launched ",browserName.toUpperCase());
            flag = true;
            break;   
        case 'firefox':
            console.log("launched ",browserName.toUpperCase());
            flag = true;
            break;    
        case 'safari':
            console.log("launched ",browserName.toUpperCase());
            flag = true;
            break;    
        default: console.log('Please enter a valid browser', browserName);
            break;  
    }
    return flag;
});

console.log("====================================");

let num = [1,2,3,4,5,6,7,8,9];
num.forEach(e => console.log(e));

let filler =  num.filter(e=>e>5);
console.log(filler);

