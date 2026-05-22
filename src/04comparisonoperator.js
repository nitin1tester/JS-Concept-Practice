/**
 * EQUALITY OPERATORS: == vs ===
 * 
 * == (Loose Equality / Abstract Equality):
 * - Compares VALUES ONLY
 * - Performs type coercion before comparison
 * - 10 == '10' returns true (string '10' converted to number)
 * - true == 1 returns true (true converted to 1)
 * - Less strict, can hide bugs
 * 
 * === (Strict Equality):
 * - Compares both VALUE and TYPE
 * - NO type coercion
 * - 10 === '10' returns false (number !== string)
 * - true === 1 returns false (boolean !== number)
 * - MORE RELIABLE and RECOMMENDED
 * 
 * Best Practice: Always use === to avoid unexpected type coercion bugs
 * 
 * Note: Same rules apply for != (loose) vs !== (strict)
 */
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






