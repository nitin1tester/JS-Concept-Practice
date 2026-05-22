/**
 * ES6 MODULES: Importing Code
 * 
 * Concept:
 * - Import functions/variables from other modules
 * - Use code written in separate files
 * - WHY: Code reusability, organization, maintainability
 * 
 * Import Syntax:
 * - import DefaultExport from './file.js' (default export)
 * - import { namedExport } from './file.js' (named export)
 * - import Default, { named } from './file.js' (both types)
 * - import * as moduleName from './file.js' (import everything)
 * 
 * Renaming on Import:
 * - import print as printInfo from './file.js' (rename default)
 * - import { test as testing } from './file.js' (rename named)
 * - WHY: Avoid naming conflicts, clearer names
 * 
 * File Extension:
 * - .js extension REQUIRED in modules (unlike Node.js)
 * - import from './file.js' NOT import from './file'
 * - Important for browser environments
 * 
 * Use-Cases:
 * - Import Page Objects for testing
 * - Import Test Utilities: clickElement, fillForm
 * - Import Test Data: testUsers, testConfig
 * - Import Setup/Teardown helpers
 * 
 * Use-Cases in Testing:
 * - Test file imports page objects
 * - Test file imports utilities
 * - Utilities import helpers
 * - Test data shared across files
 * - WHERE: Automated testing, test suite organization
 * 
 * Module Resolution:
 * - Relative paths: './file', '../utils/helper'
 * - Used in browsers and modern Node.js
 * - import order matters (dependencies first)
 * 
 * Best Practices:
 * - Import at top of file
 * - Use named imports for clarity
 * - Avoid circular imports
 * - One responsibility per module
 */

//import - export uses 2 file for this(utils + this one)
// first import  default , {destructuring } from "file"  
// we can change name of default as in utils file its print but here we have change name to printInfo
// if you want to change name for other then default like "test as testing" 
// and then we can consume using new keyword like "testing" 

import printInfo, { name, add, test as testing, addTwoNum } from "./182utils.js";
import getRamdonString, { getrendomNumber } from "./184stringutils.js";

// import * as utils from './182utils.js';

// let ad = utils.addTwoNum(4,5);
// console.log(ad);
// utils.default();


console.log(name);
console.log(add(1,2)); 
testing();

printInfo();

getrendomNumber();

getRamdonString();

let sum = addTwoNum(2,3);
console.log(sum);