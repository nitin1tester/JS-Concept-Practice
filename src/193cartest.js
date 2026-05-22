/**
 * OOP IN PRACTICE: Testing Concepts & Patterns
 * 
 * Instantiation with new:
 * - let car = new Car() creates instance
 * - Constructor runs, properties initialized
 * - Instance has own copy of properties
 * - Speed = 100 for Car, 300 for BMW
 * 
 * Method Overriding Demo:
 * - bmw.start() calls BMW.start() (overridden)
 * - Inherited methods still available: bmw.stop()
 * - Polymorphism: car.start() works for any car type
 * 
 * Static Access:
 * - Car.wheels accessible WITHOUT instantiation
 * - Shared across all instances
 * - Used for class-level constants
 * 
 * OOP Features Supported:
 * ✓ 1. Inheritance: BMW extends Car (YES)
 * ✓ 2. Method Overriding: BMW redefines start() (YES - Partial Polymorphism)
 * ✓ 3. Objects/Classes: class Car { } (YES)
 * ✓ 4. Encapsulation: Private #fields (YES)
 * ✓ 5. Public/Private: # for private (YES)
 * ✓ 6. Modules: import/export (YES)
 * 
 * OOP Features NOT Supported:
 * ✗ 1. Abstraction/Interfaces: No abstract classes (NO)
 * ✗ 2. Method Overloading: Multiple signatures (NO - latest wins)
 * 
 * Testing Pattern:
 * - Base page object class with common methods
 * - Specific pages extend base (inherit)
 * - Override methods for specific behavior
 * - Use static for test configurations
 * 
 * Use-Cases:
 * - LoginPage extends BasePage { login() { } }
 * - HomePage extends BasePage { navigateToHome() { } }
 * - Test runner instantiates and uses polymorphically
 * 
 * WHERE: Automated testing, page objects, test frameworks
 */
// import * as test from "./192cardesign";
// Car class is improted as default.
import Car, { BMW,Audi } from "./192cardesign.js";

let car = new Car();
car.start();// Car --- Start >> individual method
car.stop(); //Car --- Stop >> individual method


let bmw = new BMW();

bmw.start(); // BMW --- Start >> overriden method
bmw.autoParking(); // BMW --- Autoparking >> bmw individual method
bmw.stop(); // Car --- Stop >> inherited method
console.log(bmw.speed);

let audi = new Audi();
audi.theftSafty();
audi.start();
audi.stop();
audi.refuel();
console.log(audi.speed);


//Static
console.log(Car.wheels); // static variable 4



// OOP concepts: 

//Allowed
// 1. inheritance Yes
// 2. method overiding(Partial Polymorphism) Yes 
// 3. Object/Class Yes
// 4. encapsulation Yes 
// 5. public / private Yes
// 6. import.export Yes 

//Not Allowed
// 6. abstraction/interface >> NO
// 7. method/var... overloading (Partial Polymorphism) >> NO  