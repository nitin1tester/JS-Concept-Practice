/**
 * NULL vs UNDEFINED vs OPTIONAL CHAINING
 * 
 * undefined:
 * - Variable declared but NOT initialized
 * - Function with no return statement returns undefined
 * - Missing function parameters are undefined
 * - Accessing non-existent property returns undefined
 * - WHY: Default value for uninitialized variables
 * 
 * null:
 * - Explicitly set by programmer
 * - Represents "no value" intentionally
 * - Must be assigned manually: obj = null
 * - WHY: Explicitly mark "no object" state
 * 
 * Difference:
 * - undefined: Variable exists but no value
 * - null: Explicitly no value
 * - Both are falsy in boolean context
 * 
 * Optional Chaining (?.)
 * - Safely access nested properties
 * - obj?.name returns undefined if obj is null/undefined
 * - Does NOT throw error
 * - WHY: Prevent "Cannot read property of null" errors
 * - WHERE: API responses, nested objects, defensive programming
 * 
 * Syntax:
 * - obj?.property: Property access
 * - obj?.[key]: Computed property access
 * - obj?.method(): Method call
 * - obj?.[0]: Array element access
 * 
 * Use-Cases in Testing:
 * - Handle optional API response fields
 * - Access potentially missing test data
 * - Safe navigation in complex test objects
 * - WHERE: API testing, error scenarios, defensive assertions
 * 
 * Related: Nullish coalescing (??), Logical AND (&&)
 */

let obj = {
    name: 'Tom',
    age: 20
}

obj = null; // error
console.log(obj?.name); // error

console.log("Hello world");


