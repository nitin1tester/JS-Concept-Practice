/**
 * JSON & DATA SERIALIZATION: Parse, Stringify, Custom Handling
 * 
 * JSON (JavaScript Object Notation):
 * - Text format for data exchange
 * - Language-independent
 * - Human-readable
 * - Standard format for APIs
 * 
 * JSON.stringify():
 * - Convert object to JSON string
 * - JSON.stringify(value, replacer, space)
 * - Supports custom replacer function
 * - Pretty print with space parameter
 * 
 * JSON.parse():
 * - Parse JSON string to object
 * - JSON.parse(text, reviver)
 * - Supports custom reviver function
 * - Throws SyntaxError on invalid JSON
 * 
 * Replacer Function:
 * - Custom serialization logic
 * - Called for each property
 * - Can filter/transform values
 * - Signature: (key, value) => value
 * 
 * Reviver Function:
 * - Custom deserialization logic
 * - Called for each parsed value
 * - Can reconstruct complex types
 * - Signature: (key, value) => value
 * 
 * JSON-Serializable Types:
 * - Object: {}
 * - Array: []
 * - String: "text"
 * - Number: 42
 * - Boolean: true, false
 * - null: null
 * 
 * NOT Serializable:
 * - Functions (ignored)
 * - undefined (ignored)
 * - Symbols (ignored)
 * - Map, Set, Date (become string)
 * - BigInt (error without custom handler)
 * 
 * WHY JSON:
 * - Universal format
 * - Easy parsing
 * - Lightweight
 * - API standard
 * - Cross-language
 * 
 * WHERE Used:
 * - API responses
 * - Data persistence
 * - Data transmission
 * - Configuration
 * - Logging
 * 
 * Use-Cases in Testing:
 * - Mock API responses
 * - Serialize test objects
 * - Compare expected/actual
 * - Store test fixtures
 * 
 * WHERE: Data serialization, API integration
 * 
 * Common Patterns:
 * - Replacer for filtering
 * - Reviver for type reconstruction
 * - Custom toJSON methods
 * - Date/Set/Map serialization
 */

// Example 1: Basic stringify
const user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

const json = JSON.stringify(user);
console.log(json);
// "{"name":"Alice","age":30,"email":"alice@example.com"}"


// Example 2: Basic parse
const parsed = JSON.parse(json);
console.log(parsed.name); // "Alice"


// Example 3: Pretty Print (indentation)
const pretty = JSON.stringify(user, null, 2);
console.log(pretty);
// {
//   "name": "Alice",
//   "age": 30,
//   "email": "alice@example.com"
// }


// Example 4: Replacer Function - Filter Properties
const replacer = (key, value) => {
    if (key === "password") return undefined; // Exclude password
    return value;
};

const secure = JSON.stringify({
    username: "alice",
    password: "secret123"
}, replacer);

console.log(secure); // {"username":"alice"}


// Example 5: Replacer Function - Transform Values
const transformReplacer = (key, value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value;
};

const transformed = JSON.stringify({
    name: "alice",
    city: "new york"
}, transformReplacer);

console.log(transformed); // {"name":"ALICE","city":"NEW YORK"}


// Example 6: Replacer Array - Only Include Specific Keys
const allowedKeys = ["name", "email"];
const filtered = JSON.stringify(user, allowedKeys);
console.log(filtered); // {"name":"Alice","email":"alice@example.com"}


// Example 7: Custom toJSON Method
const account = {
    id: 123,
    balance: 1000,
    pin: "1234",
    toJSON() {
        return {
            id: this.id,
            balance: this.balance
            // pin excluded for security
        };
    }
};

const accountJson = JSON.stringify(account);
console.log(accountJson); // {"id":123,"balance":1000}


// Example 8: Reviver Function - Parse and Transform
const dateReplacer = (key, value) => {
    if (value && typeof value === "object" && value._type === "date") {
        return new Date(value.value);
    }
    return value;
};

const jsonWithDate = '{"date":{"_type":"date","value":"2024-01-01T00:00:00Z"}}';
const revived = JSON.parse(jsonWithDate, dateReplacer);
console.log(revived.date instanceof Date); // true


// Example 9: Reviver Function - Type Reconstruction
const typeReviver = (key, value) => {
    if (typeof value === "string" && value.startsWith("Date:")) {
        return new Date(value.substring(5));
    }
    return value;
};

