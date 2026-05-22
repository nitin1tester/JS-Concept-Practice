/**
 * ========================================
 * CONCEPT: PROTOTYPES AND PROTOTYPE CHAIN
 * ========================================
 * 
 * JavaScript is a prototype-based language. Every object has a prototype
 * from which it inherits properties and methods.
 * The prototype chain allows objects to inherit from other objects.
 */

// ========== 1. WHAT IS A PROTOTYPE? ==========
/**
 * A prototype is an object that serves as a template for other objects.
 * Every JavaScript object has a hidden [[Prototype]] property.
 * This is accessed via __proto__ (not recommended) or Object.getPrototypeOf().
 */
const obj = {};
console.log(Object.getPrototypeOf(obj)); // Shows the Object.prototype

// ========== 2. PROTOTYPE PROPERTY ==========
/**
 * Functions have a `prototype` property that is used when they're
 * called as constructors with the `new` keyword.
 */
function Person(name) {
  this.name = name;
}

// Add a method to the prototype
Person.prototype.greet = function() {
  return "Hello, my name is " + this.name;
};

const person1 = new Person("Alice");
console.log(person1.greet()); // "Hello, my name is Alice"

// ========== 3. __PROTO__ VS PROTOTYPE ==========
/**
 * - `prototype`: A property of constructor functions
 * - `__proto__`: The actual prototype link (internal [[Prototype]])
 * 
 * When you create an object with `new`, the new object's __proto__
 * points to the constructor's prototype property.
 */
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(this.name + " is eating");
};

const dog = new Animal("Dog");
console.log(dog.__proto__ === Animal.prototype); // true
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true

// ========== 4. PROTOTYPE CHAIN ==========
/**
 * The prototype chain is a series of linked prototypes.
 * When you access a property on an object:
 * 1. JavaScript first looks in the object itself
 * 2. If not found, it looks in the object's prototype
 * 3. If not found, it looks in the prototype's prototype
 * 4. This continues until the property is found or null is reached
 */

// Create a chain: dog -> Animal.prototype -> Object.prototype -> null
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.move = function() {
  console.log(this.type + " is moving");
};

function Car(type, doors) {
  Vehicle.call(this, type);
  this.doors = doors;
}

// Set up the prototype chain
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
  console.log("Honk! Honk!");
};

const myCar = new Car("car", 4);
console.log(myCar.type);  // "car" (from Vehicle)
myCar.move();            // "car is moving" (from Vehicle.prototype)
myCar.honk();            // "Honk! Honk!" (from Car.prototype)

// Prototype chain visualization:
// myCar -> Car.prototype -> Vehicle.prototype -> Object.prototype -> null

// ========== 5. OBJECT.CREATE() ==========
/**
 * Object.create() creates a new object with a specified prototype.
 * This is the modern way to set up prototype chains.
 */
const parent = {
  greet: function() {
    return "Hello from parent";
  }
};

const child = Object.create(parent);
console.log(child.greet()); // "Hello from parent"
console.log(Object.getPrototypeOf(child) === parent); // true

// ========== 6. HASOWNPROPERTY VS IN ==========
/**
 * hasOwnProperty checks if a property is directly on the object.
 * The `in` operator checks the entire prototype chain.
 */
const obj1 = { name: "Object" };
const proto = { age: 30 };
Object.setPrototypeOf(obj1, proto);

console.log(obj1.hasOwnProperty("name")); // true (direct property)
console.log(obj1.hasOwnProperty("age"));  // false (inherited)
console.log("name" in obj1);              // true (direct)
console.log("age" in obj1);               // true (inherited)

// ========== 7. CONSTRUCTOR FUNCTIONS ==========
/**
 * Constructor functions are functions called with the `new` keyword
 * to create new objects. They set up the initial properties and
 * methods for the new object.
 */
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.describe = function() {
  return this.title + " by " + this.author;
};

const book1 = new Book("JavaScript Basics", "John Doe");
const book2 = new Book("Advanced JS", "Jane Smith");

console.log(book1.describe()); // "JavaScript Basics by John Doe"
console.log(book1 instanceof Book); // true

