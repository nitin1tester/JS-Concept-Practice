/**
 * FUNCTIONS: Reusable Code Blocks
 * 
 * Definition: Set of statements grouped to perform specific task
 * Called by name, can be reused multiple times
 * 
 * Function Hoisting:
 * - Can call function BEFORE declaring it in code
 * - WHY: JavaScript hoists function declarations to top
 * - WHERE: Traditional functions only (not arrow/expression)
 * 
 * Types of Functions:
 * 1. No input, No output: Just logs something
 * 2. No input, With output: Returns static value
 * 3. With input, With output: Takes parameters, returns result
 * 
 * Parameters vs Arguments:
 * - Parameters: Variables defined in function signature
 * - Arguments: Actual values passed when calling function
 * - Call by value: Primitive types passed by value (copy)
 * - Call by reference: Objects passed by reference
 * 
 * Return Statement:
 * - Single return at end (better than multiple returns)
 * - WHY: Easier to read, maintain, test
 * 
 * Function Properties:
 * - functionName.name: Returns function name (string)
 * - functionName.length: Returns number of parameters
 * - typeof functionName: Returns "function"
 * 
 * Use-Cases in Testing:
 * - Page Object Methods: Interactions with UI
 * - Utility Functions: Common operations (login, click, wait)
 * - Test Data Builders: Create complex test objects
 * - Assertions: Custom validation logic
 */
// 1. simple function :- no input no return

//function hoisting is allowed calling first implimenting letar in script.
testCompanyAutomation();
function testCompanyAutomation(){
    console.log("I am first function");
}
//call function
testCompanyAutomation();

console.log("========================");

// 2. No input but some return
 function getPiValue(){
    return 3.14;
 }
let valueOfPi = getPiValue(); // this approch is better then directly consuming from method
console.log(valueOfPi);

console.log(getPiValue()); // 

console.log("========================");


//3 some input and some in return
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function sumOfNumber(a, b){ // a, b are parameters
    let c = a+b;
    return c;
}

let sum = sumOfNumber(10,"nitin"); // passing values / arguments (call by values)
console.log(sum);

console.log("========================");

// AC; create a function 
// which will calculate student marks range 1 to 100 
// input param : studentName (string) 
// return : marks of that student(number)
// if student name is not found return -1 
//  end 


/**
 * 
 * @param {string} studentName 
 * @returns {number} marks
 */
function getStudentMarks(studentName){
    console.log("getting student marks : "+studentName.trim().toLowerCase());
    let marks = -1;
    if (studentName==='ravi') {
        marks = 90;
        // return marks;
    } else if(studentName==='nitin') {
        marks = 33;
        // return 33;
    } else if (studentName==='shivansh' ){
        marks = 100;
        // return 100;
    }  else{
        console.log(`Pleae enter a valid student name : ${studentName}`);
        return marks;
    }
    return marks; // this approch is better then multiple return in each condition.
}
let studentNameHere = "ravi" 
let givenStudentMarks = getStudentMarks(studentNameHere);

if (givenStudentMarks >= 0) {
    console.log(`given student ${studentNameHere} marks is ${givenStudentMarks}`);
}


console.log("===========using switch=============");

function getMarks(studentName){
    console.log("Please enter a student name - : " + studentName);
    let marks = -1;
    switch(studentName){
        case 'ravi' : 
        marks = 91;
        break;
        case 'nitin' : 
        marks = 34;
        break;
        case 'shivansh' : 
        marks = 100;
        break;
        default : 
        console.log(`${studentName} is not a valid student name`);
        marks = -1;
        break;
        
     }
     return marks;
}

let studentNameHere = "ravi";
let givenStudentMarks = getMarks(studentNameHere);

if (givenStudentMarks >= 0) {
    console.log(`given student ${studentNameHere} marks is ${givenStudentMarks}`);
}

console.log("========================");


/**
 * 
 * @param {*} productPrice 
 * @param {*} platformFee 
 * @param {*} cgst 
 * @returns 
 */
function calculatePrice(productPrice, platformFee, cgst, sgst){
    return productPrice+platformFee+cgst; // method provided sgst but its not being consumed by function
}

let total =  calculatePrice(1,2,3,4)
console.log(total);
console.log(typeof calculatePrice); // function 
console.log(calculatePrice.name); // calculatePrice
console.log(calculatePrice.length); //  4 param 




