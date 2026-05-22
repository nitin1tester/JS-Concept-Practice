/**
 * CLASSES & OBJECTS: OOP in JavaScript
 * 
 * What is a Class:
 * - Blueprint for creating objects
 * - Encapsulates properties and methods
 * - Modern syntax for object creation (ES6+)
 * - WHY: Organize related data and behavior
 * 
 * Class Components:
 * 
 * 1. Class Variables (Properties):
 * - Declared inside class: name; age; salary;
 * - Store data for each instance
 * - Accessed via this.name
 * 
 * 2. Constructor:
 * - Special method called when creating object with 'new'
 * - Only ONE constructor per class (no overloading)
 * - Initialize properties
 * - Receives parameters for initialization
 * 
 * 3. Methods:
 * - Functions inside class
 * - Called on instances: obj.methodName()
 * - Have access to 'this' (current object)
 * - No 'function' keyword needed (ES6 shorthand)
 * 
 * Creating Objects:
 * - let obj = new ClassName(args)
 * - 'new' keyword creates instance
 * - Constructor runs automatically
 * - Returns new object with properties/methods
 * 
 * Use-Cases:
 * - Model domain objects: Employee, User, Product
 * - Encapsulate behavior with data
 * - Reuse pattern across multiple objects
 * 
 * Use-Cases in Testing:
 * - Page Objects: class LoginPage { }
 * - Test Models: class TestCase { }
 * - Builders: class TestDataBuilder { }
 * - WHERE: Test automation, test models, page objects
 * 
 * Best Practices:
 * - One class per responsibility
 * - Clear constructor parameters
 * - Meaningful method names
 * - Use classes for stateful objects
 */

// class 

class Employee{

    
    // class variable
    name;
    age;
    salary;
    isActive;


    // Constructor : Only one const.... is alloweed (no overloading)
    constructor(name,age,salary,isActive) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }

    // called method not function because (when we create in class then called method) 
    getEmpInfo(){
        console.log(`get info of user ${this.name}`);
    }

    walking(){
        console.log(`
            Name : ${this.name},
            age : ${this.age},
            salary : ${this.salary},
            status : ${this.isActive}
            `);
    }

    

};
// obj of the employee class: Using new keyword.
let emp = new Employee("Nitin", 35, 45.0, true);
console.log(emp);
console.log(emp.name);
console.log(emp.age);
//calling method
emp.getEmpInfo();