/**
 * ========================================
 * CONCEPT: THIS BINDING
 * ========================================
 * 
 * The `this` keyword refers to the object that is executing the function.
 * Its value depends on HOW the function is called, not WHERE it's defined.
 * This is one of the most confusing concepts in JavaScript.
 */

// ========== 1. GLOBAL THIS ==========
/**
 * In global scope, `this` refers to the global object:
 * - In browsers: `window`
 * - In Node.js: `global` (or `globalThis` in modern versions)
 */

// In browser
// console.log(this); // window

// In Node.js
// console.log(this); // global

// In strict mode, global this is not accessible directly

// ========== 2. THIS IN OBJECT METHODS ==========
/**
 * When a function is called as a method of an object,
 * `this` refers to the object that owns the method.
 */

const person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, I'm " + this.name);
  }
};

person.greet(); // this = person

// ========== 3. THIS IN REGULAR FUNCTIONS ==========
/**
 * When a function is called as a standalone function (not as a method),
 * `this` refers to the global object (or undefined in strict mode).
 */

function regularFunction() {
  console.log(this); // In strict mode: undefined, In non-strict: global object
}

regularFunction();

// ========== 4. LOSING THIS CONTEXT ==========
/**
 * A common mistake is losing the `this` context when passing
 * a method as a callback or extracting it from an object.
 */

const user = {
  name: "Bob",
  displayName: function() {
    console.log(this.name); // Expects 'Bob'
  }
};

user.displayName(); // "Bob" - works

const displayFunc = user.displayName;
// displayFunc(); // undefined or error (this is no longer user)

// Solution 1: Arrow function (lexical this)
const displayFunc2 = () => user.displayName();
displayFunc2(); // "Bob" - works

// Solution 2: bind()
const displayFunc3 = user.displayName.bind(user);
displayFunc3(); // "Bob" - works

// ========== 5. ARROW FUNCTIONS AND THIS ==========
/**
 * Arrow functions do NOT have their own `this`.
 * They inherit `this` from the enclosing lexical context.
 * This makes them useful for methods in objects and callbacks.
 */

const obj1 = {
  name: "Object 1",
  regularMethod: function() {
    console.log("Regular:", this.name); // this = obj1
    
    // Arrow function inherits this from regularMethod
    const arrowFunc = () => {
      console.log("Arrow:", this.name); // this = obj1 (inherited)
    };
    arrowFunc();
  },
  arrowMethod: () => {
    console.log("Arrow method:", this.name); // this = global (inherited from global scope)
  }
};

obj1.regularMethod(); // Regular: Object 1, Arrow: Object 1
obj1.arrowMethod();   // Arrow method: undefined

// ========== 6. CALL(), APPLY(), AND BIND() ==========
/**
 * These methods allow you to explicitly set the `this` context
 * when calling a function.
 */

const person1 = {
  name: "Charlie",
  greet: function(greeting) {
    return greeting + ", " + this.name;
  }
};

const person2 = {
  name: "Diana"
};

// call(): Invoke function with specific this and arguments
console.log(person1.greet.call(person2, "Hi")); // "Hi, Diana"

// apply(): Like call, but arguments are passed as an array
console.log(person1.greet.apply(person2, ["Hello"])); // "Hello, Diana"

// bind(): Returns a new function with `this` permanently bound
const greetDiana = person1.greet.bind(person2);
console.log(greetDiana("Hey")); // "Hey, Diana"

// ========== 7. EXPLICIT BINDING WITH CALL ==========
/**
 * call(thisArg, arg1, arg2, ...)
 * Calls the function immediately with the specified `this` and arguments.
 */

function introduce(greeting, punctuation) {
  return greeting + ", I'm " + this.name + punctuation;
}

const developer = { name: "Eve" };

console.log(introduce.call(developer, "Hi", "!")); // "Hi, I'm Eve!"

// ========== 8. EXPLICIT BINDING WITH APPLY ==========
/**
 * apply(thisArg, [arg1, arg2, ...])
 * Like call, but arguments are in an array.
 * Useful for spreading arguments from an array.
 */

function sum(a, b, c) {
  console.log(this.name + " calculated: " + (a + b + c));
}

const calculator = { name: "Calculator" };

sum.apply(calculator, [1, 2, 3]); // "Calculator calculated: 6"

// Real use case: Apply Math.max to an array
const numbers = [5, 2, 8, 1, 9];
const max = Math.max.apply(null, numbers); // 9

// ========== 9. EXPLICIT BINDING WITH BIND ==========
/**
 * bind(thisArg, arg1, arg2, ...)
 * Returns a new function with `this` bound permanently.
 * Does NOT call the function immediately.
 */

function sayHello(greeting) {
  return greeting + " " + this.name;
}

const person3 = { name: "Frank" };
const greetFrank = sayHello.bind(person3, "Hello");

