/**
 * HIGHER-ORDER FUNCTIONS: Functions Operating on Functions
 * 
 * What is a Higher-Order Function:
 * - Function that takes function(s) as parameter
 * - Or returns a function
 * - Enables functional programming
 * - Core to functional patterns
 * 
 * Types of HOF:
 * 1. Function as argument (callback, transformer)
 * 2. Function as return value (factory, wrapper)
 * 3. Both (advanced patterns)
 * 
 * Common HOF Patterns:
 * - map, filter, reduce (array methods)
 * - setTimeout, addEventListener (callbacks)
 * - Promise chains (.then, .catch)
 * - Decorators, middleware
 * 
 * WHY Higher-Order Functions:
 * - Reusable abstractions
 * - Compose behavior
 * - DRY principle
 * - Flexible algorithms
 * - Functional composition
 * 
 * WHERE Used:
 * - Array transformations
 * - Event handling
 * - Async patterns
 * - Decorators
 * - Middleware
 * - Functional programming
 * 
 * Use-Cases in Testing:
 * - Test utilities that take functions
 * - Mock function generators
 * - Spy/stub creation
 * - Test data generators
 * - Assertion helpers
 * 
 * WHERE: Functional programming, abstraction, composition
 * 
 * Key Benefits:
 * - Separation of concerns
 * - Testability
 * - Code reuse
 * - Flexibility
 */

// Example 1: Function as Argument
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(5, 3, add)); // 8
console.log(applyOperation(5, 3, multiply)); // 15


// Example 2: Filter - HOF
const numbers = [1, 2, 3, 4, 5, 6];

const isEven = (n) => n % 2 === 0;
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // [2, 4, 6]


// Example 3: Map - HOF
const double = (n) => n * 2;
const doubled = numbers.map(double);
console.log(doubled); // [2, 4, 6, 8, 10, 12]


// Example 4: Reduce - HOF
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 21


// Example 5: Function Returning Function
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy10 = multiplyBy(10);

console.log(multiplyBy2(5)); // 10
console.log(multiplyBy10(5)); // 50


// Example 6: Adder Factory
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(3)); // 8
console.log(add10(3)); // 13


// Example 7: Function Composition HOF
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const addOne = (n) => n + 1;
const square = (n) => n * n;

const addOneAndSquare = compose(square, addOne);
console.log(addOneAndSquare(3)); // (3 + 1)^2 = 16


// Example 8: Array Method Chaining
const data = [1, 2, 3, 4, 5];

const result = data
    .filter(n => n > 2)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);

console.log(result); // (3*2) + (4*2) + (5*2) = 24


// Example 9: Decorator Pattern with HOF
function makeLoggingFunction(fn, name) {
    return function(...args) {
        console.log(`Calling ${name} with args:`, args);
        const result = fn(...args);
        console.log(`${name} returned:`, result);
        return result;
    };
}

const multiply2 = (a, b) => a * b;
const loggedMultiply = makeLoggingFunction(multiply2, "multiply");

loggedMultiply(5, 3);
// "Calling multiply with args: [5, 3]"
// "multiply returned: 15"


// Example 10: Memoization HOF
function memoizeHOF(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            console.log("Cache hit");
            return cache[key];
        }
        
        console.log("Computing...");
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const memoFib = memoizeHOF(fibonacci);
console.log(memoFib(5)); // Computing...
console.log(memoFib(5)); // Cache hit


// Example 11: Retry HOF
function withRetry(fn, maxRetries = 3) {
    return async function(...args) {
        for (let i = 0; i < maxRetries; i++) {
            try {
                return await fn(...args);
            } catch (err) {
                if (i === maxRetries - 1) throw err;
                console.log(`Retry ${i + 1}...`);
            }
        }
    };
}


// Example 12: Throttle/Debounce as HOF
function throttleHOF(fn, interval) {
    let lastCall = 0;
    
    return function(...args) {
        const now = Date.now();
        
        if (now - lastCall >= interval) {
            fn(...args);
            lastCall = now;
        }
    };
}

const logMouseMove = throttleHOF(
    (e) => console.log("Mouse at", e),
    500
);


// Example 13: Pipe HOF
function pipe(...functions) {
    return function(value) {
        return functions.reduce((acc, fn) => fn(acc), value);
    };
}

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const subtract = (x) => x - 1;

const pipedFunc = pipe(addTwo, multiplyByThree, subtract);
console.log(pipedFunc(5)); // ((5 + 2) * 3) - 1 = 20


// Example 14: Partial Application HOF
function partial(fn, ...boundArgs) {
    return function(...args) {
        return fn(...boundArgs, ...args);
    };
}

function greet(greeting, name) {
    return `${greeting}, ${name}!`;
}

const greetPolite = partial(greet, "Good morning");
console.log(greetPolite("Alice")); // "Good morning, Alice!"


// Example 15: Conditional HOF
function when(predicate, fn) {
    return function(...args) {
        if (predicate(...args)) {
            return fn(...args);
        }
    };
}

const isPositive = (n) => n > 0;
const logPositive = when(isPositive, (n) => console.log("Positive:", n));

logPositive(5); // "Positive: 5"
logPositive(-5); // (nothing)


// Example 16: Once HOF - Execute Only Once
function once(fn) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
}

const initialize = once(() => {
    console.log("Initializing...");
    return "initialized";
});

console.log(initialize()); // "Initializing..."
console.log(initialize()); // (no log, returns cached)


// Example 17: Array Flattening with HOF
function flatMap(arr, fn) {
    return arr.reduce((acc, item) => {
        const mapped = fn(item);
        return acc.concat(Array.isArray(mapped) ? mapped : [mapped]);
    }, []);
}

const data2 = [1, 2, 3];
const result2 = flatMap(data2, (n) => [n, n * 2]);
console.log(result2); // [1, 2, 2, 4, 3, 6]


// Example 18: Grouping with HOF
function groupBy(arr, fn) {
    return arr.reduce((acc, item) => {
        const key = fn(item);
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

const byAge = groupBy(people, (p) => p.age);
console.log(byAge);
// { 25: [...], 30: [...] }


// Example 19: Testing Utilities with HOF
function createAssertion(predicate, message) {
    return function(value) {
        if (!predicate(value)) {
            throw new Error(message);
        }
        return value;
    };
}

const assertPositive = createAssertion(
    (n) => n > 0,
    "Expected positive number"
);

try {
    assertPositive(5); // OK
    assertPositive(-1); // Throws
} catch (err) {
    console.log(err.message);
}


// Example 20: Compose Handlers
function createMiddleware(...handlers) {
    return function(context) {
        let index = 0;
        
        function next() {
            if (index < handlers.length) {
                handlers[index++](context, next);
            }
        }
        
        next();
    };
}

const logMiddleware = (context, next) => {
    console.log("Log:", context);
    next();
};

const validateMiddleware = (context, next) => {
    console.log("Validate:", context);
    next();
};

const middleware = createMiddleware(logMiddleware, validateMiddleware);
middleware({ user: "test" });
