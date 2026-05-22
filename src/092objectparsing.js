/**
 * JSON: JavaScript Object Notation (Data Format)
 * 
 * SERIALIZATION (Object → JSON String):
 * - JSON.stringify(object) converts JavaScript object to JSON string
 * - WHY: Send data over network, store in files/database
 * - WHERE: API requests, local storage, logging
 * 
 * DESERIALIZATION (JSON String → Object):
 * - JSON.parse(jsonString) converts JSON string back to object
 * - WHY: Receive data from API, read stored data
 * - WHERE: API responses, reading from storage
 * 
 * Testing Use-Cases:
 * - POST request: Convert JS object → JSON → Send to API
 * - GET response: Receive JSON → Parse → Validate object properties
 * - Data comparison: Stringify both objects, compare as strings
 * 
 * JSON.stringify(obj, null, 2):
 * - null: replacer (no filtering)
 * - 2: indentation level (pretty print for readability)
 * - WHY: Formatted output for debugging/logging
 * 
 * Nested Objects:
 * - Serialization works with nested structures
 * - Arrays and objects all converted to JSON
 * - Deserialization reconstructs full hierarchy
 * 
 * Important:
 * - JSON only supports: strings, numbers, booleans, arrays, objects, null
 * - Functions, undefined, Symbols are LOST during serialization
 * - Use for: Data exchange, NOT for deep cloning functions
 */
//JS object ---> JSON : Serialization (marsheling)
//JSON ----> JS object : de-serialization (unmarshelling)


// API automation 
// Post call >> url, JSON
// user JS object ---->> JSON(Java Script Object Notation)(type string)
// API: response(JSON) --->> JS object.

let user = {
    name: 'Nitin',
    age: 35,
    city: 'Pune',
    isActive: true
};

// JS object ---> JSON : Serialization (marsheling)
let jsonUser = JSON.stringify(user,null,2);
console.log(jsonUser);
console.log(typeof jsonUser);

// JSON ----> JS object : de-serialization (unmarshelling)
let userObj = JSON.parse(jsonUser);
console.log(userObj);
console.log(typeof userObj);

console.log(user.name===userObj.name); // true

console.log("================== nested JS Object ==========================");


let employee = {
    name: 'Shraddha',
    age: 35,
    city: 'pune',
    isActive: true,
    address:{
        flat:'B203',
        building:'Silver gate',
        zip:123123
    },
    devices: ['phone', 'laptop', 'headphone', 'mouse'],
    company: 'ACB corp'
}

// JS object ---> JSON : Serialization (marsheling)
let empJSON = JSON.stringify(employee,null,2)
console.log(empJSON);
console.log(typeof empJSON);

// JSON ----> JS object : de-serialization (unmarshelling)
let empObj = JSON.parse(empJSON);
console.log(empObj);
console.log(typeof empObj);

