/**
 * ========================================
 * CONCEPT: SCOPE AND CLOSURES
 * ========================================
 * 
 * Scope determines the accessibility of variables in JavaScript.
 * There are three types of scope: Global, Function, and Block scope.
 * Closures allow functions to access variables from their enclosing scope.
 */

// ========== 1. GLOBAL SCOPE ==========
/**
 * Variables declared at the top level are accessible everywhere.
 * In browsers, they become properties of the `window` object.
 * In Node.js, they become properties of the `global` object.
 */
var globalVar = "I am global";

function accessGlobal() {
  console.log(globalVar); // Accessible everywhere
}

// ========== 2. FUNCTION SCOPE ==========
/**
 * Variables declared with `var` inside a function are only accessible
 * within that function. This is called function scope.
 * Note: `var` has function scope, but `let` and `const` have block scope.
 */
function functionScopeExample() {
  var functionVar = "I am inside function";
  console.log(functionVar); // ✓ Works
}

// console.log(functionVar); // ✗ Error: functionVar is not defined

// ========== 3. BLOCK SCOPE ==========
/**
 * `let` and `const` are block-scoped, meaning they're only accessible
 * within the nearest enclosing block (if, for, while, {}, etc.).
 */
function blockScopeExample() {
  if (true) {
    let blockLet = "I am block scoped";
    const blockConst = "I am also block scoped";
    console.log(blockLet);   // ✓ Works
    console.log(blockConst); // ✓ Works
  }
  // console.log(blockLet);   // ✗ Error: blockLet is not defined
  // console.log(blockConst); // ✗ Error: blockConst is not defined
}

// ========== 4. LEXICAL SCOPE ==========
/**
 * Lexical scope means that the accessibility of variables is determined
 * by the position of the variables in the source code (the syntax).
 * A function can access variables from its parent scope.
 */
let outerVar = "I am from outer scope";

function outerFunction() {
  let outerFunctionVar = "I am in outer function";
  
  function innerFunction() {
    console.log(outerVar);         // ✓ Can access outer scope
    console.log(outerFunctionVar); // ✓ Can access parent function scope
  }
  
  innerFunction();
}

// ========== 5. CLOSURES ==========
/**
 * A closure is a function that has access to variables from its parent scope,
 * even after the parent function has returned.
 * 
 * Key point: The inner function "closes over" the variables from the outer scope.
 * This creates a closure.
 */
function createCounter() {
  let count = 0; // This variable is captured by the closure
  
  return function increment() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// Note: `count` is not accessible directly, only through the closure

// ========== 6. CLOSURE USE CASES: DATA PRIVACY ==========
/**
 * Closures are often used to create private variables that can't be accessed
 * or modified directly from outside.
 */
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500));    // 1500
console.log(account.withdraw(300));   // 1200
console.log(account.getBalance());    // 1200
// console.log(account.balance);       // ✗ undefined (balance is private)

// ========== 7. CLOSURE WITH LOOPS (COMMON PITFALL) ==========
/**
 * When using closures with loops, each iteration creates a closure
 * that captures the same variable reference, not the value.
 * This is a common mistake!
 */

// ❌ WRONG - All closures reference the same 'i'
function wrongClosureLoop() {
  const functions = [];
  for (var i = 0; i < 3; i++) {
    functions.push(function() {
      return i;
    });
  }
  
  console.log(functions[0]()); // 3 (not 0)
  console.log(functions[1]()); // 3 (not 1)
  console.log(functions[2]()); // 3 (not 2)
  // All return 3 because i is 3 after the loop ends
}

// ✓ SOLUTION 1: Use IIFE (Immediately Invoked Function Expression)
function correctClosureLoop1() {
  const functions = [];
  for (var i = 0; i < 3; i++) {
    // Create a new scope for each iteration
    functions.push(
      (function(value) {
        return function() {
          return value;
        };
      })(i)
    );
  }
  
  console.log(functions[0]()); // 0
  console.log(functions[1]()); // 1
  console.log(functions[2]()); // 2
}

// ✓ SOLUTION 2: Use let (simpler!)
function correctClosureLoop2() {
  const functions = [];
  for (let i = 0; i < 3; i++) {
    // let creates a new binding for each iteration
    functions.push(function() {
      return i;
    });
  }
  
  console.log(functions[0]()); // 0
  console.log(functions[1]()); // 1
  console.log(functions[2]()); // 2
}

// ========== 8. SCOPE CHAIN ==========
/**
 * The scope chain is the order in which JavaScript looks for variables.
 * It goes from the innermost scope to the global scope.
 * If a variable is not found in the current scope, it looks in the parent scope.
 */
let globalLevel = "Global";

function level1() {
  let level1Var = "Level 1";
  
  function level2() {
    let level2Var = "Level 2";
    
    function level3() {
      let level3Var = "Level 3";
      
      // Scope chain for level3:
      // 1. Look in level3 scope - finds level3Var
      // 2. Look in level2 scope - finds level2Var
      // 3. Look in level1 scope - finds level1Var
      // 4. Look in global scope - finds globalLevel
      
      console.log(level3Var);   // Level 3
      console.log(level2Var);   // Level 2
      console.log(level1Var);   // Level 1
      console.log(globalLevel); // Global
    }
    
    level3();
  }
  
  level2();
}

// ========== 9. VARIABLE SHADOWING ==========
/**
 * When a variable in an inner scope has the same name as a variable
 * in an outer scope, the inner variable "shadows" the outer variable.
 */
let message = "I am global";

function shadowingExample() {
  let message = "I am local"; // Shadows the global message
  console.log(message); // "I am local" (the local one is used)
}

console.log(message); // "I am global" (global one is unchanged)

// ========== 10. CLOSURE MEMORY IMPLICATIONS ==========
/**
 * Closures keep references to their parent scope's variables.
 * This means those variables are not garbage collected as long as
 * the closure exists. This can lead to memory issues if not careful.
 */
function largeDataClosure() {
  let largeArray = new Array(1000000).fill("data"); // Large data
  
  return function() {
    return largeArray.length; // Closure keeps largeArray in memory
  };
}

const closureWithData = largeDataClosure();
// largeArray is still in memory because closureWithData keeps a reference to it
// To free memory: closureWithData = null;

// ========== SUMMARY ==========
/**
 * Key takeaways:
 * 1. Global scope: Accessible everywhere
 * 2. Function scope: Accessible within function (var only)
 * 3. Block scope: Accessible within block (let, const)
 * 4. Lexical scope: Determined by source code position
 * 5. Closures: Inner functions with access to outer scope
 * 6. Use closures for data privacy and encapsulation
 * 7. Watch for closure pitfalls in loops
 * 8. Understand scope chain for variable lookup
 * 9. Be aware of memory implications with closures
 */
