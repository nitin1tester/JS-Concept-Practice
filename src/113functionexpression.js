// function expression

let cart = function addToCart(){
    console.log("add to cart");
    return 100;
}
console.log(cart); // [Function: addToCart] >> its a function expression.
console.log(typeof cart); // type >> function

// function expression name :- cart
// actual function name addToCart.

let n = cart();
console.log(n);
// call method using function expression name.
// use case somtime function name is too long so its being used to make a short name.

// addToCart(); 
// //Error when we call method where function expression is already define:- addToCart is not defined.


// with param
let cartAgain = function addToCartAgain(productName){
    console.log("add to cart again");
    return 100;
}
 
let price = cartAgain("iphone");
console.log(price);