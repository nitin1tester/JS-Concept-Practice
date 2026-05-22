/**
 * CALLBACK HELL: "Pyramid of Doom"
 * 
 * Definition: Deeply nested callbacks creating arrow-like pyramid shape
 * Problem: Multiple async operations dependent on each other
 * 
 * Symptoms:
 * - Deeply indented code (hard to read)
 * - Hard to debug: Stack traces confusing
 * - Hard to error handling: Where does error come from?
 * - Maintenance nightmare: Changing flow is complex
 * 
 * Example: Coffee machine with 5 sequential steps
 * - Each step depends on previous completing
 * - Callback in callback in callback...
 * - Code looks like pyramid leaning right
 * 
 * Anti-Patterns to Avoid:
 * - step1(() => { step2(() => { step3(() => { ... }) }) })
 * - Should be: await step1(); await step2(); await step3();
 * 
 * Solutions Introduced (Evolution):
 * 1. Original Problem: Callbacks (Callback Hell)
 * 2. First Solution: Promises (`.then().then()`)
 * 3. Modern Solution: async/await (looks like sync code)
 * 
 * Why Promises Better than Callbacks:
 * - Easier to read (flat chain vs nested pyramid)
 * - Better error handling (catch at any point)
 * - Better composability (combine promises)
 * 
 * Why async/await Better than Promises:
 * - Looks like synchronous code (familiar)
 * - Easier to understand flow
 * - Try/catch works naturally
 * 
 * Use-Cases in Testing (Where This Appears):
 * - Automation scripts with many sequential steps
 * - API tests with dependent requests
 * - UI tests with waiting for elements
 * - Setup/teardown with multiple async operations
 * - WHERE: Never use this pattern, always use async/await
 */

// call back hell: pyramid of doom

// multiple async operation / tasks , they depends on each other  --- nested callback/indented callbacks
// hard to read
// hard to debug

// example:- coffee machine 
// 1 start the machine. -- 5 sec
// 2. grind then bean  -- 3 sec
// 3. boil water  -- 4 sec
// 4. brew coffee -- 2 sec
// 5. pour into cup -- 6 sec

// setTimeout((name,name2, name3 , age) => {
//     console.log("hello",name, name2, name3, age);
// }, 3000, 'nitin', 'shraddha', 'shivansh', 1);


function startCoffeeMachine(callback){
    setTimeout(()=>{
        console.log('1 start the machine.');
        callback();
    },5000);
};

function grindBeans(callback){
    setTimeout(()=>{
        console.log("2. grind then bean");
        callback();
    },3000)
};

function boilWater(callback){
    setTimeout(()=>{
        console.log("3. boil water");
        callback();
    },4000) 
}

function brewCoffee(callback){
    setTimeout(()=>{
        console.log("4. brew coffee");
        callback();
    },2000)
}

function pourCup(callback){
    setTimeout(()=>{
        console.log("5. pour into cup");
        callback();
    },6000)
}


function makeCoffee(callback){
    console.log("making a coffee");
    callback();
}

// we will never use this kind of code in our projec 
makeCoffee(()=>{
    startCoffeeMachine(()=>{
        grindBeans(()=>{
            boilWater(()=>{
                brewCoffee(()=>{
                    pourCup(()=>{
                        console.log("your coffee is ready");
                    })
                })
            })
        })
    })
})


//new way using async/await
// async function makeCofeeNewWay() {
//     await startCoffeeMachine();
//     await grindBeans();
//     await boilWater();
//     await brewCoffee();
//     await pourCup();
// }


// to resolve this kind issue promises are introduce.
// async, await 


