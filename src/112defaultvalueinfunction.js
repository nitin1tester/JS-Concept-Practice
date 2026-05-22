/**
 * DEFAULT PARAMETERS: Function Parameter Defaults
 * 
 * Syntax: function func(param1, param2='default') { }
 * 
 * Behavior:
 * - If argument not passed, use default value
 * - Defaults are evaluated left to right
 * - Can use expressions as defaults
 * 
 * When to Use:
 * - WHY: Avoid undefined errors, provide sensible defaults
 * - WHERE: API methods, configuration functions, page objects
 * 
 * Passing undefined:
 * - Explicitly passing undefined triggers default
 * - func(username, undefined) uses default for role
 * - Can override default by explicitly passing value
 * 
 * Passing null:
 * - Null is treated as explicit value, NOT as "use default"
 * - func(user, null) passes null, not the default
 * - null !== undefined
 * 
 * Limitation:
 * - Cannot skip middle parameters
 * - func(user, , 'admin') is INVALID syntax
 * - Must pass all preceding parameters (or use undefined to skip)
 * 
 * This is NOT Overloading:
 * - Only looks like overloading
 * - Actually just function with defaults
 * - Still only ONE function definition
 * 
 * Use-Cases in Testing:
 * - Login(email, password, role='user') - test different roles
 * - Click(selector, timeout=5000) - custom wait times
 * - Setup(browser='chrome', headless=true) - test environments
 * - WHERE: Page object methods, fixture setup, data builders
 */

/**
 * 
 * @param {*} username 
 * @param {*} password 
 * @param {*} role 
 * @param {*} status 
 */
function login(username, password, role='admin', status = 'active'){
    console.log(username,password, role, status);
}
login("nitin@test.com", "test") // if user don't pass role then it will take detault value of admin.
login("test@test.ion" , "testpassword", 'sales User'); // if passing vlaue then it will use passed value.
login("nitin@test.com", "test", null ,'inactive');

// we can't skip any param in middle
// note:- it look like overloading but its not method overloading.


