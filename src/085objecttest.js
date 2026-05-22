/**
 * OBJECT ASSIGNMENT & PROPERTY ACCESS
 * 
 * When assigning objects:
 * - user1 = user2: Both point to SAME object
 * - All properties from user2 are accessible via user1
 * - Modifications affect both (shared reference)
 * 
 * Empty Object:
 * - let user3 = {} creates new object in memory
 * - Then user3 = user1 makes it point to user1's object
 * - Original empty object becomes garbage (GC'd)
 * 
 * typeof Check:
 * - typeof for any object returns "object"
 * - Cannot distinguish between object, array, null using typeof
 * - array also returns "object"
 * 
 * WHY This Matters in Testing:
 * - Test data creation (fixtures)
 * - Mocking objects for API calls
 * - State management in test scenarios
 * - WHERE: Test setup, data initialization, assertions
 * 
 * Best Practice:
 * - Be explicit about intent (copy vs reference)
 * - Use Object.assign() for shallow copy
 * - Use JSON.parse(JSON.stringify()) for deep copy
 * - Use spread operator {...obj} for quick copy
 */

let user1 = {
    name: 'Nitin',
    age: 36,
    city: "Bangalore"
};


let user2 = {
    name: 'shraddha',
    age: 30,
    city: "pune",
    country: "india"
};

user1 = user2

console.log(user1.name);
console.log(user1.age);
console.log(user1.country);


console.log(typeof user1); // object

let user3 = {};
console.log(user3);

user3 = user1;
console.log(user3);