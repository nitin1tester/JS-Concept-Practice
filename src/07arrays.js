// collection of different or same type of data in JS.
// Array 
// dynamic array in JS
// slicing 


let num = [10,20,30,40];

console.log(num[3]); // 40
console.log(num[5]); // undefind
console.log(num[-2]); // undefind

console.log(num.length);

num[10] = 100;
console.log(num);//[ 10, 20, 30, 40, <6 empty items>, 100 ]

num[-1] = 5;
console.log(num);  //[ 10, 20, 30, 40, '-1': 5 ] ;
// >> when we try to add value in negative index then it added as key-value property; 
// here we have 4 values"10, 20, 30, 40," & 1 property ('-1': 5) & its length will be 4 only based on values

console.log(num.length); // 4
console.log(num[-1]); // 5

console.log(typeof num);


