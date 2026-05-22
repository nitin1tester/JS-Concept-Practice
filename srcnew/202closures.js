/**
 * CLOSURES: Functions with Access to Outer Scope
 * 
 * What is a Closure:
 * - Function that "remembers" variables from its outer scope
 * - Inner function has access to outer function's variables
 * - Even after outer function has returned
 * - Creates a persistent scope chain
 * 
 * Key Characteristics:
 * - Lexical Scoping: Function remembers creation context
 * - Memory Retention: Outer scope variables stay in memory
 * - Data Privacy: Inner function can hide outer variables
 * - Factory Pattern: Create multiple instances with shared behavior
 * 
 * WHY Closures:
 * - Data Encapsulation: Hide implementation details
 * - State Preservation: Maintain state between calls
 * - Callback Patterns: Pass data to callbacks without globals
 * - Module Pattern: Create private/public interfaces
 * - Avoid Global Pollution: Keep variables scoped
 * 
 * WHERE Closures Used:
 * - Callbacks with context: addEventListener with saved state
 * - Module Pattern: Creating libraries with private members
 * - Decorators: Wrapping functions with behavior
 * - Factory Functions: Creating multiple objects with shared logic
 * - Lazy Evaluation: Deferring computation
 * 
 * Use-Cases in Testing:
 * - Test Fixtures: Create test data with closure state
 * - Mock Functions: Remember call history, arguments
 * - Spy Patterns: Wrap functions to track calls
 * - Test Isolation: Each test gets fresh closure scope
 * - Page Objects: Store element references in closure
 * 
 * WHERE: Advanced functions, decorators, module patterns, callbacks
 * 
 * Common Closure Patterns:
 * 1. Counter (state preservation)
 * 2. Callback wrapper (passing context)
 * 3. Module (public/private interface)
 * 4. Factory (creating instances)
 * 5. Memoization (caching results)
 */

// Example 1: Simple Closure - Counter
function createCounter() {
    let count = 0; // This variable is "closed over"
    
    return function increment() {
        count++;
        console.log(count);
        return count;
    };
}

let counter1 = createCounter();
counter1(); // 1
counter1(); // 2
counter1(); // 3

let counter2 = createCounter(); // Separate closure
counter2(); // 1 (fresh closure)


// Example 2: Closure with Parameters
function makeGreeter(greeting) {
    // 'greeting' is captured in closure
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const greetHello = makeGreeter("Hello");
const greetHi = makeGreeter("Hi");

greetHello("Alice"); // "Hello, Alice!"
greetHi("Bob");      // "Hi, Bob!"


// Example 3: Closure in Loop (Common Pitfall)
// Problem: All closures share same i variable
function buggyLoop() {
    const functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(() => console.log(i)); // Captures i by reference
    }
    return functions;
}

const buggy = buggyLoop();
buggy[0](); // 3 (not 0!)
buggy[1](); // 3
buggy[2](); // 3


// Solution 1: Using let (block scope)
function fixedLoop() {
    const functions = [];
    for (let i = 0; i < 3; i++) {
        functions.push(() => console.log(i)); // Each i is different
    }
    return functions;
}

const fixed = fixedLoop();
fixed[0](); // 0
fixed[1](); // 1
fixed[2](); // 2


// Solution 2: Using IIFE (Immediately Invoked Function Expression)
function iifeFix() {
    const functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(
            (function(j) {
                return () => console.log(j);
            })(i) // IIFE captures i in parameter j
        );
    }
    return functions;
}

const iifeFixed = iifeFix();
iifeFixed[0](); // 0
iifeFixed[1](); // 1
iifeFixed[2](); // 2


// Example 4: Closure for Data Encapsulation (Module Pattern)
const bankAccount = (function() {
    let balance = 0; // Private variable
    
    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: $${amount}, Balance: $${balance}`);
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn: $${amount}, Balance: $${balance}`);
            } else {
                console.log("Insufficient funds");
            }
        },
        getBalance: function() {
            return balance;
        }
    };
})();

bankAccount.deposit(100);    // "Deposited: $100, Balance: $100"
bankAccount.withdraw(30);    // "Withdrawn: $30, Balance: $70"
console.log(bankAccount.getBalance()); // 70
// bankAccount.balance = 1000; // Cannot modify directly!


// Example 5: Closure in Testing - Spy Pattern
function createSpy(fn) {
    let callCount = 0;
    let lastArgs = null;
    
    return function(...args) {
        callCount++;
        lastArgs = args;
        return fn(...args);
    };
}

function add(a, b) {
    return a + b;
}

const spyAdd = createSpy(add);
spyAdd(2, 3);
spyAdd(5, 7);
console.log("Called times:", 2);
console.log("Last args:", [5, 7]);
