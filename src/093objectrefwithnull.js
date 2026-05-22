/**
 * NULL REFERENCE & OPTIONAL CHAINING
 * 
 * null Assignment:
 * - Setting variable to null removes object reference
 * - Accessing properties on null throws ERROR: Cannot read properties of null
 * - Error message: "Cannot read properties of null (reading 'name')"
 * 
 * Optional Chaining Operator (?.)
 * - Syntax: obj?.property
 * - Safely accesses property, returns undefined if obj is null/undefined
 * - WHY: Prevents crashes when object might not exist
 * - WHERE: Defensive coding, API responses with optional fields
 * 
 * Without Optional Chaining:
 * - Crashes if object is null
 * - Need explicit null checks: if (obj && obj.name)
 * 
 * With Optional Chaining:
 * - Safely returns undefined
 * - No crash, no conditional needed
 * - Can chain: obj?.address?.street?.number
 * 
 * Use-Cases in Testing:
 * - Handle missing test data gracefully
 * - Access deeply nested API responses safely
 * - Avoid null pointer exceptions
 * - WHERE: Test assertions, data validation, error handling
 * 
 * Related: Nullish coalescing (??), logical AND (&&)
 * - null ?? default: Use default if null/undefined
 * - obj && obj.prop: Traditional null check
 */
let customer = {
    name:'Shivansh',
    age: 1,
    city: 'Bangalore',
    isBaby: true
};

console.log(customer.name);// Shivansh
customer = null;    
console.log(customer.name); 
//error  Cannot read properties of null (reading 'name') at Object.<anonymous>

