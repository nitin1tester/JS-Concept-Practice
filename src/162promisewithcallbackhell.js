/**
 * PROMISE CHAINING: Sequential Async Operations
 * 
 * Concept:
 * - Each .then() returns new promise
 * - Next .then() waits for previous to complete
 * - Creates flat sequence vs nested callbacks
 * 
 * How Chaining Works:
 * - Step 1: promise.then() → get result A
 * - Step 2: .then() → use result A, return result B
 * - Step 3: .then() → use result B, return result C
 * - CRITICAL: Must return value/promise from each .then()
 * 
 * Error Handling:
 * - Single .catch() at end handles any error in chain
 * - Error stops chain execution (remaining .then() skipped)
 * - Finally runs regardless of success/error
 * 
 * Use-Cases:
 * - Coffee Machine: step1().then(step2).then(step3)
 * - API Calls: fetch(url1).then(res => fetch(res.nextUrl))
 * - Database: query1().then(result => query2(result))
 * 
 * Problem This Solves:
 * - Callback Hell: Deeply nested callbacks
 * - Hard to read: Now readable left-to-right
 * - Error handling: Centralized catch
 * 
 * Note: Even better with async/await
 * - Promise chaining still used but async/await preferred
 * - Looks more like synchronous code
 * 
 * Use-Cases in Testing:
 * - Test flows: step1().then(step2).then(assert)
 * - API testing: request().then(validate).then(cleanup)
 * - UI automation: click().then(wait).then(verify)
 * - WHERE: Multi-step tests, async validations
 */

// let do same example "coffee machine" with promise now
// example:- coffee machine 
// 1 start the machine. -- 5 sec
// 2. grind then bean  -- 3 sec
// 3. boiling water  -- 4 sec
// 4. brew coffee -- 2 sec
// 5. pour into cup -- 6 sec

//Note: (found mistake missed return statement grindBeans method) 
// Need to debug this code as 2nd point is missing.
// 1 start the machine
// undefined
// 3. boiling water
// 4. brew coffee
// 5. pour into cup 
// Your coffee is ready
// Go back to desk

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
    })
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
    })
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
    })
};

// even this is not used for real time project.
startMachine(true)
                .then((n)=> {
                    console.log(n);
                    return grindBeans(true); 
                })
                .then((n)=> {
                    console.log(n);
                    return boilWater(true); 
                })
                .then((n)=>{
                    console.log(n);
                    return brewCoffee(true);
                })
                .then((n)=>{
                    console.log(n);
                    return pourToCup(true);
                })
                .then((n)=>{
                    console.log(n);
                    console.log("Your coffee is ready");
                })
                .finally(()=>console.log("Go back to desk"));




