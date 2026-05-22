/**
 * PROXY & REFLECT API: Meta-programming & Intercepting Operations
 * 
 * What is a Proxy:
 * - Wrapper around object that intercepts operations
 * - "Traps" allow custom behavior on operations
 * - Can log, validate, transform before operation
 * - Syntax: new Proxy(target, handler)
 * 
 * Target & Handler:
 * - target: Object being wrapped
 * - handler: Object with trap methods
 * - Traps: get, set, has, deleteProperty, apply, etc.
 * 
 * Common Traps:
 * - get(target, prop): Property access
 * - set(target, prop, value): Property assignment
 * - has(target, prop): 'in' operator
 * - deleteProperty(target, prop): delete operator
 * - apply(target, thisArg, args): Function call
 * - construct(target, args): new operator
 * - getOwnPropertyDescriptor: Property descriptor
 * - defineProperty: Property creation
 * 
 * What is Reflect:
 * - API for meta-programming operations
 * - Mirrors proxy traps
 * - Reflect.get(), Reflect.set(), Reflect.has()
 * - Safer and more consistent than direct operations
 * 
 * WHY Proxy:
 * - Validation before operation
 * - Logging access patterns
 * - Performance monitoring
 * - Type coercion/conversion
 * - Access control
 * - Lazy loading
 * 
 * WHERE Used:
 * - Input validation
 * - API contracts enforcement
 * - Performance monitoring
 * - Debugging/tracing
 * - ORM (Object-Relational Mapping)
 * - Reactive frameworks
 * 
 * Use-Cases in Testing:
 * - Mock object behavior
 * - Spy on property access
 * - Validate test data
 * - Track method calls
 * - Assert modification restrictions
 * 
 * WHERE: Meta-programming, validation, monitoring
 * 
 * Performance Note:
 * - Proxies add overhead
 * - Use only when necessary
 * - Reflect is generally faster
 */

// Example 1: Simple Proxy - Log Property Access
const target = { name: "Alice", age: 30 };

const handler = {
    get(target, prop) {
        console.log(`Accessing property: ${prop}`);
        return target[prop];
    }
};

const proxy = new Proxy(target, handler);
console.log(proxy.name); // "Accessing property: name" → "Alice"
console.log(proxy.age); // "Accessing property: age" → 30


// Example 2: Proxy - Validation on Set
const user = {};

const validateProxy = new Proxy(user, {
    set(target, prop, value) {
        if (prop === "age" && typeof value !== "number") {
            throw new TypeError("Age must be a number");
        }
        if (prop === "email" && !value.includes("@")) {
            throw new Error("Invalid email");
        }
        target[prop] = value;
        return true;
    }
});

validateProxy.age = 25; // OK
validateProxy.email = "alice@example.com"; // OK
// validateProxy.age = "invalid"; // Throws TypeError
// validateProxy.email = "invalid"; // Throws Error


// Example 3: Proxy - Property Interception
const config = {};

const configProxy = new Proxy(config, {
    get(target, prop) {
        if (prop === "apiUrl") {
            return target.apiUrl || "https://api.example.com";
        }
        return target[prop];
    },
    
    set(target, prop, value) {
        if (prop === "apiUrl") {
            console.log(`Updating API URL to: ${value}`);
        }
        target[prop] = value;
        return true;
    }
});

console.log(configProxy.apiUrl); // Default value
configProxy.apiUrl = "https://new-api.com"; // Logs update


// Example 4: Proxy - Function Interception
function add(a, b) {
    return a + b;
}

const funcProxy = new Proxy(add, {
    apply(target, thisArg, args) {
        console.log(`Calling function with args: ${args}`);
        console.log(`Result: ${target(...args)}`);
        return target(...args);
    }
});

funcProxy(5, 3); // Logs call and result


// Example 5: Proxy - Constructor Interception
function User(name, age) {
    this.name = name;
    this.age = age;
}

const UserProxy = new Proxy(User, {
    construct(target, args) {
        console.log(`Creating instance with args: ${args}`);
        return new target(...args);
    }
});

const user1 = new UserProxy("Bob", 25);
console.log(user1.name); // "Bob"


// Example 6: Proxy - Check Property Existence
const data = { x: 1, y: 2 };

