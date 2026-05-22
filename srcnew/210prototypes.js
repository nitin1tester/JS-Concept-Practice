/**
 * PROTOTYPES & INHERITANCE CHAIN: How JS Objects Really Work
 * 
 * What is a Prototype:
 * - Hidden [[Prototype]] property on every object
 * - Reference to another object (inheritance chain)
 * - JavaScript's inheritance mechanism (not class-based)
 * - Properties/methods inherited from prototype
 * 
 * Prototype Chain:
 * - Every object has __proto__ (or [[Prototype]])
 * - When accessing property, JS searches: object → prototype → prototype.prototype...
 * - Chain ends at Object.prototype (null)
 * - Enables method sharing across objects
 * 
 * Creating Objects with Prototype:
 * - Object literals: inherit from Object.prototype
 * - Function constructors: instance.prototype = new ConstructorFunc()
 * - Object.create(): explicit prototype assignment
 * 
 * Constructor Functions:
 * - Regular function called with 'new' keyword
 * - 'new' creates object with prototype pointing to func.prototype
 * - 'this' refers to new object
 * - Sets up prototype chain
 * 
 * Object.create():
 * - Create new object with specific prototype
 * - Object.create(proto) - proto becomes [[Prototype]]
 * - Object.create(null) - no prototype chain
 * - Manual prototype chain setup
 * 
 * Prototype Chain Example:
 * - const user = new Person("Alice")
 * - user.__proto__ === Person.prototype
 * - Person.prototype.__proto__ === Object.prototype
 * - Object.prototype.__proto__ === null
 * 
 * WHY Prototypes:
 * - Memory efficient (methods shared)
 * - Inheritance mechanism
 * - Delegation pattern
 * - Method lookup chain
 * - Property inheritance
 * 
 * WHERE Used:
 * - Class inheritance (classes use prototypes)
 * - Method sharing
 * - Extending built-in objects
 * - Plugin/mixin patterns
 * - Framework design
 * 
 * Use-Cases in Testing:
 * - Test prototype chain
 * - Mock inherited methods
 * - Test constructor behavior
 * - Verify method inheritance
 * - Prototype pollution prevention
 * 
 * WHERE: OOP, inheritance, memory optimization
 * 
 * Key Methods:
 * - Object.create(proto) - Create with prototype
 * - Object.getPrototypeOf(obj) - Get prototype
 * - Object.setPrototypeOf(obj, proto) - Set prototype
 * - instanceof - Check prototype chain
 * - hasOwnProperty() - Check own property
 */

// Example 1: Prototype Chain Basics
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)


// Example 2: Constructor Function & Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

const person1 = new Person("Alice", 30);
person1.greet(); // "Hello, I'm Alice"

// Check prototype chain
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true


// Example 3: Prototype Chain Lookup
const person2 = new Person("Bob", 25);
console.log("name" in person2); // true (own property)
console.log("greet" in person2); // true (from prototype)
console.log(person2.hasOwnProperty("name")); // true
console.log(person2.hasOwnProperty("greet")); // false


// Example 4: Object.create() - Explicit Prototype
const parent = {
    speak() {
        console.log("Speaking...");
    }
};

const child = Object.create(parent);
child.speak(); // Inherited method

console.log(Object.getPrototypeOf(child) === parent); // true


// Example 5: Prototype-based Inheritance
function Animal(name) {
    this.name = name;
}

Animal.prototype.move = function() {
    console.log(`${this.name} is moving`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} says woof!`);
};

const dog = new Dog("Rex", "Labrador");
dog.move(); // "Rex is moving" (inherited)
dog.bark(); // "Rex says woof!" (own method)


// Example 6: instanceof - Check Prototype Chain
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true


// Example 7: Multiple Levels of Inheritance
function Vehicle(brand) {
    this.brand = brand;
}

Vehicle.prototype.start = function() {
    console.log(`${this.brand} started`);
};

function Car(brand, model) {
    Vehicle.call(this, brand);
    this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function() {
    console.log(`Driving ${this.brand} ${this.model}`);
};

const car = new Car("Toyota", "Camry");
car.start(); // From Vehicle
car.drive(); // From Car


// Example 8: Object.create() with null - No Prototype
const noProto = Object.create(null);
console.log(Object.getPrototypeOf(noProto)); // null
console.log(noProto.toString); // undefined (no Object.prototype)


// Example 9: Checking Prototype Properties
const obj1 = { x: 1 };
const obj2 = Object.create(obj1);
obj2.y = 2;

for (let key in obj2) {
    console.log(key); // y, then x (inherited)
}

console.log(obj2.hasOwnProperty("x")); // false
console.log(obj2.hasOwnProperty("y")); // true


// Example 10: Adding Methods to Prototype
function Calculator() {}

Calculator.prototype.add = function(a, b) {
    return a + b;
};

Calculator.prototype.subtract = function(a, b) {
    return a - b;
};

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2


// Example 11: Prototype Pollution Prevention (Security)
function SafeObject() {}

// Freeze prototype to prevent pollution
Object.freeze(SafeObject.prototype);

const safe = new SafeObject();
// Attempting to modify prototype is ignored
SafeObject.prototype.polluted = true; // Silently fails in strict mode


// Example 12: Testing Prototype Chain
function TestPrototype() {
    this.value = 42;
}

TestPrototype.prototype.getValue = function() {
    return this.value;
};

const testObj = new TestPrototype();

// Test own property
console.assert(testObj.hasOwnProperty("value"), "Should have own value");

// Test inherited method
console.assert(typeof testObj.getValue === "function", "Should inherit getValue");

// Test instanceof
console.assert(testObj instanceof TestPrototype, "Should be instance of TestPrototype");

console.log("All tests passed!");


// Example 13: getPrototypeOf vs __proto__
const original = { x: 1 };
const derived = Object.create(original);

console.log(Object.getPrototypeOf(derived) === original); // true
console.log(derived.__proto__ === original); // true (same, but don't use __proto__)


// Example 14: Constructor Property
function MyClass() {}
const instance = new MyClass();

console.log(instance.constructor === MyClass); // true
console.log(instance.constructor.name); // "MyClass"


// Example 15: Using Object.setPrototypeOf (Rarely used - slow!)
const original2 = { method() { return "original"; } };
const derived2 = {};

Object.setPrototypeOf(derived2, original2);
console.log(derived2.method()); // "original"

// Note: Avoid in production - slows down code
// Use Object.create() instead if possible
