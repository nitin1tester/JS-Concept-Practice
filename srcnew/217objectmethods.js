/**
 * ADVANCED OBJECT METHODS: Manipulation & Inspection
 * 
 * Object.keys(), Object.values(), Object.entries():
 * - keys(): Array of object keys
 * - values(): Array of object values
 * - entries(): Array of [key, value] pairs
 * - Only own properties (not inherited)
 * - Useful for iteration and transformation
 * 
 * Object.assign():
 * - Copy properties from source to target
 * - Object.assign(target, ...sources)
 * - Shallow copy (nested objects not cloned)
 * - Returns target object
 * - Useful for merging configurations
 * 
 * Object.freeze():
 * - Prevent any modifications to object
 * - Cannot add, remove, or modify properties
 * - Immutability at object level
 * - Returns same object (frozen)
 * 
 * Object.seal():
 * - Prevent adding/removing properties
 * - Allow modifying existing properties
 * - Between freeze and mutable
 * - Returns same object
 * 
 * Object.getOwnPropertyNames():
 * - Get all property names (including non-enumerable)
 * - Symbol properties not included
 * 
 * Object.create():
 * - Create new object with specified prototype
 * - Already covered in prototypes file
 * 
 * Object.defineProperty():
 * - Define property with custom descriptor
 * - Can set getter/setter
 * - Control enumerability, configurability
 * 
 * WHY These Methods:
 * - Transformation: Convert object format
 * - Immutability: Protect objects
 * - Inspection: See object structure
 * - Configuration: Merge settings
 * - Protection: Seal/freeze critical data
 * 
 * WHERE Used:
 * - Data transformation
 * - Configuration merging
 * - API responses
 * - Immutable updates
 * - State management
 * 
 * Use-Cases in Testing:
 * - Convert response to array
 * - Merge test configurations
 * - Freeze test data
 * - Inspect object properties
 * - Mock object creation
 * 
 * WHERE: Data transformation, object manipulation
 */

// Example 1: Object.keys()
const user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

console.log(Object.keys(user)); // ["name", "age", "email"]


// Example 2: Object.values()
console.log(Object.values(user)); // ["Alice", 30, "alice@example.com"]


// Example 3: Object.entries()
console.log(Object.entries(user));
// [["name", "Alice"], ["age", 30], ["email", "alice@example.com"]]


// Example 4: Iteration with entries()
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}


// Example 5: Transform Object to Array
const config = {
    timeout: 5000,
    retries: 3,
    debug: true
};

const configArray = Object.entries(config).map(([key, value]) => ({
    setting: key,
    value: value
}));

console.log(configArray);


// Example 6: Object.assign() - Merge Objects
const defaults = {
    theme: "light",
    lang: "en",
    timeout: 5000
};

const userSettings = {
    theme: "dark",
    customFont: "Arial"
};

const merged = Object.assign({}, defaults, userSettings);
console.log(merged);
// { theme: "dark", lang: "en", timeout: 5000, customFont: "Arial" }


// Example 7: Object.assign() - Shallow Copy
const original = {
    name: "Original",
    nested: { value: 1 }
};

const copy = Object.assign({}, original);
copy.nested.value = 2;

console.log(original.nested.value); // 2 (shallow copy!)


// Example 8: Object.freeze() - Immutability
const frozenUser = Object.freeze({
    name: "Bob",
    age: 25
});

// frozenUser.name = "Alice"; // Fails silently (or error in strict mode)
// frozenUser.email = "bob@example.com"; // Fails silently
console.log(frozenUser.name); // "Bob"


// Example 9: Object.isFrozen() - Check if Frozen
console.log(Object.isFrozen(frozenUser)); // true
console.log(Object.isFrozen(user)); // false


// Example 10: Object.seal() - Restrict Structure
const sealedObj = Object.seal({
    x: 1,
    y: 2
});

sealedObj.x = 10; // OK - modify existing
console.log(sealedObj.x); // 10

// sealedObj.z = 3; // Fails silently - cannot add
console.log(sealedObj); // { x: 10, y: 2 }


// Example 11: Object.isSealed() - Check if Sealed
console.log(Object.isSealed(sealedObj)); // true


// Example 12: Object.defineProperty() - Custom Descriptor
const product = {};

Object.defineProperty(product, "price", {
    value: 99.99,
    writable: false,      // Cannot change
    enumerable: true,     // Shows in Object.keys()
    configurable: false   // Cannot delete
});

console.log(product.price); // 99.99
// product.price = 50; // Fails - not writable


// Example 13: Getter/Setter with defineProperty
const person = {};

let _age = 0;

Object.defineProperty(person, "age", {
    get() {
        console.log("Getting age");
        return _age;
    },
    set(value) {
        console.log("Setting age to", value);
        if (value < 0) throw new Error("Age cannot be negative");
        _age = value;
    }
});

person.age = 30; // Logs "Setting age to 30"
console.log(person.age); // Logs "Getting age" → 30


// Example 14: Object.getOwnPropertyDescriptor()
const obj = { x: 1 };

const descriptor = Object.getOwnPropertyDescriptor(obj, "x");
console.log(descriptor);
// { value: 1, writable: true, enumerable: true, configurable: true }


// Example 15: Object.getOwnPropertyNames() - Include Non-enumerable
const objWithNonEnum = {};
Object.defineProperty(objWithNonEnum, "hidden", {
    value: "secret",
    enumerable: false
});

console.log(Object.keys(objWithNonEnum)); // [] (hidden)
console.log(Object.getOwnPropertyNames(objWithNonEnum)); // ["hidden"]


// Example 16: Object.freeze() Deep Freeze
function deepFreeze(obj) {
    Object.freeze(obj);
    
    Object.values(obj).forEach(value => {
        if (typeof value === "object" && value !== null) {
            deepFreeze(value);
        }
    });
    
    return obj;
}

const deepObj = {
    user: { name: "Charlie", age: 28 },
    settings: { theme: "light" }
};

deepFreeze(deepObj);
// deepObj.user.name = "David"; // Fails - nested frozen


// Example 17: Merge Multiple Objects
function mergeObjects(...objects) {
    return Object.assign({}, ...objects);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 20, c: 3 };
const obj3 = { c: 30, d: 4 };

const merged2 = mergeObjects(obj1, obj2, obj3);
console.log(merged2); // { a: 1, b: 20, c: 30, d: 4 }


// Example 18: Testing with Object Methods
function testObjectMethods() {
    const testObj = { x: 1, y: 2, z: 3 };
    
    // Test keys
    console.assert(Object.keys(testObj).length === 3, "keys() failed");
    
    // Test values
    const vals = Object.values(testObj);
    console.assert(vals.includes(1) && vals.includes(2), "values() failed");
    
    // Test freeze
    const frozen = Object.freeze({});
    console.assert(Object.isFrozen(frozen), "freeze() failed");
    
    console.log("All object tests passed!");
}

testObjectMethods();


// Example 19: Configuration Defaults Pattern
const defaultConfig = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
    debug: false
};

function mergeConfig(userConfig) {
    // Freeze defaults, merge with user config
    return Object.assign({}, Object.freeze(defaultConfig), userConfig);
}

const customConfig = mergeConfig({
    timeout: 10000,
    customOption: "value"
});

console.log(customConfig);


// Example 20: Immutable Update Pattern
const state = Object.freeze({
    count: 0,
    items: []
});

function incrementCount(state) {
    return Object.assign({}, state, {
        count: state.count + 1
    });
}

const newState = incrementCount(state);
console.log(newState.count); // 1
console.log(state.count); // 0 (original unchanged)
