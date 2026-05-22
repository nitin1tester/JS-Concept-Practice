/**
 * ARRAY ITERATION METHODS
 * 
 * for (traditional): Use when you need index control
 * - Access both index and value
 * - Can break/continue, modify array during iteration
 * - WHY: Maximum control, can skip or jump iterations
 * - WHERE: Complex logic, filtering, custom iteration patterns
 * 
 * for-of (value iteration): Iterate ONLY VALUES
 * - Cleaner syntax, no index needed
 * - Cannot access index directly
 * - WHY: Simplicity when you only need values
 * - WHERE: Processing array elements sequentially
 * 
 * forEach (functional): Callback for each element
 * - Returns undefined, cannot return from loop
 * - WHY: Functional programming style, clean syntax
 * - WHERE: Side effects (logging, DOM updates), testing iterations
 * 
 * for-in (key iteration): Iterate ONLY INDICES
 * - Iterates all enumerable properties (can be dangerous)
 * - Not recommended for arrays, use for objects
 * - WHY: Getting indexes
 * - WHERE: Object property iteration, NOT array iteration
 * 
 * Performance: for > for-of > forEach > for-in
 * Best Practice: Use for-of for arrays, for-in for objects
 */
// Iterate arrays 

let num1 = [10,20,30,40,50,60];

console.log("-----------for-----------");

for (let i = 0; i < num1.length; i++) {
    const element = num1[i];
    console.log(element);
}

console.log("-----------for-of-----------");
// for of iterate only value of array.
for (let n of num1) {
    console.log(n);
}

console.log("----------foreach------------");

num1.forEach(element => {
    console.log(element);
});

console.log("-----------for-in-----------");
// for in iterate only index of array.
for (let n in num1){
    console.log(n);
}

for(let n in num1){
    console.log(n+ " ->> " + num1[n]);
}

console.log("-----------------------");
