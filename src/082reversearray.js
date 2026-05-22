/**
 * ARRAY REVERSE METHOD
 * 
 * reverse(): Reverses array IN-PLACE (mutates original)
 * - Original array is modified
 * - Last element becomes first
 * - WHY: Sometimes need data in reverse order
 * - WHERE: Undo operations, reverse timelines, LIFO data access
 * 
 * Alternative: Reverse without mutation
 * - Loop from end to start: for(let i = arr.length-1; i >= 0; i--)
 * - Use spread operator: [...arr].reverse() creates new array
 * - WHY: Avoid side effects, keep original data intact
 * - WHERE: Functional programming, immutable data patterns
 * 
 * Use-Cases in Testing:
 * - Reverse execution order of tests
 * - Process results in LIFO order
 * - Cleanup in reverse order of setup (undo operations)
 */

let num = [1,2,3,4,5,6,7,8,9,0];
num.reverse();
console.log(num); //reverse order of num

for (let i = num.length-1; i >=0; i--) {
    console.log(num[i]); // back to orignal value of num
}

// do it using forin and forof 