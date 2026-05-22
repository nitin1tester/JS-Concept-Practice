/**
 * FUNCTION COMPOSITION & CURRYING: Functional Programming Techniques
 * 
 * FUNCTION COMPOSITION
 * ====================
 * What is Composition:
 * - Combining functions to create new function
 * - Output of one function is input to another
 * - compose(f, g)(x) = f(g(x))
 * - Read right-to-left or left-to-right
 * 
 * Benefits:
 * - Reusable functions
 * - Cleaner code
 * - Testable pieces
 * - Declarative pipeline
 * 
 * Implementation:
 * - compose(...fns) - right to left
 * - pipe(...fns) - left to right
 * 
 * CURRYING
 * ========
 * What is Currying:
 * - Transform function with N arguments
 * - Into series of functions with 1 argument each
 * - f(a, b, c) → f(a)(b)(c)
 * - Returns new function at each step
 * 
 * Benefits:
 * - Partial application
 * - Specialized functions
 * - Cleaner syntax
 * - Event handler binding
 * 
 * WHY These Patterns:
 * - Composition: Build complex from simple
 * - Currying: Partial application, configuration
 * - Functional paradigm: Immutable, predictable
 * - Testability: Small, pure functions
 * 
 * WHERE Used:
 * - Transformation pipelines
 * - Data processing
 * - Event handlers
 * - Configuration
 * - Middleware patterns
 * 
 * Use-Cases in Testing:
 * - Compose test helpers
 * - Curry test data generators
 * - Build test pipelines
 * - Create parameterized tests
 * 
 * WHERE: Functional programming, pipelines, partial application
 * 
 * Key Concepts:
 * - Pure function: Same input → same output
 * - Immutability: Don't modify input
 * - Higher-order function: Function returning function
 */

// ========== FUNCTION COMPOSITION ==========

// Example 1: Manual Composition
function add(x) {
    return x + 5;
}

function multiply(x) {
    return x * 2;
}

// Manual: f(g(x))
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const addThenMultiply = compose(multiply, add);
console.log(addThenMultiply(3)); // (3 + 5) * 2 = 16


// Example 2: Reusable Compose
function composeMany(...fns) {
    return function(x) {
        return fns.reduceRight((acc, fn) => fn(acc), x);
    };
}

const composed = composeMany(multiply, add, add);
console.log(composed(1)); // ((1 + 5) + 5) * 2 = 22


// Example 3: Pipe (Left to Right)
function pipe(...fns) {
    return function(x) {
        return fns.reduce((acc, fn) => fn(acc), x);
    };
}

const piped = pipe(add, add, multiply);
console.log(piped(1)); // ((1 + 5) + 5) * 2 = 22


// Example 4: Data Transformation Pipeline
const toUpperCase = (str) => str.toUpperCase();
const addExclamation = (str) => str + "!";
const reverse = (str) => str.split("").reverse().join("");

const transform = pipe(toUpperCase, addExclamation, reverse);
console.log(transform("hello")); // "!OLLEH"


// Example 5: Compose with Filter/Map
const numbers = [1, 2, 3, 4, 5];

const double = (x) => x * 2;
const isEven = (x) => x % 2 === 0;
const square = (x) => x * x;

// Pipeline: double → filter even → square
const pipeline = (arr) => 
    arr
        .map(double)
        .filter(isEven)
        .map(square);

console.log(pipeline(numbers)); // [4, 16, 36, 64, 100]


// ========== CURRYING ==========

// Example 6: Manual Currying
function add3(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add3(1)(2)(3)); // 6


// Example 7: Curry Function Creator
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function(...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

const multiply3 = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply3);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2, 3, 4)); // 24


// Example 8: Partial Application with Curry
const add2 = (a, b) => a + b;
const curriedAdd = curry(add2);

const addFive = curriedAdd(5);
console.log(addFive(3)); // 8
console.log(addFive(10)); // 15


