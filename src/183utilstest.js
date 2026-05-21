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