console.log(greetFrank()); // "Hello Frank"

// bind is useful for:
// 1. Event handlers
// 2. Callbacks
// 3. setTimeout/setInterval

// Event handler example:
// const button = document.querySelector('button');
// button.addEventListener('click', person.method.bind(person));

// ========== 10. THIS IN CONSTRUCTOR FUNCTIONS ==========
/**
 * When a function is called with the `new` keyword,
 * `this` refers to the newly created object.
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.describe = function() {
    return this.name + " is " + this.age + " years old";
  };
}

const person4 = new Person("Grace", 25);
console.log(person4.describe()); // "Grace is 25 years old"
console.log(this === person4); // false (this here is global)

// ========== 11. THIS IN NESTED FUNCTIONS ==========
/**
 * In nested functions, `this` can be tricky.
 * Each function has its own `this` based on how it's called.
 */

const obj2 = {
  name: "Object 2",
  outer: function() {
    console.log("Outer this.name:", this.name); // Object 2
    
    function inner() {
      console.log("Inner this.name:", this.name); // undefined or global
    }
    
    inner(); // Called as standalone function
  }
};

obj2.outer();

// Solution: Use arrow functions
const obj3 = {
  name: "Object 3",
  outer: function() {
    console.log("Outer this.name:", this.name); // Object 3
    
    const inner = () => {
      console.log("Inner this.name:", this.name); // Object 3 (inherited)
    };
    
    inner();
  }
};

obj3.outer();

// ========== 12. THIS IN CALLBACKS ==========
/**
 * In callbacks (like with setTimeout, event listeners),
 * `this` can change depending on how the callback is invoked.
 */

const user1 = {
  name: "Henry",
  tasks: ["task1", "task2"],
  listTasks: function() {
    // ✗ Problem: this is lost in the callback
    this.tasks.forEach(function(task) {
      console.log(this.name + " has " + task); // this is undefined
    });
    
    // ✓ Solution 1: Use arrow function
    this.tasks.forEach((task) => {
      console.log(this.name + " has " + task); // this = user1
    });
    
    // ✓ Solution 2: Use bind
    this.tasks.forEach(function(task) {
      console.log(this.name + " has " + task);
    }.bind(this));
  }
};

// user1.listTasks();

// ========== 13. THIS IN CLASSES ==========
/**
 * In class methods, `this` refers to the instance of the class.
 * But beware: if you extract a method, `this` can be lost.
 */

class Book {
  constructor(title) {
    this.title = title;
  }
  
  displayTitle() {
    console.log("Title: " + this.title);
  }
  
  // Arrow function in class keeps `this` bound
  displayTitleArrow = () => {
    console.log("Title: " + this.title);
  }
}

const book = new Book("JavaScript Guide");
book.displayTitle(); // "Title: JavaScript Guide"

// This fails:
// const display = book.displayTitle;
// display(); // this is undefined

// This works:
const displayArrow = book.displayTitleArrow;
displayArrow(); // "Title: JavaScript Guide"

// ========== 14. THIS BINDING RULES (PRIORITY) ==========
/**
 * When determining `this`, JavaScript applies rules in this order:
 * 
 * 1. Arrow function? -> Use lexical this (from enclosing scope)
 * 2. Called with new? -> this = newly created object
 * 3. Called with call/apply/bind? -> this = specified object
 * 4. Called as method? -> this = object that owns the method
 * 5. Called as standalone function? -> this = global (or undefined in strict mode)
 */

// Example showing all rules
function whatIsThis() {
  console.log(this);
}

const obj4 = { whatIsThis };

// Rule 5: Standalone function
whatIsThis(); // global or undefined

// Rule 4: Method call
obj4.whatIsThis(); // obj4

// Rule 3: call/apply/bind
whatIsThis.call({ name: "Custom" }); // { name: "Custom" }

// Rule 2: new keyword
new whatIsThis(); // newly created object

// ========== 15. STRICT MODE AND THIS ==========
/**
 * In strict mode, `this` behaves slightly differently.
 */

function strictFunction() {
  "use strict";
  console.log(this); // undefined (not global)
}

// strictFunction(); // undefined in strict mode

// ========== SUMMARY ==========
/**
 * Key takeaways:
 * 1. `this` depends on HOW the function is called
 * 2. Arrow functions inherit `this` from context
 * 3. Use call/apply/bind for explicit `this` binding
 * 4. In methods, `this` is the object
 * 5. In standalone functions, `this` is global (or undefined in strict)
 * 6. In constructors (new), `this` is the new object
 * 7. Nested functions can lose `this` - use arrow functions
 * 8. Callbacks can lose `this` - use bind or arrow functions
 * 9. Apply rules in priority order to determine `this`
 * 10. Use arrow functions in classes for consistent `this`
 */
