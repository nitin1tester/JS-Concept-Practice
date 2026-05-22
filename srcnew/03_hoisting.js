/**
 * ========================================
 * CONCEPT: HOISTING
 * ========================================
 * 
 * Hoisting is JavaScript's default behavior of moving declarations
 * to the top of their scope before code execution.
 * However, only the declarations are hoisted, not the initializations.
 */

// ========== 1. VAR HOISTING ==========
/**
 * When you declare a variable with `var`, the declaration is hoisted
 * to the top of its function scope, but not the initialization.
 * The variable is initialized with `undefined`.
 */

// This code:
console.log(hoistedVar); // undefined (not an error!)
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // "I am hoisted"

// Is interpreted as:
// var hoistedVar; // Declaration is hoisted
// console.log(hoistedVar); // undefined
// hoistedVar = "I am hoisted"; // Initialization stays in place
// console.log(hoistedVar); // "I am hoisted"

// ========== 2. LET AND CONST HOISTING ==========
/**
 * `let` and `const` are also hoisted, but differently.
 * They are NOT initialized with undefined.
 * They are in a "Temporal Dead Zone" (TDZ) from the start of the block
 * until the declaration is reached.
 * Accessing them in the TDZ throws a ReferenceError.
 */

// console.log(letVar); // ✗ ReferenceError: Cannot access 'letVar' before initialization
let letVar = "I am let";

// console.log(constVar); // ✗ ReferenceError: Cannot access 'constVar' before initialization
const constVar = "I am const";

// ========== 3. FUNCTION HOISTING ==========
/**
 * Function declarations are completely hoisted, including their bodies.
 * You can call a function before it's declared in the code.
 */

// This works! The function declaration is hoisted entirely
console.log(hoistedFunction()); // "I am a hoisted function"

function hoistedFunction() {
  return "I am a hoisted function";
}

// ========== 4. FUNCTION EXPRESSION HOISTING ==========
/**
 * Function expressions are NOT hoisted like function declarations.
 * Only the variable name is hoisted, not the function itself.
 */

// This fails!
// console.log(functionExp()); // ✗ TypeError: functionExp is not a function

var functionExp = function() {
  return "I am a function expression";
};

console.log(functionExp()); // Works now!

// ========== 5. CLASS HOISTING ==========
/**
 * Classes are hoisted like `let` and `const`.
 * They are in the Temporal Dead Zone (TDZ) until the declaration is reached.
 */

// This fails!
// const instance = new MyClass(); // ✗ ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
  constructor() {
    this.name = "My Class";
  }
}

const instance = new MyClass(); // Works now!

// ========== 6. TEMPORAL DEAD ZONE (TDZ) ==========
/**
 * The Temporal Dead Zone is the period between entering a scope
 * and reaching the declaration of a `let` or `const` variable.
 * During this period, the variable cannot be accessed.
 */

function demonstrateTDZ() {
  // x is in the TDZ here
  // console.log(x); // ✗ ReferenceError
  
  let x = 5; // x exits the TDZ
  console.log(x); // 5
}

// ========== 7. HOISTING WITH SAME NAMES ==========
/**
 * When variables and functions have the same name,
 * function declarations are hoisted first, then variable declarations.
 */

// The order of hoisting:
// 1. Function declarations (complete)
// 2. Variable declarations (with undefined)

console.log(typeof myName); // "function" (function is hoisted first)

function myName() {
  return "I am a function";
}

var myName = "I am a variable"; // This assignment happens later

// ========== 8. HOISTING IN FOR LOOPS (VAR) ==========
/**
 * With `var`, the loop variable is hoisted to the function scope,
 * not block scope. This is a common source of bugs.
 */

// This:
function varLoopExample() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i); // 3 (i still exists here!)
}

// Is interpreted as:
function varLoopExampleHoisted() {
  var i; // Hoisted
  for (i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i); // 3
}

// With let (block scoped):
function letLoopExample() {
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
  // console.log(j); // ✗ ReferenceError: j is not defined
}

// ========== 9. HOISTING WITH CONDITIONALS ==========
/**
 * Hoisting happens regardless of whether code is inside conditions.
 * The entire function scope (for var) or block scope (for let/const)
 * is considered, not just the executed code path.
 */

