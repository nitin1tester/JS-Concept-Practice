/**
 * DESTRUCTURING: Clean Value Extraction
 * 
 * What is Destructuring:
 * - Extract values from arrays/objects and assign to variables in ONE line
 * - Cleaner than multiple assignments
 * - WHY: Reduce boilerplate, improve readability
 * 
 * Array Destructuring:
 * - let [a, b, c] = [10, 20, 30]
 * - Order matters (positional)
 * - let [x, , z] = arr → skip middle element
 * - let [first, ...rest] = arr → collect remaining
 * - let [a = 50] = [] → default values if missing
 * 
 * Object Destructuring:
 * - let {name, age} = {name: 'test', age: 30}
 * - Order doesn't matter (key-based)
 * - Can rename: let {name: userName} = obj
 * - Default values: let {name = 'unknown'} = obj
 * - Can provide inline defaults
 * 
 * Function Parameters:
 * - Destructure in function parameters directly
 * - function placeOrder({name, city}) { } 
 * - Caller passes object: placeOrder({name: 'x', city: 'y'})
 * - WHY: More readable than multiple parameters
 * 
 * Use-Cases:
 * - Extract specific properties from objects
 * - Work with API responses: const {id, name} = response
 * - Function parameters: cleaner alternative to obj.prop
 * - Swapping values: [a, b] = [b, a]
 * 
 * Use-Cases in Testing:
 * - Extract test data: const {browser, url} = config
 * - Parse API responses: const {status, data} = response
 * - Page Object methods: launchBrowser({browserName, headless})
 * - Test fixtures: const {setup, teardown} = fixture
 * - WHERE: API testing, config handling, test data processing
 * 
 * WHY Use Destructuring:
 * - Less repetitive code
 * - Self-documenting (shows what you need)
 * - Fail-fast (error if property missing)
 * - Works with defaults for optional data
 * 
 * 
 *  notes Update
 * - we have to map local variable 
 * 
 * 
 */

// Destructuring :- 
// clean way to extract value from array or object And assign then to variable in a single line.

// Array Destructuring
let [a,b,c ] = [10,20,30];
console.log(a,b,c); //10 20 30

let arr = [40,50,60];
let [x,y,z,] = arr;
console.log(x,z,y);// 40 60 50

let [p, , r] = arr;
console.log(p,r);// 40 60

let ar = [10,40];
let [a1,b1 = 50] = ar
console.log(a1,b1); 

let arr1 = [1,2,3,4];
let [t1,t2,...pop] = arr1;
console.log(t1); // 1
console.log(pop); // 2,3,4
console.log(t2);

// Object destructuring

let user = {
    name:'Nitin',
    age:30
}

let {age, name} = user
console.log(name,age);

console.log("========================");

let customer = {
    name:"nitin",
    age:40,
    city: 'la',
    zip: 12313
}

function placeOrder({name,city}){ // using only name and city 
    console.log(name,city);
}

placeOrder(customer);

function launchBrowser({browserName, headless, url}){
    console.log(browserName,headless,url);
}

let pageObj = {
    title:"LoginPage",
    url:"test.com",
    browserName: 'chrome',
    headless: true
}

launchBrowser(pageObj);


/**
 * this a maping local variable to object variable where empname is mapped with name.
 */
let person = {
    name:'Nitin',
    age:35,
    status:true,
    city:'pune'
}

let {name:empname,age:empage} = person;
console.log(empage,empname);


