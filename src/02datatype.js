// Data Type: Type of data
// 1. Primitive data Type: where memory are fixed, Predefined data type  | Fixed Memory | no GC.
// 2. Non Primitive data type: where memeory are not fixed & Object / referance/Class/Array?Function/Interface | dynamic memory | Heap. 

//number
let x = 10;
console.log(x);
console.log(typeof x);

//string 
let y = 'string ne';
console.log(typeof y);

let z = "nitn here";
console.log(z);
console.log(typeof z);

let p;
console.log(p); // undefined
console.log(typeof p); // undefined

// 3. boolean
let flag = true;
console.log(flag);
console.log(typeof flag);

// 4 undefined
let name = undefined;
console.log(name);
console.log(typeof name);
let fName;
console.log(fName);
console.log(typeof fName);

// 5 null: no values
let apple = null;
console.log(apple);
console.log(typeof null);

// Re-intialization
let c = 10;
c = 20;
console.log(c);
console.log(typeof c);

let d = 130;
console.log(typeof d);
d = 'nitin';
console.log(d);
console.log(typeof d);


var i = 10;
// var i = 20;
console.log(i);


// const i = 10;
// const i = 20;
console.log(i); // error due to const value is final in nature can can't be change

const title = `nitin`;
console.log(title); // error: Missing initializer in const declaration

let str = 'My name is nitin';
console.log(str.charAt[1]);


let num = Number.MAX_SAFE_INTEGER;
console.log(num); //9007199254740991
let num1 = num + 10;
console.log(num1); //9007199254741000

// Bigint
let u = 10n;
console.log(typeof u);
let v = 10 ;
console.log(typeof v);
let w = BigInt(100);

// console.log(u+v);// error 
console.log(u + w );

