
//Arrow Function: => 
// has no name: annonymous function 
// heavlily used in callback function and playwright
// no function keyword

//1. No param arrow function: 

let print = ()=> console.log("I love JS");
print();

// 2. one param arrow function

let printName = (name)=> console.log("my name ",name);
printName('nitin');

console.log("=========================");

let addTen = (a)=> console.log(a+10);
addTen(11);

console.log("=========================");

let addUsingBacktick = (num)=> console.log(`hello ${num}`);
addUsingBacktick(14);

console.log("=========================");

let printTotal = total => console.log(total+90); // without bracket if there is only on param.(total)
printTotal(1000);

console.log("=========================");

let printBill = (billing)=> { // added multiple line in bracket now.
    console.log(billing + 30);
    console.log("I am billing");
    console.log("end here");
}
printBill(12);

console.log("=========================");
 
let returnValue =  (a)=> a+2; // here a+2 will be return directly
let retn =  returnValue(5);
console.log(retn);

console.log("=========================");
/**
 * 
 * @param {String} name 
 * @returns 
 */
let doLowerCase = (name) => name.toLowerCase();
let lower = doLowerCase("NiTiN");
console.log(lower);


// 2. two param arrow function
console.log("=========================");

let sumNum =  (num1,num2)=> num1+num2;
let sum = sumNum(3,5);
console.log(sum);

console.log("=========================");

let initBrowser = (browserName)=>{

    console.log('browser name is ',browserName);
    switch(browserName.trim().toLowerCase()){
        case 'chrome': console.log("launch ", browserName );
         return true;

        case 'firefox' : console.log("launch ", browserName );
         return true;

        case 'safari' : console.log("launch ", browserName );
         return true;

         default: console.log("Pleaae pass right browser ", browserName);
         return false;
    }

};
let flag = initBrowser('chrome');
console.log(flag);

console.log("=========================");

let empDetails = (...details)=>{
    console.log(details);
    console.log(details.length);    
}
empDetails("nitin",32,'Bangalore',true)
