
// promise: is used to handle async operation(things that take time to process)
// Ex:- (coffee machine)  
// 1. api call 
// 2. file reading
// 3. db query 
// 4. ajax : element is coming on page after delay;

// insteads of callbacks, JS introduce promises to handle the async operations in clear way

//promise:- example
// you please an order : promis is created
// prepare the food : pending/inprogress
// food is delivered : resolved / fullfilment
// cancels the orders : rejested/ Error

//implimentation
// promise is constructor so it can be call by creating object using new keywork
// it need two param first "resolve" , 2nd  "reject" (name could be anything)
// "resolve" >> promise kept, 
// "reject" >> promnise not kept, 

let myPromise = new Promise((resolve, reject)=>{
    let success = false;
    if (success) {
        resolve('promise is kept, food is ready')
    } else {
        reject('promise is not kept you will not get food as per order')
    }
});

myPromise
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        });


console.log("==============================");

// Ex: real async Operation :- setTimeout :- 3000ms

let dataPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("after waiting here to 3 sec data received")
    },3000)
})

dataPromise
            .then((result)=>{
                console.log(result);
            })
            .catch((error)=>{
                console.log(error);
            });

console.log("==============================");
     
// Ex: real async Operation with user data :- setTimeout :- 3000ms

let user = {
    name:null,
    age:35,
    city:"bangalore",
    isActive: true
}

function fetchUserData(){
    return new Promise((resolve, reject)=> {

        setTimeout(()=>{
            if (user.name!==null) {
                resolve(user)
            }else{
                reject('User detail is not found')
            }
        },3000)
    })
}

let isUserFound = fetchUserData();
isUserFound
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            console.log("I am a finally block ... will be always executed no metter promise kep or not")
        });


console.log("===============another example ===============");
     
// promise chaning:

// below code is giving error found undefind expected 30

let p1 =  new Promise((resolve,reject)=>{
    resolve(5);
});

p1
.then((n)=>n*2)
.then((n)=>n*3)
.then(result => console.log(result));

let p2 = new Promise((resolve, reject)=>{
    resolve(5);
});

p2
.then((n)=>n*2)
.then((n)=>n*3)
.then((result)=>console.log(result));

console.log("=============== how its solving callback hell  ===============");


