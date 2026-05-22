/**
 * LOOPS: Executing code repeatedly
 * 
 * while Loop: Repeats while condition is true
 * - Use when: number of iterations is UNKNOWN
 * - Syntax: while (condition) { }
 * - Risk: Infinite loops if condition never becomes false
 * - Use-Cases: Waiting for element on page, pagination, lazy loading
 * 
 * for Loop: Repeats for fixed number of iterations
 * - Use when: number of iterations is KNOWN (fixed)
 * - Syntax: for (init; condition; increment) { }
 * - Components: initialization, condition, increment
 * - Use-Cases: Iterating arrays, dropdown months (1-12), dates (1-31)
 * 
 * do-while Loop: Executes block at least once, then checks condition
 * - Body executes BEFORE condition check
 * - Useful when you need at least one execution
 * - Use-Cases: If element is present, click once and break
 * 
 * forEach, for-of, for-in: Array/Object iteration (see 07arraysiteration.js)
 */
// 1 to 10

let to = 1;
while (to <= 10) {
    console.log(to);
    to++;
}

console.log("--------------------------------------");

while(true){
    console.log("Nitin Here");
    break;
}

console.log("--------------------------------------");

let j = 1;
while(j <= 50){
    console.log(j);
    if (j%5==0) {
        console.log("hello");
        break;
    }
    j++;
}



console.log("--------------------------------------");
 
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for(let i = 10; i>=1; i--){
    console.log(i);
}

for(let i=1; true; i++){
    console.log(i);
}

for( ; ; ){
    console.log("I am here"); // infinite loop
}

console.log("--------------------------------------");

do {
    console.log("I am in Do");
} while (false);


let k = 1;
do{
console.log(k);
k++;
}while(k<=10);

//use cases of while loop:-  when number of iteration are not fixed.
// 1. wait for element on page 
// 2. wait for page loading 
// 3. calender: 
// 4. webtable pagination.
// 5. infinite scrolling (lazy loading)

// User cases of for Loop:- When number of iteration are fixed;
// 1. dropdown month 1-12 
// 2. date 1-31
// 3. array : fixed and finite

// User cases of do-while 
// 1. if element is present on page just click once and break.


// foreach
// for of
// for in loops 




