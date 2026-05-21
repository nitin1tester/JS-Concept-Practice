// Problem with JS 

// 1. data type can be change in middle by other dev 
let x = 10;
x = "nitin"; // someone change data type in middle then in 
// large code base its diffcult to debug this code. 
console.log(x);
// app.ts(strict type & show compile time error for 'X' even after CE it will give output "nitin" ) 
//  >> app.js(not strict type(no error)) >> O/p :- nitin 

// 2. No suggestion during function implimentation during implimentation ex: stName must 
// be a student name but its not giving method suggestion. we use hack of function documenction  
// to get suggestion.
function myName(stName){
    return stName.toLowerCase();
}
console.log(myName("NITIN HERE"));
// 3. if I am passing number in place of string then error will come to know during runtime
// but in TS i will see CE when i will pass 10 below. 
console.log(myName(10));

