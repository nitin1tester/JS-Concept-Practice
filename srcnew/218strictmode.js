/**
 * STRICT MODE: Safer JavaScript Execution
 * 
 * What is Strict Mode:
 * - Opt-in mode that enforces stricter parsing/execution
 * - Prevents "unsafe" actions
 * - Different error handling
 * - Enabled with "use strict" directive
 * 
 * Strict Mode Rules:
 * 1. Variables must be declared (no globals)
 * 2. Deleting variables/functions not allowed
 * 3. Function parameter names must be unique
 * 4. Octal literals not allowed
 * 5. eval() creates separate scope
 * 6. Arguments object is static
 * 7. 'this' is undefined in functions (not global)
 * 8. With statement not allowed
 * 
 * Enabling Strict Mode:
 * - Global: "use strict" at top of script
 * - Function: "use strict" inside function
 * - Module: Automatically in ES6 modules
 * - Classes: Always in strict mode
 * 
 * WHY Strict Mode:
 * - Catch common coding mistakes
 * - Improve performance
 * - Prepare for future versions
 * - Prevent unsafe actions
 * - Help with debugging
 * 
 * WHERE Used:
 * - Production code (recommended)
 * - Module files (automatic)
 * - Classes (automatic)
 * - New projects (best practice)
 * 
 * Use-Cases in Testing:
 * - Test function scope
 * - Verify error throwing
 * - Test 'this' binding
 * - Test parameter validation
 * 
 * WHERE: Performance, safety, best practice
 * 
 * Performance Benefits:
 * - Easier to optimize
 * - No eval() worries
 * - Simpler scope chain
 * - Better engine optimization
 * 
 * Breaking Changes:
 * - Code that relies on globals breaks
 * - 'this' in functions becomes undefined
 * - Some syntax not allowed
 * - Need to update code
 */

// Example 1: Global Strict Mode
"use strict";

// Trying to create global without var/let/const
function globalTest() {
    // implicitGlobal = "This would create global in non-strict";
    // In strict mode, throws ReferenceError
}


// Example 2: Function-level Strict Mode
function strictFunction() {
    "use strict";
    
    // Only this function is strict
    const x = 1;
    // y = 2; // ReferenceError in strict
}

function normalFunction() {
    // This function is NOT strict (unless in module/global)
    z = 3; // Would create global (if not in strict)
}


// Example 3: Variable Declaration Required
function variableTest() {
    "use strict";
    
    let a = 1; // OK
    const b = 2; // OK
    var c = 3; // OK
    
    // d = 4; // ReferenceError - must declare
}


// Example 4: Unique Parameter Names
// function duplicateParams(a, a, b) { // Syntax error in strict
//     return a + b;
// }

// In non-strict, second 'a' overwrites first
// In strict, it's a syntax error


// Example 5: Octal Literals Not Allowed
function octalTest() {
    "use strict";
    
    // const octal = 010; // SyntaxError - octal not allowed
    const decimal = 8; // Use decimal instead
}


// Example 6: This Binding - Undefined in Strict
function thisTest() {
    "use strict";
    
    console.log(this); // undefined (not window/global)
}

// thisTest(); // undefined


// Example 7: This in Method - Still References Object
const obj = {
    name: "Object",
    method: function() {
        "use strict";
        
        console.log(this); // References obj
    }
};


// Example 8: Constructor Functions in Strict
function ConstructorStrictTest(name) {
    "use strict";
    
    this.name = name;
}

// Must use 'new' keyword in strict mode
const instance = new ConstructorStrictTest("Test");
// ConstructorStrictTest("Test"); // Error: 'this' is undefined


// Example 9: Delete Property in Strict
const testObj = { x: 1 };

function deleteTest() {
    "use strict";
    
    delete testObj.x; // OK - delete property
    // delete ConstructorStrictTest; // TypeError - cannot delete function
    // delete 1; // SyntaxError - invalid delete
}


// Example 10: Eval Creates New Scope
function evalTest() {
    "use strict";
    
    eval("var x = 1");
    // console.log(x); // ReferenceError - x not in function scope
    
    eval("var y = 2");
    // console.log(y); // ReferenceError - y created in eval scope
}


// Example 11: Arguments Object is Static
function argsTest() {
    "use strict";
    
    const args = arguments;
    args[0] = "modified"; // Does NOT modify function parameter
    
    console.log(arguments); // Not modified by 'args[0] = ...'
}


// Example 12: With Statement Not Allowed
// function withTest() {
//     "use strict";
//     
//     const obj = { x: 1 };
//     with (obj) { // SyntaxError - with not allowed
//         console.log(x);
//     }
// }


// Example 13: Testing Strict Mode Errors
function testStrictErrors() {
    "use strict";
    
    try {
        // Create implicit global (should throw)
        undeclaredVar = "test";
    } catch (err) {
        console.log("Caught error:", err.message);
    }
}

testStrictErrors();


// Example 14: Strict Mode & Performance
function perfTest() {
    "use strict";
    
    // Engine can optimize more
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
    return sum;
}

const result = perfTest();
console.log("Strict mode performance test:", result > 0);


// Example 15: Class Automatically Strict
class StrictClass {
    constructor() {
        // This class is automatically in strict mode
        // this.prop = "value"; // Would work
        // implicitGlobal = "error"; // ReferenceError
    }
}


// Example 16: Module Automatically Strict
// In ES6 modules, strict mode is automatic
// export const moduleVar = "Module content";
// Any code in module is strict


// Example 17: Debugging with Strict Mode
function debugTest() {
    "use strict";
    
    try {
        // Error handling is stricter
        const x = 1;
        // x = 2; // SyntaxError
    } catch (err) {
        console.log("Error type:", err.constructor.name);
    }
}


// Example 18: Migration to Strict
// Non-strict code that might break in strict:
function legacyCode() {
    // Uses implicit globals
    globalData = "test"; // Works in non-strict, error in strict
    
    // Uses 'with' statement
    // with (someObj) { } // Syntax error in strict
    
    // Duplicate parameter names
    // function dup(a, a) { } // Syntax error in strict
}


// Example 19: Strict Mode Best Practices
function bestPractice() {
    "use strict";
    
    // Always declare variables
    const x = 1;
    let y = 2;
    var z = 3;
    
    // Clear scope rules
    const scope = () => {
        const local = "local";
        // return globalNotDeclared; // Error - must be declared
    };
    
    // Clear this binding
    const obj = {
        method: () => {
            // 'this' is lexically bound to parent
        }
    };
}


// Example 20: Testing Strict Compliance
function testStrictCompliance() {
    "use strict";
    
    // Test 1: Variables must be declared
    let testVar = "declared";
    console.assert(testVar === "declared", "Variable test failed");
    
    // Test 2: This is undefined in functions
    function checkThis() {
        return typeof this;
    }
    console.assert(checkThis() === "undefined", "This test failed");
    
    // Test 3: Object methods still have this
    const testObj2 = {
        method: function() {
            return this === testObj2;
        }
    };
    console.assert(testObj2.method(), "Method this test failed");
    
    console.log("All strict mode tests passed!");
}

testStrictCompliance();
