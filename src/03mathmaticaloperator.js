/**
 * TYPE COERCION & MATHEMATICAL OPERATORS
 * 
 * JavaScript performs automatic type conversion (coercion) during operations:
 * 
 * Addition (+):
 * - If either operand is STRING → result is STRING (1 + '1' = '11')
 * - Otherwise → numeric addition (1 + 1 = 2)
 * 
 * Other Operators (-, *, /, %):
 * - Strings are converted to NUMBERS automatically
 * - '5' - 3 = 2 (string '5' converted to number)
 * - "hello" - 5 = NaN (non-numeric string converts to NaN)
 * 
 * Special Cases:
 * - NaN: Result when string can't be converted to number
 * - null: Converts to 0 in numeric context
 * - undefined: Converts to NaN
 * 
 * BODMAS: Order of operations - Brackets, Order, Division, Multiply, Add, Subtract
 */
//addition
console.log(1+1);//2
console.log('1'+1); //11
console.log('1'+'1'); //11

//subtractaion
console.log(1-'1');//0 >> 1-1 here if any other operator except + then string will convert to number
console.log("5"-3); // 2
console.log("3"-"2");//1
console.log("hello" - 5); // NaN
console.log("hello " - "world"); // NaN

//multiply
console.log(1*1);//1
console.log(2*"3");//6
console.log("4"*"5"); // 20
console.log("hello"*6); // NaN
console.log("hello " * null); // NaN (null converts to 0, so it's like "hello" * 0)
console.log("hello " * undefined); // NaN (undefined converts to NaN)

//division
console.log(10/"5");//2
console.log("40"/"10");//4
console.log(`8`/`4`);//2

// unary plus operator 
console.log(+"42"+5); // 47 (string '42' converted to number 42, then 42 + 5 = 47)

// unary negation
console.log(-"42"+5); // -37 (string '42' converted to number 42, then negated to -42, then -42 + 5 = -37)

let amount = 100.6;
console.log(Number.parseInt(amount)+20); // 120 (parseInt converts 100.6 to 100, then adds 20)
console.log(Number.parseFloat(amount)+31.5); // 132.1 (parseFloat converts 100.6 to 100.6, then adds 31.5)

console.log(4 + -2);//2

//BODMAS  >> Brackets , Order, division, Multiply, Add , Subtract



