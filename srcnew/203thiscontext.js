/**
 * THIS BINDING & CONTEXT: call(), apply(), bind()
 * 
 * Understanding 'this':
 * - 'this' refers to the context object calling the method
 * - Value depends on HOW function is called, not WHERE defined
 * - Different in arrow functions vs regular functions
 * - Global context: 'this' = window (browser) or global (Node.js)
 * 
 * Method Context:
 * - obj.method() → 'this' = obj
 * - func() → 'this' = global context (or undefined in strict mode)
 * - new Class() → 'this' = new instance
 * 
 * WHY Different Binding Methods:
 * - call(): Execute function with specific 'this' and arguments
 * - apply(): Execute function with specific 'this' and array of arguments
 * - bind(): Create new function with 'this' permanently bound
 * 
 * WHERE Each is Used:
 * - call(): Function borrowing, explicit context
 * - apply(): When arguments are in array, variadic functions
 * - bind(): Event handlers, callbacks, method extraction
 * 
 * Use-Cases in Testing:
 * - Binding test methods to test instances
 * - Spy patterns: Binding spy to original context
 * - Mock objects: Simulating object behavior
 * - Test isolation: Preventing 'this' context leaks
 * - Page Objects: Binding methods to page instance
 * 
 * WHERE: Context management, function borrowing, callbacks
 * 
 * Key Differences:
 * - call(): Executes immediately, comma-separated args
 * - apply(): Executes immediately, array of args
 * - bind(): Returns new function, does NOT execute immediately
 */

// Example 1: Understanding 'this' in Methods
const person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};

person.greet(); // "Hello, I am Alice"


// Example 2: Problem - Losing 'this' Context
const person1 = {
    name: "Bob",
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};

const greetFunc = person1.greet;
greetFunc(); // "Hello, I am undefined" (lost context!)


// Solution: Using bind()
const boundGreet = person1.greet.bind(person1);
boundGreet(); // "Hello, I am Bob"


// Example 3: call() - Borrow Method from Another Object
const person2 = { name: "Charlie" };
const person3 = { name: "Diana" };

function introduce(greeting, punctuation) {
    console.log(`${greeting}, I am ${this.name}${punctuation}`);
}

introduce.call(person2, "Hi", "!"); // "Hi, I am Charlie!"
introduce.call(person3, "Hey", "."); // "Hey, I am Diana."


// Example 4: apply() - Borrow with Array Arguments
const numbers = [5, 6, 2, 8, 1];
const max = Math.max.apply(null, numbers);
console.log(max); // 8

// Using spread operator (modern alternative)
const max2 = Math.max(...numbers);
console.log(max2); // 8


// Example 5: bind() - Permanent Context Binding
const car = {
    brand: "Toyota",
    getInfo: function(year) {
        return `${year} ${this.brand}`;
    }
};

// Without bind - loses context in callback
setTimeout(() => console.log(car.getInfo(2023)), 1000);
// Problem: need to pass year somehow

// With bind - preserves context
const boundGetInfo = car.getInfo.bind(car);
setTimeout(() => console.log(boundGetInfo(2023)), 1000);


// Example 6: bind() with Partial Arguments
const multiply = function(a, b, c) {
    return a * b * c;
};

const multiplyBy2 = multiply.bind(null, 2);
console.log(multiplyBy2(3, 4)); // 2 * 3 * 4 = 24


// Example 7: Arrow Functions - Lexical 'this'
const obj = {
    name: "Test",
    regularMethod: function() {
        console.log(this.name); // obj
        
        setTimeout(function() {
            console.log(this.name); // undefined (lost context)
        }, 100);
        
        setTimeout(() => {
            console.log(this.name); // "Test" (arrow inherits 'this')
        }, 100);
    }
};


// Example 8: Testing Pattern - Binding Spy
class TestRunner {
    testsPassed = 0;
    testsFailed = 0;
    
    recordPass() {
        this.testsPassed++;
        console.log(`Passed: ${this.testsPassed}`);
    }
    
    recordFail() {
        this.testsFailed++;
        console.log(`Failed: ${this.testsFailed}`);
    }
}

const runner = new TestRunner();

// Without bind - 'this' would be undefined
const boundPass = runner.recordPass.bind(runner);
const boundFail = runner.recordFail.bind(runner);

boundPass(); // Passed: 1
boundFail(); // Failed: 1
boundPass(); // Passed: 2


// Example 9: Array Method Callbacks - Context
const user = {
    name: "Eve",
    friends: ["Alice", "Bob", "Charlie"],
    listFriends: function() {
        // 'this' in forEach callback would normally be undefined
        this.friends.forEach(function(friend) {
            // Need bind or arrow function
            console.log(`${this.name} knows ${friend}`);
        }.bind(this));
    }
};

user.listFriends();


// Example 10: call() vs apply() vs bind()
function greetUser(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person4 = { name: "Frank" };

// call - immediate execution, individual args
greetUser.call(person4, "Hello", "!");

// apply - immediate execution, args as array
greetUser.apply(person4, ["Hi", "."]);

// bind - delayed execution, returns new function
const boundGreet2 = greetUser.bind(person4, "Hey", "?");
boundGreet2(); // Executes later
