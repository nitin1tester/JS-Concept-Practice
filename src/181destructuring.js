
// Destructuring :- 
// clean way to extract value from array or object And assign then to variable in a single line.

// Array Destructuring
let [a,b,c ] = [10,20,30];
console.log(a,b,c); //10 20 30

let arr = [40,50,60];
let [x,y,z,] = arr;
console.log(x,z,y);// 40 60 50

let [p, , r] = arr;
console.log(p,r);// 40 60

let ar = [10,40];
let [a1,b1 = 50] = ar
console.log(a1,b1); 

let arr1 = [1,2,3,4];
let [t1,t2,...pop] = arr1;
console.log(t1); // 1
console.log(pop); // 2,3,4
console.log(t2);

// Object destructuring

let user = {
    name:'Nitin',
    age:30
}

let {age, name} = user
console.log(name,age);

console.log("========================");

let customer = {
    name:"nitin",
    age:40,
    city: 'la',
    zip: 12313
}

function placeOrder({name,city}){
    console.log(name,city);
}

placeOrder(customer);

function launchBrowser({browserName, headless, url}){
    console.log(browserName,headless,url);
}

let pageObj = {
    title:"LoginPage",
    url:"test.com",
    browserName: 'chrome',
    headless: true
}

launchBrowser(pageObj);


