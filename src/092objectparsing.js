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

