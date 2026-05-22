/**
 * OBJECTS: Key-Value Data Structures
 * 
 * Definition: Non-primitive data type, reference-based storage
 * Format: { key: value, key: value, ... }
 * Also called: Associative arrays, Hash maps, Dictionaries
 * 
 * CRUD Operations:
 * 
 * CREATE/READ:
 * - Dot notation: obj.name (cleaner, preferred)
 * - Bracket notation: obj['name'] (allows spaces/special chars)
 * - WHY: Two ways for flexibility
 * 
 * UPDATE:
 * - Direct assignment: obj.name = "new value"
 * - Modifies existing property
 * 
 * CREATE (new property):
 * - obj.email = "test@example.com" (add new property anytime)
 * - Unlike Java, JavaScript allows dynamic properties
 * - WHY: Flexibility, no need to define schema upfront
 * 
 * DELETE:
 * - delete obj.age (removes property)
 * - WHY: Memory cleanup, remove unwanted properties
 * 
 * Nested Objects:
 * - obj.address.flat accesses nested properties
 * - WHY: Organize related data hierarchically
 * - WHERE: User profiles, complex data models, API responses
 * 
 * Use-Cases in Testing:
 * - Test data objects
 * - API response validation
 * - Configuration objects
 */

// object --> non primitive data type
// referance type
// key-value pair format

let user = {
    name:'nitin',
    age:35,
    city:'Bangalore',
    isActive:true,
    address:{
        flat: 'B203',
        building: 'ABC corp',
        zip: 123123
    }
};
console.log(user);
//get
console.log(user.name); // nitin
console.log(user['city']);// Bangalore another way to use property
console.log(user.tel); // undefined
console.log(user.address.flat); // B203 nested object

//post
user.email = "nitin@test.com"; // we can add any key in object as well unlike java
console.log(user);

//delete
delete user.age;
console.log(user);

//update
user.city = "pune";
console.log(user);