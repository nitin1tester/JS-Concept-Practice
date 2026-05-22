/**
 * SYMBOLS & META-PROGRAMMING: Unique Identifiers & Object Introspection
 * 
 * What is a Symbol:
 * - Primitive data type (like string, number)
 * - Always unique (no two symbols are equal)
 * - Used as object keys
 * - Hidden in standard loops (Symbol.iterator hidden)
 * - Cannot be coerced to string
 * 
 * Creating Symbols:
 * - Symbol(description) - create unique symbol
 * - Description is optional, for debugging only
 * - Each Symbol() call creates new unique symbol
 * - Symbol.for(key) - global symbol registry
 * 
 * Symbol Uses:
 * - Object keys (hidden properties)
 * - Symbol.iterator - make object iterable
 * - Symbol.toStringTag - custom type
 * - Symbol.hasInstance - custom instanceof
 * - Symbol.toPrimitive - custom type conversion
 * 
 * WHY Symbols:
 * - Truly unique identifiers
 * - Prevent property collisions
 * - Hidden from standard iteration
 * - Meta-programming (customize behavior)
 * - Avoid naming conflicts in libraries
 * 
 * WHERE Used:
 * - Making objects iterable
 * - Internal/hidden properties
 * - Library plugins
 * - Preventing property conflicts
 * - Type customization
 * 
 * Well-known Symbols:
 * - Symbol.iterator - make iterable
 * - Symbol.asyncIterator - async iteration
 * - Symbol.toStringTag - type in toString()
 * - Symbol.hasInstance - custom instanceof
 * - Symbol.toPrimitive - primitive conversion
 * - Symbol.match - regex matching
 * - Symbol.replace - string replace
 * 
 * Use-Cases in Testing:
 * - Hidden test properties
 * - Mock iterators
 * - Custom type checking
 * - Private test data
 * 
 * WHERE: Meta-programming, unique IDs, hidden properties
 */

// Example 1: Creating Symbols
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false - each Symbol is unique
console.log(typeof sym1); // "symbol"
console.log(sym1.toString()); // "Symbol(id)"


// Example 2: Symbols as Object Keys
const user = {};
const userId = Symbol("userId");

user[userId] = 12345;
user.name = "Alice";

console.log(user.name); // "Alice"
console.log(user[userId]); // 12345
console.log(Object.keys(user)); // ["name"] - Symbol hidden!
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(userId)]


// Example 3: Hidden Properties with Symbols
const employee = {
    name: "Bob",
    [Symbol("salary")]: 50000, // Hidden from keys()
    [Symbol("ssn")]: "123-45-6789"
};

// Normal iteration skips symbols
for (const key in employee) {
    console.log(key); // Only "name"
}

// Get symbol properties
const symbols = Object.getOwnPropertySymbols(employee);
symbols.forEach(sym => {
    console.log(`${sym.toString()}: ${employee[sym]}`);
});


// Example 4: Symbol.iterator - Make Object Iterable
class Counter {
    constructor(max) {
        this.max = max;
    }
    
    [Symbol.iterator]() {
        let count = 0;
        return {
            next: () => {
                if (count < this.max) {
                    return { value: count++, done: false };
                }
                return { done: true };
            }
        };
    }
}

const counter = new Counter(3);
for (const num of counter) {
    console.log(num); // 0, 1, 2
}


// Example 5: Symbol.toStringTag - Custom Type Name
class CustomType {
    get [Symbol.toStringTag]() {
        return "CustomType";
    }
}

const custom = new CustomType();
console.log(Object.prototype.toString.call(custom)); // "[object CustomType]"


// Example 6: Symbol.hasInstance - Custom instanceof
class MyClass {
    static [Symbol.hasInstance](obj) {
        return obj.special === true;
    }
}

const obj1 = { special: true };
const obj2 = { special: false };

console.log(obj1 instanceof MyClass); // true
console.log(obj2 instanceof MyClass); // false


// Example 7: Symbol.toPrimitive - Custom Type Conversion
class Money {
    constructor(amount) {
        this.amount = amount;
    }
    
    [Symbol.toPrimitive](hint) {
        if (hint === "number") {
            return this.amount;
        }
        if (hint === "string") {
            return `$${this.amount}`;
        }
        return true;
    }
}

const money = new Money(100);
console.log(+money); // 100 (number)
console.log(money + ""); // "$100" (string)
console.log(money == true); // true (boolean)


// Example 8: Global Symbol Registry
const globalSym1 = Symbol.for("app.id");
const globalSym2 = Symbol.for("app.id");

console.log(globalSym1 === globalSym2); // true - same symbol!
console.log(Symbol.keyFor(globalSym1)); // "app.id"


// Example 9: Symbol for Private Fields Alternative
class Account {
    constructor(balance) {
        this._balance = Symbol("balance");
        this[this._balance] = balance;
    }
    
    getBalance() {
        return this[this._balance];
    }
    
    deposit(amount) {
        this[this._balance] += amount;
    }
}

const account = new Account(1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account._balance in account); // false (hidden)


// Example 10: Symbol.asyncIterator - Async Iteration
class AsyncCounter {
    constructor(max) {
        this.max = max;
    }
    
    [Symbol.asyncIterator]() {
        let count = 0;
        return {
            next: async () => {
                await new Promise(resolve => setTimeout(resolve, 100));
                if (count < this.max) {
                    return { value: count++, done: false };
                }
                return { done: true };
            }
        };
    }
}

async function runAsync() {
    const asyncCounter = new AsyncCounter(3);
    for await (const num of asyncCounter) {
        console.log("Async:", num); // 0, 1, 2
    }
}


// Example 11: Symbol for Preventing Collisions
class Plugin {
    constructor() {
        this._id = Symbol("pluginId");
        this[this._id] = Math.random();
    }
    
    getId() {
        return this[this._id];
    }
}

const plugin1 = new Plugin();
const plugin2 = new Plugin();

console.log(plugin1.getId() !== plugin2.getId()); // Different IDs


// Example 12: Symbol.match - Custom Regex Matching
const customRegex = {
    [Symbol.match](string) {
        return "Custom match: " + string;
    }
};

console.log(String.prototype.match.call("test", customRegex));


// Example 13: Testing with Symbols
class TestableClass {
    constructor() {
        this.publicProp = "public";
        this[Symbol("testProp")] = "test-only";
    }
    
    getTestProperty() {
        const testSym = Object.getOwnPropertySymbols(this)[0];
        return this[testSym];
    }
}

const testObj = new TestableClass();
console.log(testObj.getTestProperty()); // "test-only"


// Example 14: Symbol Comparison
const sym3 = Symbol("compare");
const sym4 = Symbol("compare");
const sym5 = sym3;

console.log(sym3 === sym4); // false - different symbols
console.log(sym3 === sym5); // true - same reference
console.log(sym3 == sym4); // false


// Example 15: Symbols in Metadata
const eventName = Symbol("eventName");
const eventHandlers = Symbol("handlers");

class EventEmitter {
    constructor() {
        this[eventHandlers] = new Map();
    }
    
    on(event, handler) {
        if (!this[eventHandlers].has(event)) {
            this[eventHandlers].set(event, []);
        }
        this[eventHandlers].get(event).push(handler);
    }
    
    emit(event, data) {
        const handlers = this[eventHandlers].get(event) || [];
        handlers.forEach(handler => handler(data));
    }
}

const emitter = new EventEmitter();
emitter.on("test", (data) => console.log("Test:", data));
emitter.emit("test", "hello"); // "Test: hello"
