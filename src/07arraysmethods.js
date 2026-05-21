let arr = [1,2,3,4,5];
console.log(arr); //[ 1, 2, 3, 4, 5 ]
console.log("-----------push------------");
arr.push(100); // add value to higher index.
console.log(arr); //[ 1, 2, 3, 4, 5, 100 ]

console.log("----------shift-------------");
let shiftValue = arr.shift(); // remove first value at lower index.
console.log("this is shift value" + shiftValue);
console.log(arr);

console.log("----------Pop-------------");
let popValue = arr.pop(); // remove last index value
console.log(" This is pop value "+popValue);
console.log(arr);

console.log("-----------unshift------------");
arr.unshift(200); // add value in lower index  
console.log(arr); 

console.log("------------splice-----------"); // import for interview and actual use case.
let fruit = ['apple', 'banana', 'orange', 'cherry', 'grapes'];
console.log(fruit);
fruit.splice(fruit.length, 0, "berry");// (start , delete, AddValues[])
console.log(fruit);

console.log("-----------indexOf------------");
let marks = [1,2,3,4,1,5,6,1];
console.log(marks.indexOf(3)); // 2
console.log(marks.indexOf(50)); // -1 very useful for testing use case 
console.log(marks.indexOf(1));//0 start from 0th index (first occurance)
console.log(marks.indexOf(1,5)); // 1 on 7th index (value, startFrom)

let myFruit = ['apple', 'banana', 'orange','apple', 'cherry', 'grapes','apple' ];
console.log(myFruit.indexOf('apple',myFruit.indexOf('apple')+1));//3



