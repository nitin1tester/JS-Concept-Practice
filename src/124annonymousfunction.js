// Annonymous function : function with no name.
// we can't create Annonymous function without function expression. 
// hoisting is not allowed for Annonymous function  (its allowed only for simple function)
// let can use only let not var
// here function expression name is called indentifier (value,initDriver)

//tried hoisting not allowed with Annonymous function 
// let value = world(); //Cannot access 'world' before initialization

let world =  function(){
    console.log("i am nitin");
    return 10;
}
console.log(world); // [Function: world]
let value = world();
console.log(value);

console.log("=============");

/**
 * 
 * @param {String} browserName 
 */
let initDriver = function( browserName){
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

}

let isValidBrowser =  initDriver('chrome');
console.log(isValidBrowser);
if (isValidBrowser) {
    console.log("enter user google.com");
}