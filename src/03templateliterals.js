// template literals
// back tick
// placeholder ${}

let msg = `This is Nitin`;
console.log(msg);

//1. multiline with backtick 
let para = `a for apple
b for boy
c for cat`;
console.log(para);

//2. single tick / double tick as part of string
console.log(`I love 'javascript' coding `);
console.log(`I love "java" coding too`);

// 3. dynamic values using placeholder '${}'.  ": add param using backtick
let lang1 = 'java';
let lang2 = 'javascript';
console.log(`I love to programm in ${lang1} and now i love to code in ${lang2} as well`); //I love to programm in java and now i love to code in javascript as well

let n1 = 10; 
let n2 = 20; 
console.log(`here is sum
    of n1 and n2 
    sum =  ${n1+n2}`);//
console.log(n1,n2,'here are number',"double tick");    
