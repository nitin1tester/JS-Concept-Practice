/**
 * ARRAYS: Collections of elements
 * 
 * Definition: Collection of different or same type of data in organized list
 * - Dynamic: Size can grow/shrink
 * - Zero-indexed: First element at index 0
 * - Ordered: Elements maintain insertion order
 * 
 * Creating & Accessing:
 * - let arr = [10, 20, 30]
 * - arr[0] returns 10 (first element)
 * - arr[arr.length - 1] returns last element
 * - arr[100] returns undefined (index out of bounds)
 * 
 * Important: 
 * - Negative indices (arr[-1]) return undefined (not like Python)
 * - Negative indices used as keys create properties: arr[-1] = 5 adds property, not array element
 * - arr.length reflects array elements, not additional properties
 * 
 * Memory: Arrays are objects with numeric keys (indices)
 * - Stored as reference types on HEAP
 * - Variables store memory address, not actual data
 */
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


