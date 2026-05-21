
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