// Example 9: Event Handler with Curry
function handleClick(id) {
    return function(event) {
        console.log(`Button ${id} clicked`);
    };
}

// Could use with addEventListener
// button.addEventListener("click", handleClick("btn-1"));


// Example 10: API Request with Curry
const apiCall = curry((method, url, data) => {
    return `${method} ${url} with ${JSON.stringify(data)}`;
});

const getRequest = apiCall("GET");
const postToUsers = getRequest("/users");

console.log(postToUsers({ name: "Alice" })); // POST /users with ...


// Example 11: Configuration with Curry
const withConfig = curry((apiKey, timeout, endpoint, data) => {
    return {
        apiKey,
        timeout,
        endpoint,
        data
    };
});

const configuredAPI = withConfig("key123", 5000);
const usersAPI = configuredAPI("/users");
console.log(usersAPI({ id: 1 }));


// Example 12: Composition + Currying
const formattedAdd = curry((prefix, separator, a, b) => {
    return `${prefix}${a}${separator}${b}`;
});

const labeled = formattedAdd("Result: ");
const withDash = labeled(" - ");

console.log(withDash(5, 3)); // "Result: 5 - 3"


// Example 13: Practical Test Helper - Curried
const assertEquals = curry((testName, expected, actual) => {
    const pass = expected === actual;
    console.log(`${testName}: ${pass ? "✓" : "✗"}`);
    if (!pass) console.log(`  Expected: ${expected}, Got: ${actual}`);
    return pass;
});

const test1 = assertEquals("Add test");
const test1ExpectFive = test1(5);

test1ExpectFive(2 + 3); // ✓
test1ExpectFive(2 + 2); // ✗


// Example 14: Compose with Curried Functions
const getFullName = curry((first, last) => `${first} ${last}`);
const greet = curry((greeting, name) => `${greeting}, ${name}!`);

const getGreeting = (first, last) => {
    const fullName = getFullName(first, last);
    return greet("Hello")(fullName);
};

console.log(getGreeting("John", "Doe")); // "Hello, John Doe!"


// Example 15: Data Validation Pipeline with Compose
const isString = (x) => typeof x === "string";
const hasMinLength = curry((min, str) => str.length >= min);
const trim = (str) => str.trim();
const toUpperCase2 = (str) => str.toUpperCase();

const validateAndFormat = pipe(
    trim,
    toUpperCase2
);

console.log(validateAndFormat("  hello world  ")); // "HELLO WORLD"


// Example 16: Memoized Curried Function
const memoizedCurry = (() => {
    const cache = {};
    
    return curry((fn, a, b) => {
        const key = `${a}-${b}`;
        if (key in cache) {
            console.log(`Cache hit for ${key}`);
            return cache[key];
        }
        const result = fn(a, b);
        cache[key] = result;
        return result;
    });
})();

const memoAdd = memoizedCurry((a, b) => a + b);
console.log(memoAdd(5, 3)); // 8
console.log(memoAdd(5)(3)); // Cache hit


// Example 17: Compose Error Handling
const safeCompose = (...fns) => {
    return (x) => {
        try {
            return fns.reduceRight((acc, fn) => fn(acc), x);
        } catch (err) {
            console.log("Error in pipeline:", err.message);
            return null;
        }
    };
};

const parseJSON = (str) => JSON.parse(str);
const getProperty = (prop) => (obj) => obj[prop];

const composed2 = safeCompose(
    getProperty("name"),
    parseJSON
);

console.log(composed2('{"name": "test"}')); // "test"
console.log(composed2("invalid")); // null


// Example 18: Testing with Composition
function testComposition() {
    const testPipeline = pipe(
        (x) => x + 1,
        (x) => x * 2,
        (x) => x - 1
    );
    
    // (5 + 1) * 2 - 1 = 11
    console.assert(testPipeline(5) === 11, "Pipeline test failed");
    console.log("Composition test passed!");
}

testComposition();