const typeJson = '{"created":"Date:2024-01-01T00:00:00Z"}';
const typeRevived = JSON.parse(typeJson, typeReviver);
console.log(typeRevived.created instanceof Date); // true


// Example 10: Serializing Date Objects
const data = {
    name: "Project",
    created: new Date(),
    modified: new Date()
};

// Dates become strings by default
const dateJson = JSON.stringify(data);
console.log(dateJson);
// {"name":"Project","created":"2024-05-22T...Z","modified":"2024-05-22T...Z"}


// Example 11: Custom Serialization for Date
const dateData = {
    name: "Project",
    created: new Date("2024-01-01"),
    toJSON() {
        return {
            name: this.name,
            created: this.created.toISOString()
        };
    }
};

const customDateJson = JSON.stringify(dateData);
console.log(customDateJson);


// Example 12: Serializing Map
const mapData = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);

// Maps don't serialize directly
// JSON.stringify(mapData) → "{}"

// Custom serialization
const mapReplacer = (key, value) => {
    if (value instanceof Map) {
        return Array.from(value.entries());
    }
    return value;
};

const mapJson = JSON.stringify(mapData, mapReplacer);
console.log(mapJson); // [["key1","value1"],["key2","value2"]]


// Example 13: Serializing Set
const setData = new Set([1, 2, 3, 4, 5]);

const setReplacer = (key, value) => {
    if (value instanceof Set) {
        return Array.from(value);
    }
    return value;
};

const setJson = JSON.stringify(setData, setReplacer);
console.log(setJson); // [1,2,3,4,5]


// Example 14: Error Handling
function safeJsonParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (err) {
        console.error("Invalid JSON:", err.message);
        return null;
    }
}

console.log(safeJsonParse('{"valid": "json"}')); // OK
console.log(safeJsonParse("invalid json")); // null


// Example 15: Deep Clone with JSON
const original = {
    name: "Original",
    nested: { value: 1 },
    array: [1, 2, 3]
};

// Note: Functions and undefined will be lost
const cloned = JSON.parse(JSON.stringify(original));
cloned.nested.value = 999;

console.log(original.nested.value); // 1 (unchanged)


// Example 16: Circular Reference Handling
const circular = { name: "test" };
circular.self = circular; // Circular reference

// JSON.stringify(circular); // TypeError: circular structure

// Fix with replacer
const circularReplacer = () => {
    const seen = new WeakSet();
    
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return undefined; // Skip circular reference
            }
            seen.add(value);
        }
        return value;
    };
};

const circularJson = JSON.stringify(circular, circularReplacer());
console.log(circularJson); // {"name":"test"}


// Example 17: API Response Parsing
async function parseApiResponse(response) {
    try {
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Failed to parse response:", err);
        return null;
    }
}


// Example 18: Testing with JSON
function testJsonSerialization() {
    const obj = { x: 1, y: 2 };
    
    // Test stringify
    const json = JSON.stringify(obj);
    console.assert(json.includes("x"), "Should include x");
    
    // Test parse
    const parsed = JSON.parse(json);
    console.assert(parsed.x === 1, "Parse test failed");
    
    // Test roundtrip
    const roundtrip = JSON.parse(JSON.stringify(obj));
    console.assert(JSON.stringify(roundtrip) === JSON.stringify(obj), "Roundtrip failed");
    
    console.log("All JSON tests passed!");
}

testJsonSerialization();


// Example 19: Secure Serialization
function secureSerialize(obj, sensitiveKeys = []) {
    const replacer = (key, value) => {
        if (sensitiveKeys.includes(key)) {
            return "***REDACTED***";
        }
        return value;
    };
    
    return JSON.stringify(obj, replacer, 2);
}

const user2 = {
    id: 1,
    name: "Alice",
    password: "secret",
    ssn: "123-45-6789"
};

console.log(secureSerialize(user2, ["password", "ssn"]));


// Example 20: Common JSON Patterns
const jsonPatterns = {
    // API Request
    apiRequest: { method: "POST", body: JSON.stringify({ user: "alice" }) },
    
    // API Response
    apiResponse: JSON.parse('{"status": "success", "data": {}}'),
    
    // Config File
    configFile: JSON.stringify({ theme: "dark", lang: "en" }, null, 2),
    
    // Local Storage
    localStorage: JSON.stringify({ userPrefs: { ... } }),
    
    // Logging
    loggingEvent: JSON.stringify({ timestamp: new Date().toISOString(), level: "error" })
};

console.log("JSON patterns ready for use");
