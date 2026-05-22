/**
 * OOP CONCEPTS IN JAVASCRIPT: Inheritance, Polymorphism, Encapsulation
 * 
 * INHERITANCE (extends):
 * - Child class inherits properties/methods from parent
 * - class BMW extends Car { }
 * - Child has all parent methods
 * - Child can add own methods
 * - WHY: Reuse code, establish relationships
 * - WHERE: Car > BMW, Car > Audi, Vehicle > Car
 * 
 * METHOD OVERRIDING:
 * - Child redefines parent method with same name
 * - start() in BMW overrides Car.start()
 * - Uses child version when called
 * - WHY: Customize behavior for child class
 * - WHERE: BMW starts differently than base Car
 * 
 * POLYMORPHISM (Partial):
 * - Same method name, different implementations
 * - car.start() vs bmw.start() execute different code
 * - JavaScript supports method overriding (not overloading)
 * - WHY: Same interface, different behavior
 * - WHERE: car.start() works for any car subclass
 * 
 * ENCAPSULATION:
 * - Private fields: #fieldName (cannot access externally)
 * - #carKey = 'secret' (private variable)
 * - #unLockCar() (private method)
 * - Can only use inside class
 * - WHY: Hide internal implementation, protect data
 * - WHERE: Sensitive data, internal logic
 * 
 * STATIC Members:
 * - static wheels = 4 (belongs to class, not instance)
 * - Accessed via: Car.wheels (not car.wheels)
 * - Shared across all instances
 * - WHY: Class-level constants/methods
 * - WHERE: Configuration, shared constants
 * 
 * JavaScript OOP Limitations:
 * ✓ ALLOWED: Inheritance, overriding, encapsulation, static
 * ✗ NOT ALLOWED: Abstraction (no abstract classes), overloading
 * 
 * Use-Cases in Testing:
 * - Page Objects: Base class with common methods
 * - Test Models: Inherit common test behavior
 * - Test Data: Static test fixtures
 * - WHERE: Test automation, page objects, fixtures
 * 
 * Best Practices:
 * - Inherit for "is-a" relationships
 * - Use private for implementation details
 * - Use static for shared class data
 * - Keep inheritance hierarchies shallow
 */

export default class Car {
    static wheels = 4;
    speed = 100;
    // private var/method (if its start with # then its private in JS)
    #carKey = 'Car Key: Car123'
    #unLockCar(){
        console.log("Unlock Car : ",this.#carKey);
    }

    // private var.method can be use within class
    start(){
        console.log(this.#carKey);
        this.#unLockCar();
        console.log("Car --- Start");
    }
    stop(){
        console.log("Car --- Stop");
    }
    refuel(){
        console.log("Car --- Refuel");
    }
}


class BMW extends Car {

    speed = 300;
    autoParking(){
        console.log("BMW --- Autoparking");
    }


    start(){
        console.log("BMW --- Start");
    }

}


class Audi extends Car {

    speed = 220;
    theftSafty(){
        console.log("Audi --- TheftSafty");
    }
}


export{BMW,Audi};

