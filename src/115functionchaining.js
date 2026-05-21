function login(){
    console.log("login to app");
    search();
};

function search(){
    console.log("I am search function");
    addToCart();
};

function addToCart(){
    console.log("I am add to cart function");
    //login(); //RangeError: Maximum call stack size exceeded
};

login();

console.log("=============recurssion=============");

function billing(){
    console.log("billing function ");
    let x = 10;
    let y = x+10; 
    console.log(y);
    billing();
}
billing(); //Maximum call stack size exceeded
// we tried to avoid recursion 
// WAP to calculate factorial using recursive.



