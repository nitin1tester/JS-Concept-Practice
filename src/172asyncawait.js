//async - await:

//async:- function: 
// async keywork as prefix
// it always return a promise (genrally)
// inside async function body;  we have to write multiple await(asynchronous/promises) steps
// .


async function hello(){
    return "hello world";
}


hello().then(res => console.log(res));


// await concept

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("user data")
        },2000)
    })
};


async function getData(){
    console.log("fetch data");
    let result = await fetchData(); // await
    console.log(result);
    console.log('data fetching done .....');
}

getData();


console.log("==================coffee example with async - await =======================");

function startMachine(flag){
    return new Promise((resolve, reject)=>{
        if (flag) {
            setTimeout(()=>{
                resolve("1 start the machine");
            },5000)
        } else {
            setTimeout(()=>{
                reject("machine not started");
            },1000)
        }
    });
};

function grindBeans(flag) {
    return new Promise((resolve, reject)=>{
        if (flag) {
            setTimeout(()=>{
                resolve("2. grind then bean");
            },3000)
        } else {
            setTimeout(()=>{
                reject("Grinding is not done ");
            },1000)
        }
    });
};

function boilWater(flag){
    return new Promise((resolve, reject)=>{
        if (flag) {
            setTimeout(()=>{
                resolve("3. boiling water");
            },4000)
        } else {
            setTimeout(()=>{
                reject("water is finished");
            },1000)
        }
    });
};

function brewCoffee(flag) {
    return new Promise((resolve, reject)=>{
        if (flag) {
            setTimeout(()=>{
                resolve("4. brew coffee");
            },2000)
        } else {
            setTimeout(()=>{
                reject("roasting coil for burned");
            },1000)
        }
    });
};

function pourToCup(flag){
    return new Promise((resolve, reject)=>{
        if (flag) {
            setTimeout(()=>{
                resolve("5. pour into cup ");
            },6000)
        } else {
            setTimeout(() => {
                reject("Cup broken yesterday");
            }, 1000);
        }
    });
};

async function makeCoffee(){
    let flag = true;
    let a =  await startMachine(flag);
    let b =  await grindBeans(flag);
    let c =  await boilWater(flag);
    let d =  await brewCoffee(flag);
    let e =  await pourToCup(flag);

    console.log("Coffee is ready");
};


let p = Promise.all([a,b,c,d,e]).then((result)=>{
    console.log(result);
});

// this is imcomplete