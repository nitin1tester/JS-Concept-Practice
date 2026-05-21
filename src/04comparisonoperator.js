// 10 is eq to 10 
// nitin is eq to nitin

// == : loose equality  >> Compare only value
// === : Strict equality >> compare value + type both


console.log(10 == 10 );// true
console.log("10" == 10); // true
console.log('10' == 10); // true

console.log(10 === 10); // true
console.log("10" === 10); // false
console.log('10' === 10); // false

// true >> 1 
// false >> 0 
console.log(true == 1);
console.log(true === 1);
console.log(true == '1');
console.log(true === '1');

console.log('nitin' == 'Nitin'); // false
console.log('nitin' === 'Nitin'); // false
console.log('A'=='a'); // false






