/**
 * OBJECT ITERATION: for-in Loop
 * 
 * for-in Loop: Iterates over object KEYS/PROPERTIES
 * - Syntax: for(let key in object) { }
 * - 'key' contains property name, not value
 * - Access value via: object[key]
 * 
 * Use-Cases:
 * - Inspecting all object properties
 * - Logging object state for debugging
 * - Dynamic property access
 * - WHY: When you need to process all key-value pairs
 * - WHERE: Object validation, filtering, serialization
 * 
 * Important Notes:
 * - NOT recommended for arrays (use for-of instead)
 * - Iterates ALL enumerable properties (includes inherited)
 * - Order not guaranteed (especially for numeric keys)
 * 
 * Testing Use-Cases:
 * - Validate all properties exist in API response
 * - Assert all fields in test data object
 * - Compare objects property-by-property
 * - Log test data for debugging
 * 
 * Arrays with for-in:
 * - Works but can include array methods/inherited properties
 * - DON'T use for-in with arrays
 * - Use for-of for arrays instead
 */

let user = {
    name: 'Nitin',
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

// for in loop

for(let key in user){
    console.log(key," : " , user[key]);
}
console.log(user.devices.length);
