
// IIFE function: Immediate Invoke Function Expression(IIFE)
//  (function(){"logic here"})();   function has no name. its called Annonymous function
(function(){
    console.log("hello world");
})();


// not allowed function expression
// let rest = (function(){
//     console.log("hello world");
// })();
// rest(); // rest is not a function at Object.<anonmous>
 

// we can supply parameter to function 
(function(browserName){
    console.log("browser name ", browserName);
})("firefox");


(
    function(){
        console.log("Bye");
    }
)();