/**
 * ES6 MODULES: Exporting Code
 * 
 * Concept:
 * - Split code into reusable modules/files
 * - Export functions/variables from one file
 * - Import in other files (use where needed)
 * - WHY: Organize code, reusability, avoid global scope
 * 
 * Two Export Types:
 * 
 * 1. Named Exports (Multiple):
 * - export function test() { }
 * - export let name = 'Tom'
 * - export { name, add, addTwoNum }
 * - Imported with: import { test, name, add } from './file.js'
 * - Can rename on import: import { test as testing } from './file.js'
 * 
 * 2. Default Export (One per file):
 * - export default function print() { }
 * - Only ONE default per file (error if multiple)
 * - Imported directly: import print from './file.js'
 * - Can rename: import printInfo from './file.js'
 * - Don't use destructuring for default
 * 
 * Rules:
 * - Cannot have multiple defaults
 * - Default doesn't participate in destructuring
 * - Default + named exports can coexist
 * - export default let url = "test.com" allowed but not recommended
 * 
 * Use-Cases:
 * - Utility functions: export utility functions
 * - Page Objects: export page object classes/functions
 * - Test data: export test fixtures
 * - Helpers: export common test helpers
 * 
 * Use-Cases in Testing:
 * - Page Objects: export { LoginPage, HomePage }
 * - Utilities: export { clickElement, fillForm }
 * - Test Data: export { testUsers, testData }
 * - WHERE: Automated testing, large test suites
 * 
 * Best Practices:
 * - Use named exports for multiple items
 * - Use default for main export
 * - Keep one primary export per file
 * - Clear naming for easy imports
 */



let name = 'Tom';

function add(a,b){
    return a+b;
}
// console.log(name);
// console.log(add(12,23));


export function test() {
    console.log("I am test");
}


let addTwoNum = (a,b)=> a+b;

// Two default function are not allowed error: Duplicate export of 'default'
// default don't participate in destructuring.
// we can have default variable as well
// but we can export only one at time either function or variable
export default function print(){
    console.log("default print me here");
}

// export default function print1(){                 // error: Duplicate export of 'default'
//     console.log("default print me here");

// }


// default variable 
// export default let url = "test.com";


// last statement of file
export { name, add, addTwoNum};