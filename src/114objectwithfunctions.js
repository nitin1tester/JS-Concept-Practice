/**
 * OBJECTS WITH METHODS & the 'this' KEYWORD
 * 
 * Method: Function defined inside object
 * Syntax: objName: function() { } or objName() { }  (shorthand in ES6)
 * 
 * Important Rules:
 * 1. Cannot use 'function' keyword in shorthand syntax
 * 2. No function expressions allowed in objects (use shorthand)
 * 3. Methods have access to 'this' keyword
 * 
 * the 'this' Keyword:
 * - Refers to the object that owns the method
 * - this.property accesses object's properties
 * - WHY: Organize behavior with data, encapsulation
 * - WHERE: Classes, objects, event handlers
 * 
 * Calling Methods:
 * - Use object.methodName() syntax
 * - this inside method refers to object
 * 
 * Accessing Other Methods:
 * - Use this.methodName() inside method (preferred)
 * - Or object.methodName() from outside
 * 
 * Use-Cases in Testing:
 * - Page Objects: methods to interact with pages
 * - Test Fixtures: setup/teardown methods
 * - Mock Objects: simulate API responses with methods
 * - Builders: construct test data with method chaining
 * 
 * Example Pattern (Page Object):
 * - let loginPage = { username: "x", login() { access username via this } }
 * - Common in Playwright, Webdriver test automation
 * 
 * Arrow Functions in Objects:
 * - WARNING: Arrow functions DON'T have their own 'this'
 * - Use regular function for 'this' binding
 */

let user = {
    // properties : key value pair
    name:'Nitin',
    dept : 'QA',
    salary: 45.00,
    city: 'pune',

    //function : behaviour 
    // no function keyword allowed while creating function.
    // no function expression allowed.
    coding(){
        console.log('user is coding....');
    },

    doLogin(name,dept){
        console.log(name,dept);
    }

}

console.log(user.name);
user.coding(); // 
user.doLogin('ram','hr');

console.log('====================');

let loginPage = {
    username: "nitin@test.in",
    password: "passkey",
    role:'admin',

    login(){
        console.log("login function" , this.username);
        this.resetPassword(); // using this keyword we can call function 
    },

    resetPassword(){
        console.log("reset password");
        loginPage.logout(); // using object referance as well we can call function
    },

    logout(){
        console.log("logout now");
    }
}

loginPage.login();