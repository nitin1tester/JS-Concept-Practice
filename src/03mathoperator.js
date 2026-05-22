/**
 * MATHEMATICAL OPERATORS & MODULO
 * 
 * Division (/): Returns quotient as decimal or Infinity (if divisor is 0)
 * - 9/2 = 4.5
 * - 9/0 = Infinity (positive infinity)
 * 
 * Modulo (%): Returns remainder after division
 * - Useful for: checking even/odd, cycling through arrays, patterns
 * - 9%2 = 1 (9 divided by 2 leaves remainder 1)
 * - 8%2 = 0 (8 divided by 2 leaves remainder 0 - means even)
 * 
 * Special Cases:
 * - 0/0 = NaN (Not a Number - indeterminate form)
 * - Any number / 0 = Infinity
 */
console.log(9/2); // 4.5
console.log(9.0/2);//4.5
console.log(0/2); // 0
console.log(9/0); // infinity
console.log(0/0); // NaN

console.log(9%2); //1  >> called modulas Operator
console.log(8%2); //0
