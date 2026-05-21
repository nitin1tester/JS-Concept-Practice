
let str = "hello";

console.log(str.length); // 5
console.log(str.indexOf('h')); //0
console.log(str.indexOf('p')); //-1 
console.log(str.indexOf('l'));//2
console.log(str.lastIndexOf('l')); //3
console.log(str.includes('ell'));;
console.log(str.startsWith('he'));
console.log(str.endsWith('lo')); // true

// slice
console.log(str.slice(1,3));
console.log(str.slice(-3));
console.log(str.slice(-5,5));

console.log(str.substring(1,4));

console.log(str.charCodeAt(1)); //  ascii value 101

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.trimStart);
console.log(str.trimEnd);
console.log(str.replace('h' ,"n"));