// ========== 8. INSTANCEOF OPERATOR ==========
/**
 * The instanceof operator checks if an object's prototype chain
 * includes a specific constructor's prototype.
 */
console.log(book1 instanceof Book); // true
console.log(book1 instanceof Object); // true
console.log(book1 instanceof Array); // false

// ========== 9. PROPERTY LOOKUP IN PROTOTYPE CHAIN ==========
/**
 * When you access a property:
 * 1. Check the object itself (own properties)
 * 2. Check the prototype
 * 3. Check the prototype's prototype
 * 4. Continue until found or null is reached
 */
function Mammal(name) {
  this.name = name;
}

Mammal.prototype.breathe = function() {
  console.log("Breathing...");
};

function Dog(name, breed) {
  Mammal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Rex", "Golden Retriever");

// Property lookup for myDog.name:
// 1. Check myDog -> found (own property)
console.log(myDog.name); // "Rex"

// Property lookup for myDog.breathe:
// 1. Check myDog -> not found
// 2. Check Dog.prototype -> not found
// 3. Check Mammal.prototype -> found
myDog.breathe(); // "Breathing..."

// ========== 10. MODIFYING PROTOTYPES ==========
/**
 * You can add or modify properties on prototypes.
 * This affects all objects that inherit from that prototype.
 * WARNING: Modifying built-in prototypes (like Array.prototype)
 * can cause problems and is generally discouraged.
 */

// Safe: Adding to custom prototype
Person.prototype.introduce = function() {
  return "I am " + this.name;
};

const person2 = new Person("Bob");
console.log(person2.introduce()); // "I am Bob"

// ========== 11. CHECKING PROTOTYPE CHAIN ==========
/**
 * Methods to work with prototypes:
 */
function checkPrototype(obj, prop) {
  return Object.getPrototypeOf(obj)[prop] !== undefined;
}

// ========== 12. PROTOTYPE METHODS ==========
/**
 * Important Object methods for working with prototypes:
 */

// Object.getPrototypeOf(obj) - Get an object's prototype
// Object.setPrototypeOf(obj, proto) - Set an object's prototype (not recommended, slow)
// Object.create(proto) - Create object with specified prototype
// obj.hasOwnProperty(prop) - Check if property is directly on object
// obj.propertyIsEnumerable(prop) - Check if property is enumerable
// Object.getOwnPropertyNames(obj) - Get all own properties
// Object.getOwnPropertyDescriptor(obj, prop) - Get property details

// ========== 13. CLASS SYNTAX (MODERN WAY) ==========
/**
 * ES6 classes are syntactic sugar over prototypes.
 * Under the hood, they still use the prototype system.
 */
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Bird extends Animal {
  speak() {
    console.log(this.name + " chirps");
  }
}

const bird = new Bird("Tweety");
bird.speak(); // "Tweety chirps"

// ========== 14. UNDERSTANDING THE INHERITANCE CHAIN ==========
/**
 * Everything in JavaScript is an object (except primitives).
 * All objects inherit from Object.prototype.
 * 
 * Inheritance chain:
 * Function -> Object.prototype -> null
 * Array -> Object.prototype -> null
 * Custom objects -> Custom.prototype -> Object.prototype -> null
 */

const arr = [1, 2, 3];
// arr -> Array.prototype -> Object.prototype -> null

// arr has access to methods from all three prototypes:
arr.push(4); // From Array.prototype
arr.toString(); // From Object.prototype

// ========== SUMMARY ==========
/**
 * Key takeaways:
 * 1. Prototypes are objects that serve as templates
 * 2. Every object has a [[Prototype]] (internal link)
 * 3. Prototype chain enables inheritance
 * 4. Constructor functions set up prototypes
 * 5. Use Object.create() for prototype inheritance
 * 6. hasOwnProperty() vs in operator
 * 7. instanceof checks the prototype chain
 * 8. ES6 classes are sugar over prototypes
 * 9. All objects inherit from Object.prototype
 * 10. Be careful modifying built-in prototypes
 */