const dataProxy = new Proxy(data, {
    has(target, prop) {
        console.log(`Checking if ${prop} exists`);
        return prop in target;
    }
});

console.log("x" in dataProxy); // Logs check → true


// Example 7: Proxy - Delete Property
const obj = { a: 1, b: 2 };

const deleteProxy = new Proxy(obj, {
    deleteProperty(target, prop) {
        console.log(`Deleting property: ${prop}`);
        if (prop === "a") {
            throw new Error("Cannot delete property a");
        }
        delete target[prop];
        return true;
    }
});

// delete deleteProxy.b; // OK
// delete deleteProxy.a; // Throws error


// Example 8: Proxy - Track Access Pattern
const analytics = {};
let accessCount = 0;

const analyticsProxy = new Proxy(analytics, {
    get(target, prop) {
        accessCount++;
        console.log(`Access #${accessCount}: ${prop}`);
        return target[prop];
    }
});

analyticsProxy.user;
analyticsProxy.page;
analyticsProxy.action;
console.log(`Total accesses: ${accessCount}`); // 3


// Example 9: Reflect API - Safer Operations
const obj2 = { x: 1 };

// Using direct operations (risky)
const val1 = obj2.x;

// Using Reflect (safer)
const val2 = Reflect.get(obj2, "x");

// Reflect.set
Reflect.set(obj2, "y", 2);

// Reflect.has
console.log(Reflect.has(obj2, "x")); // true

// Reflect.deleteProperty
Reflect.deleteProperty(obj2, "x");

// Reflect.ownKeys
console.log(Reflect.ownKeys(obj2)); // ['y']


// Example 10: Proxy + Reflect Together
const handler2 = {
    get(target, prop) {
        console.log(`Getting ${prop}`);
        return Reflect.get(target, prop);
    },
    
    set(target, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        return Reflect.set(target, prop, value);
    }
};

const proxied = new Proxy({ a: 1 }, handler2);
proxied.a; // Gets a
proxied.b = 2; // Sets b


// Example 11: Proxy - Type Validation
const typedObj = new Proxy({}, {
    set(target, prop, value) {
        if (prop === "count" && typeof value !== "number") {
            throw new TypeError("count must be number");
        }
        return Reflect.set(target, prop, value);
    }
});

typedObj.count = 5; // OK
// typedObj.count = "invalid"; // Error


// Example 12: Proxy - Lazy Property Loading
const lazyProxy = new Proxy({}, {
    get(target, prop) {
        if (!(prop in target)) {
            console.log(`Loading ${prop} lazily...`);
            target[prop] = `loaded_${prop}`;
        }
        return target[prop];
    }
});

console.log(lazyProxy.data); // Loads lazily
console.log(lazyProxy.data); // Already loaded


// Example 13: Testing Mock with Proxy
function createMock(methods = {}) {
    return new Proxy({}, {
        get(target, prop) {
            if (prop in methods) {
                return methods[prop];
            }
            return () => `Mock called: ${prop}`;
        }
    });
}

const mock = createMock({
    greet: () => "Hello from mock"
});

console.log(mock.greet()); // "Hello from mock"
console.log(mock.other()); // "Mock called: other"


// Example 14: Proxy - Prevent Property Pollution
class SafeContainer {
    constructor() {
        return new Proxy(this, {
            set(target, prop, value) {
                if (prop === "constructor") {
                    throw new Error("Cannot modify constructor");
                }
                return Reflect.set(target, prop, value);
            }
        });
    }
}

const safe = new SafeContainer();
safe.data = "ok"; // OK
// safe.constructor = MyClass; // Error


// Example 15: Proxy - Performance Monitoring
function monitored(fn) {
    let callCount = 0;
    let totalTime = 0;
    
    return new Proxy(fn, {
        apply(target, thisArg, args) {
            const start = performance.now();
            const result = target(...args);
            const time = performance.now() - start;
            
            callCount++;
            totalTime += time;
            
            console.log(`Call #${callCount}: ${time.toFixed(2)}ms`);
            return result;
        }
    });
}

const slowFunc = monitored(function() {
    for (let i = 0; i < 1000000; i++) {}
    return "done";
});

slowFunc(); // Monitored call
slowFunc(); // Monitored call
