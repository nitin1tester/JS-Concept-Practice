/**
 * OBJECT REFERENCES & ALIASING (Call by Reference)
 * 
 * Objects are REFERENCE TYPES (not value types):
 * - Variable stores MEMORY ADDRESS, not actual data
 * - Multiple variables can point to same object
 * - Changes through one variable affect all references
 * 
 * Assignment Behavior:
 * - user1 = user2 doesn't copy data, copies reference
 * - Both variables now point to SAME object in memory
 * - Changes to user2 also affect user1
 * - WHY: Memory efficient, but can cause side effects
 * 
 * This is DANGEROUS:
 * - Easy to accidentally modify data
 * - Hard to debug if not aware
 * - Solution: Use spread operator or Object.assign for copy
 * 
 * Use-Cases:
 * - Share object state (intentional reference sharing)
 * - Avoid unnecessary memory duplication
 * 
 * Anti-Patterns (Bugs):
 * - Forgetting objects are references
 * - Assigning without realizing shared state
 * - WHERE: Test fixtures, user state management
 * 
 * Solution: Always be aware of reference semantics
 * - Clone with: {...obj} or Object.assign({}, obj)
 * - Use immutable patterns for complex objects
 */

let user1 = {
    name: 'Nitin',
    age: 36,
    city: "Bangalore"
};


let user2 = {
    name: 'shraddha',
    age: 30,
    city: "pune"
};


let user3= {
    name: 'shivansh',
    age: 1,
    city: "delhi"
};

console.log(user1);
console.log(user2);
console.log(user3);

console.log("======= user1==user2; =======");

user1=user2;

console.log(user1); // sharddha
console.log(user2); // shraddha
console.log(user3); // shivansh


console.log("======= user2==user3; =======");

user2=user3;

console.log(user1); // sharddha
console.log(user2); // shivansh
console.log(user3); // shivansh


console.log("======= user3==user1; =======");

user3=user1;

console.log(user1); // sharddha
console.log(user2); // shivansh
console.log(user3); // sharddha



