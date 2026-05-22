/**
 * SCOPE & HOISTING: JavaScript Variable Lifecycle
 * 
 * What is Scope:
 * - Context in which variable is accessible
 * - Determines where variable can be used
 * - Variables outside scope not accessible
 * - Nested functions create nested scopes
 * 
 * Scope Types:
 * 1. Global Scope: Available everywhere
 * 2. Function Scope: Available inside function
 * 3. Block Scope: { } block (let/const only)
 * 4. Lexical Scope: Function can access parent scope
 * 
 * var vs let vs const Scope:
 * - var: Function-scoped (or global if outside function)
 * - let: Block-scoped (inside { })
 * - const: Block-scoped, cannot be reassigned
 * 
 * Scope Chain:
 * - Inner function can access outer variables
 * - Lookup goes: local → parent → global
 * - Called "lexical scope" (based on code structure)
 * 
 * What is Hoisting:
 * - Variables/functions moved to top of their scope
 * - Happens during compilation phase (not runtime)
 * - var and function declarations hoisted
 * - let/const hoisted but not initialized (TDZ)
 * 
 * var Hoisting:
 * - Declaration hoisted to top, initialized with undefined
 * - x = undefined at top, then assigned later
 * - Can be used before declaration (gets undefined)
 * 
 * let/const Hoisting:
 * - Declaration hoisted but NOT initialized
 * - Temporal Dead Zone (TDZ) - cannot access
 * - ReferenceError if accessed before assignment
 * - More predictable than var
 * 
 * Function Hoisting:
 * - Entire function hoisted (including body)
 * - Can be called before declaration
 * - Only function declarations hoisted, not expressions
 * 
 * WHY Understanding Hoisting:
 * - Prevents unexpected undefined errors
 * - Explains behavior differences
 * - Avoids variable shadowing bugs
 * - Proper variable declaration order
 * 
 * WHERE Affects Code:
 * - Variable declaration position
 * - Function call timing
 * - Loop variable scope
 * - Nested function access
 * 
 * Use-Cases in Testing:
 * - Test hoisting behavior
 * - Verify scope isolation
 * - Test TDZ (Temporal Dead Zone)
 * - Check variable shadowing
 * - Test function hoisting
 * 
 * WHERE: Variable declaration, function order, block scope
 * 
 * Best Practices:
 * - Use const by default
 * - Use let when reassignment needed
 * - Avoid var (outdated)
 * - Declare at top of scope
 * - Don't rely on hoisting
 */

// Example 1: Global Scope
const globalVar = "global";

function accessGlobal() {
    console.log(globalVar); // Can access global
}

accessGlobal(); // "global"


// Example 2: Function Scope with var
function funcScopeVar() {
    var x = 1;
    
    if (true) {
        var x = 2; // Same var, overwrites
    }
    
    console.log(x); // 2 (var is function-scoped)
}

funcScopeVar();


// Example 3: Block Scope with let
function blockScopeLet() {
    let x = 1;
    
    if (true) {
        let x = 2; // Different x (block-scoped)
    }
    
    console.log(x); // 1 (outer x unchanged)
}

blockScopeLet();


// Example 4: Scope Chain
const outer = "outer";

function outerFunc() {
    const func = "function";
    
    function innerFunc() {
        const inner = "inner";
        
        console.log(inner); // inner
        console.log(func); // function
        console.log(outer); // outer
    }
    
    innerFunc();
}

outerFunc();


// Example 5: Lexical Scope
function parent() {
    const x = "parent";
    
    function child() {
        console.log(x); // Accesses parent's x
    }
    
    return child;
}

const child = parent();
child(); // "parent"


// Example 6: var Hoisting
function varHoisting() {
    console.log(x); // undefined (hoisted, not initialized)
    var x = 5;
    console.log(x); // 5
}

varHoisting();

// Behind the scenes:
// var x; (hoisted to top)
// console.log(x); → undefined
// x = 5;


// Example 7: let/const Hoisting (Temporal Dead Zone)
function letHoisting() {
    // console.log(y); // ReferenceError: Cannot access 'y' before initialization
    
    let y = 5;
    console.log(y); // 5
}

// TDZ: Between start of scope and 'let y' declaration


// Example 8: Function Hoisting
console.log(hoistedFunc()); // "Hoisted function" - works!

function hoistedFunc() {
    return "Hoisted function";
}


// Example 9: Function Expression Not Hoisted
// console.log(funcExpr()); // TypeError: funcExpr is not a function

var funcExpr = function() {
    return "Function expression";
};

console.log(funcExpr()); // "Function expression"


// Example 10: Variable Shadowing
const name = "global";

function shadowDemo() {
    const name = "function"; // Shadows global
    
    {
        const name = "block"; // Shadows function scope
        console.log(name); // "block"
    }
    
    console.log(name); // "function"
}

shadowDemo();
console.log(name); // "global"


// Example 11: Loop Variable Scope - var
function loopVar() {
    for (var i = 0; i < 3; i++) {}
    console.log(i); // 3 (var is function-scoped)
}

loopVar();


// Example 12: Loop Variable Scope - let
function loopLet() {
    for (let i = 0; i < 3; i++) {}
    // console.log(i); // ReferenceError (let is block-scoped)
}

loopLet();


// Example 13: Hoisting with const
function constHoisting() {
    // const z = 10; // ReferenceError if accessed before
    
    const z = 10;
    console.log(z); // 10
}


// Example 14: Scope Isolation in Blocks
function blockIsolation() {
    let x = 1;
    
    {
        let x = 2; // Different variable
        console.log(x); // 2
    }
    
    console.log(x); // 1
}

blockIsolation();


// Example 15: Testing Hoisting Behavior
function testHoisting() {
    try {
        console.log(undeclared); // undefined (var hoisted)
    } catch (e) {
        console.log("Error accessing var"); // Won't reach
    }
    
    var undeclared = 5;
}

testHoisting();


// Example 16: Closure - Access to Parent Scope
function outer2() {
    let count = 0;
    
    return function increment() {
        count++;
        return count;
    };
}

const counter = outer2();
console.log(counter()); // 1
console.log(counter()); // 2
// count is remembered (closure)


// Example 17: Temporal Dead Zone (TDZ)
function tzd() {
    console.log("Before TDZ");
    
    // TDZ starts here
    // console.log(x); // ReferenceError
    
    let x = 10; // TDZ ends here
    
    console.log(x); // 10
}

tzd();


// Example 18: Testing Scope with Function Arguments
function scopeTest(arg) {
    const localVar = "local";
    
    function inner() {
        console.log(arg); // Can access parameter
        console.log(localVar); // Can access local var
    }
    
    inner();
}

scopeTest("argument");


// Example 19: Module Scope (if using modules)
// export const moduleVar = "module";

// Other files import it explicitly
// import { moduleVar } from "./module";


// Example 20: Hoisting Order
function hoistingOrder() {
    // Functions hoisted first
    // Then variables
    
    console.log(typeof f); // "function"
    console.log(typeof v); // "undefined"
    
    var v = 1;
    
    function f() {}
}

hoistingOrder();
