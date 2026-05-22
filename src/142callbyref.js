/**
 * CALL BY REFERENCE: Objects/Arrays Passed by Reference
 * 
 * Key Concept:
 * - Primitives (number, string, boolean): Passed by VALUE (copy)
 * - Objects & Arrays: Passed by REFERENCE (address)
 * - Changes to object parameter affect original object
 * - WHY: Memory efficiency, avoid copying large objects
 * 
 * Demonstration:
 * - Primitive: function(x) { x = 10 } doesn't affect caller's x
 * - Object: function(obj) { obj.name = "new" } DOES affect caller's object
 * 
 * Impact:
 * - Modifications inside function affect external object
 * - Reassignment doesn't affect (userObj = {new} is local only)
 * - Property modification DOES affect (userObj.age = 40 affects original)
 * 
 * Arrays are Objects:
 * - Arrays passed by reference too
 * - Pushing to array in function affects original
 * - WHY: Same reference semantics
 * 
 * Side Effects:
 * - Function modifying input object: Bad for testing
 * - Hard to debug, unpredictable behavior
 * - Solution: Clone objects before modifying
 * 
 * Use-Cases in Testing:
 * - Test fixtures: Shared test data
 * - Page Objects: Storing browser/driver reference
 * - State Management: Shared test state
 * - Data Builders: Building complex test objects
 * 
 * Best Practices:
 * - Be aware of reference semantics
 * - Clone if function needs to modify
 * - Use immutable patterns for state
 * - Document when function modifies parameters
 * - WHERE: Test setup, fixtures, utility functions
 */

let user = {
    name: 'Nitin',
    age: 35,
    city: 'bangalore'
}
/**
 * 
 * @param {object} userObj 
 */
function printObj(userObj){
    console.log(userObj);
    userObj.age = 40;
    console.log(userObj);
}
printObj(user);
console.log(user.age);


console.log("==============================");


let arr = [1,2,3,4,5,6];

function arrObjPrint(obj){
    console.log(obj);
}

arrObjPrint(arr);