function conditionalHoisting() {
  if (false) {
    var unusedVar = "This won't execute";
  }
  console.log(unusedVar); // undefined (var is hoisted even though if is false)
}

// With let:
function conditionalHoistingLet() {
  if (false) {
    let unusedLet = "This won't execute";
  }
  // console.log(unusedLet); // ✗ ReferenceError: unusedLet is not defined
}

// ========== 10. HOISTING WITH PARAMETERS ==========
/**
 * Function parameters are treated as declarations in the function scope.
 * They take precedence over local variable declarations.
 */

function parameterHoisting(x) {
  console.log(x); // 10 (parameter value)
  
  if (false) {
    var x = 5; // This var declaration doesn't create a new x
  }
  
  console.log(x); // 10 (still the parameter)
}

parameterHoisting(10);

// ========== 11. HOISTING WITH RETURN STATEMENT ==========
/**
 * Hoisting happens before return statements are evaluated.
 * A variable declared after a return statement is still hoisted.
 */

function hoistingWithReturn() {
  return y; // What is y?
  
  var y = "After return"; // Hoisted to the top as var y;
}

console.log(hoistingWithReturn()); // undefined (y is hoisted but not initialized)

// ========== 12. PRACTICAL IMPLICATIONS ==========
/**
 * Understanding hoisting helps you:
 * 1. Avoid ReferenceErrors
 * 2. Debug unexpected undefined values
 * 3. Understand why closure pitfalls occur
 * 4. Write more predictable code
 */

// BEST PRACTICE: Always declare variables at the top of their scope
function bestPractice() {
  // Declare all variables at the top
  var x, y, z;
  let name, age;
  const MAX_SIZE = 100;
  
  // Use them below
  x = 5;
  name = "Alice";
  
  return { x, name, MAX_SIZE };
}

// BETTER PRACTICE: Use let and const (modern approach)
function betterPractice() {
  // Declare variables where they're needed
  const MAX_SIZE = 100;
  let count = 0;
  
  for (let i = 0; i < MAX_SIZE; i++) {
    count++;
  }
  
  return count;
}

// ========== 13. HOISTING GOTCHAS ==========
/**
 * Common mistakes related to hoisting:
 */

// Gotcha 1: Accessing variable in TDZ
function gotcha1() {
  try {
    console.log(x); // ✗ ReferenceError
  } catch (e) {
    console.log(e.message);
  }
  let x = 5;
}

// Gotcha 2: Function expressions are not fully hoisted
// var funcExp = function() {}; // Only funcExp name is hoisted
// funcExp(); // Works after assignment
// But before assignment: funcExp is undefined

// Gotcha 3: Using var in loops for closures
function gotcha3() {
  const funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(() => i);
  }
  console.log(funcs[0]()); // 3 (all reference the same i)
}

// ========== 14. SUMMARY OF HOISTING BEHAVIOR ==========
/**
 * 
 * VAR:
 * - Hoisted to function scope
 * - Initialized with undefined
 * - Can be accessed before declaration (as undefined)
 * 
 * LET/CONST:
 * - Hoisted to block scope
 * - NOT initialized (Temporal Dead Zone)
 * - Cannot be accessed before declaration (ReferenceError)
 * 
 * FUNCTION DECLARATIONS:
 * - Completely hoisted
 * - Can be called before declaration
 * 
 * FUNCTION EXPRESSIONS:
 * - Variable is hoisted, function is not
 * - Cannot be called before assignment
 * 
 * CLASSES:
 * - Hoisted but in Temporal Dead Zone
 * - Cannot be instantiated before declaration
 */

// ========== SUMMARY ==========
/**
 * Key takeaways:
 * 1. Hoisting moves declarations to the top of scope
 * 2. var is hoisted with undefined initialization
 * 3. let and const are hoisted but in TDZ
 * 4. Functions are completely hoisted
 * 5. Function expressions are not fully hoisted
 * 6. Use let and const to avoid hoisting confusion
 * 7. Declare variables at the top of scope
 * 8. Understand TDZ to avoid ReferenceErrors
 */
