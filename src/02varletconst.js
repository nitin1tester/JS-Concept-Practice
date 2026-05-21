
//1. var: 

// intialization 
var x = `Nitin`;
var x = `sharddha`;
var x = `Shivansh`;
console.log(x);

// Reassignment (this is not a problem just a 
var y = 10;
console.log(y);
y = `shivu`;
console.log(y);

// Hoisting
console.log(t); // undefined  (Its a known bug in javascript)var t = 100;
console.log(t); // 100


//2. let: 

// intialization
let p = `nitin`;
let p = `shraddha`; /// error
console.log(p);

//reassignment
let q = `shivansh`;
q = 10;
console.log(q);

// hoisting
console.log(r); // error(can't access r before intialization)
let r = 'i am nitin';
console.log(r);

//3. const;

// intialization 
const A = `NITIN`;
const A = `rastogi`;
console.log(a);

// reintialization 
const B = 10;
B = `god`;
console.log(B);

// hoisting 
console.log(C);
const C = 100;
console.log(C);


