/**
 * ASYNC/AWAIT: Modern Async Syntax
 * 
 * What is async/await:
 * - Syntactic sugar over Promises
 * - Makes async code look synchronous
 * - Easier to read, understand, debug
 * - Modern replacement for promise chaining
 * 
 * async Keyword:
 * - Marks function as asynchronous
 * - ALWAYS returns Promise
 * - Can use 'await' inside
 * - WHY: Enables awaiting promises within function
 * 
 * await Keyword:
 * - Pauses function execution
 * - Waits for promise to resolve
 * - Only works inside async function
 * - Extracts resolved value (unwraps promise)
 * - WHY: Sequential async operations look like sync code
 * 
 * Comparison with Promises:
 * Promise way: func().then(x => func2(x)).then(y => console.log(y))
 * async way: let x = await func(); let y = await func2(x); console.log(y);
 * - async/await is MUCH more readable
 * 
 * Error Handling:
 * - try/catch works naturally with async/await
 * - try { let x = await promise } catch(e) { handle error }
 * - Much cleaner than .catch()
 * - WHY: Familiar error handling pattern
 * 
 * Sequential vs Parallel:
 * - Sequential: await op1; await op2; (slower if independent)
 * - Parallel: Promise.all([op1, op2]) or start both then await
 * 
 * Use-Cases in Testing:
 * - Async test flows: await login(); await fillForm(); await submit();
 * - API testing: const res = await fetch(url); assert(res);
 * - UI automation: await click(selector); await waitForElement();
 * - Setup/teardown: await setup();  test ; await cleanup();
 * - WHERE: Playwright tests, WebDriver tests, any async testing
 * 
 * Best Practices:
 * - Use async/await instead of promises (more readable)
 * - Use Promise.all for parallel operations
 * - Always error handling (try/catch)
 * - Avoid unnecessary awaits in loops
 */

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