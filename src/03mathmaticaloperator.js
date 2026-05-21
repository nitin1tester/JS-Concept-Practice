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
console.log("hello " * null);
console.log("hello " * undefined);

//division
console.log(10/"5");//2
console.log("40"/"10");//4
console.log(`8`/`4`);//2

// unary plus operator 
console.log(+"42"+5);

// unary negation
console.log(-"42"+5);

let amount = 100.6;
console.log(Number.parseInt(amount)+20);
console.log(Number.parseFloat(amount)+31.5);

console.log(4 + -2);//2

//BODMAS  >> Brackets , Order, division, Multiply, Add , Subtract



