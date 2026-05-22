/**
 * PROMISE UTILITY METHODS: all, race, allSettled, any
 * 
 * Promise.all([p1, p2, p3]):
 * - Runs all promises IN PARALLEL
 * - Waits for ALL to succeed
 * - Returns array of results in same order
 * - If ANY promise fails → entire thing fails
 * - WHY: Combine multiple independent async operations
 * - WHERE: Fetch multiple data sources, parallel tests
 * - Example: Load user, posts, comments all at once
 * 
 * Promise.race([p1, p2, p3]):
 * - Runs all promises IN PARALLEL
 * - Returns FIRST promise to complete (success or fail)
 * - Others continue running (wasteful)
 * - WHY: Get first result, timeout handling
 * - WHERE: Timeout fallback, multiple API endpoints
 * - Example: Race two servers, use faster one
 * 
 * Promise.allSettled([p1, p2, p3]):
 * - Runs all promises IN PARALLEL
 * - Waits for ALL to complete (success OR fail)
 * - Returns array of {status, value/reason}
 * - Never rejects (handles all outcomes)
 * - WHY: Need all results regardless of failures
 * - WHERE: Batch operations, error aggregation
 * - Example: Upload 100 files, report all successes/failures
 * 
 * Promise.any([p1, p2, p3]):
 * - Runs all promises IN PARALLEL
 * - Returns FIRST successful promise
 * - Fails if ALL promises fail
 * - WHY: At least one must succeed
 * - WHERE: Redundant services, fallback options
 * - Example: Try multiple mirrors, need at least one
 * 
 * Use-Cases in Testing:
 * - .all(): Wait for multiple test preconditions
 * - .race(): Implement test timeouts
 * - .allSettled(): Run all tests, collect results
 * - .any(): Try multiple test data sources
 * - WHERE: Parallel test execution, test reporting
 * 
 * Performance Comparison:
 * - All: Fail on first error
 * - race: Stop at first completion
 * - allSettled: Always complete, see all results
 * - any: Succeed on first success
 */

let p1 = Promise.resolve("task done");
p1.then((result)=> console.log(result));

let p2 = Promise.reject("error found");
p2.catch((error)=> console.log(error));

// 1. promise.all() :-  run multiple promise in parallel mode &
//  wait unitll all of them are successed.
// Question as promise is a constructor then why new keyword is not used here.

let p3 = Promise.resolve("Apple done");
let p4 = Promise.resolve("Boy Done");
let p5 = Promise.resolve("Cat done");

Promise.all([p3,p4,p5])
                    .then((result)=>{
                        console.log(result);
                    });


// with wait

let flag = true;
let p11 = new Promise((resolve, reject)=>{
    if (flag) {
        setTimeout(()=>{
            resolve('Apple done');
        },2000)
    } else {
        setTimeout(() => {
            reject("Apple not done");
        }, 1000);
    }
});

let p22 =  new Promise((resolve,reject)=>{
    if (flag) {
        setTimeout(() => {
            resolve("Boy Done");
        }, 3000);
    } else {
        setTimeout(() => {
            reject("Boy not done");
        }, 1000);
    }
});

let p33 = new Promise((resolve,reject)=>{
    if (flag) {
        setTimeout(() => {
            resolve("Cat Done");
        }, 4000);
    } else {
        setTimeout(() => {
            reject("Cat not done");
        }, 1000);
    }
});


Promise.all([p11,p22,p33])
                        .then((result)=>{
                            console.log(result);
                        })
                        .catch((error)=>{
                            console.log(error);
                        })
                        .finally((f)=>{
                            console.log("I am finally & I will be run in end");
                        })
                        ;


// now with one promise got reject then whole  

// with wait 

let flag = true;
let p12 = new Promise((resolve, reject)=>{
    if (flag) {
        setTimeout(()=>{
            resolve('Apple done');
        },2000)
    } else {
        setTimeout(() => {
            reject("Apple not done");
        }, 1000);
    }
});

let p13 =  new Promise((resolve,reject)=>{
    if (false) {                                 // I mark this as false to make rejected
        setTimeout(() => {
            resolve("Boy Done");
        }, 3000);
    } else {
        setTimeout(() => {
            reject("Boy not done");
        }, 1000);
    }
});

let p14 = new Promise((resolve,reject)=>{
    if (flag) {
        setTimeout(() => {
            resolve("Cat Done");
        }, 4000);
    } else {
        setTimeout(() => {
            reject("Cat not done");
        }, 1000);
    }
});

Promise.all([p12,p13,14])
                        .then((result)=>{
                            console.log(result);
                        })
                        .catch((error)=>{
                            console.log(error);
                        })
                        .finally(()=>{
                            console.log("I am finally...");
                        })







// race():  return first promise that finish
// what if we provied time let then its processing time


let flag = true;
let r12 = new Promise((resolve, reject)=>{
    if (flag) {
        setTimeout(()=>{
            resolve('Apple done');
        },1000)
    } else {
        setTimeout(() => {
            reject("Apple not done");
        }, 1000);
    }
});

let r13 =  new Promise((resolve,reject)=>{
    if (flag) {                               
        setTimeout(() => {
            resolve("Boy Done");
        }, 1);
    } else {
        setTimeout(() => {
            reject("Boy not done");
        }, 1000);
    }
});

let r14 = new Promise((resolve,reject)=>{
    if (flag) {
        setTimeout(() => {
            resolve("Cat Done");
        }, 1);
    } else {
        setTimeout(() => {
            reject("Cat not done");
        }, 1000);
    }
});

Promise.race([r12,r13,r14])
                        .then((result)=>{
                            console.log(result);
                        })


// 3.  allSettled():
// wait for all promises to finish weather resolve or reject.

let flag = true;
let s12 = new Promise((resolve, reject)=>{
    if (flag) {
        setTimeout(()=>{
            resolve('Apple done');
        },1000)
    } else {
        setTimeout(() => {
            reject("Apple not done");
        }, 1000);
    }
});

let s13 =  new Promise((resolve,reject)=>{
    if (false) {                            // mark this as false to check rejected                               
        setTimeout(() => {
            resolve("Boy Done");
        }, 1);
    } else {
        setTimeout(() => {
            reject("Boy not done");
        }, 1000);
    }
});

let s14 = new Promise((resolve,reject)=>{
    if (flag) {
        setTimeout(() => {
            resolve("Cat Done");
        }, 1);
    } else {
        setTimeout(() => {
            reject("Cat not done");
        }, 1000);
    }
});

Promise.allSettled([s12,s13,s14])
                                .then((result)=>{
                                    console.log(result);
                                })
                                .catch((error)=>{
                                    console.log(error);
                                })




// 4.  any():
// return first successful promise
// if all promise are failed then 
// [AggregateError: All promises were rejected] {
//   [errors]: [ 'Apple not done', 'Boy not done', 'Cat not done' ]
// }

let flag = false;
let x12 = new Promise((resolve, reject)=>{
    if (flag) {
        setTimeout(()=>{
            resolve('Apple done');
        },1000)
    } else {
        setTimeout(() => {
            reject("Apple not done");
        }, 1000);
    }
});

let x13 =  new Promise((resolve,reject)=>{
    if (flag) {                                                        
        setTimeout(() => {
            resolve("Boy Done");
        }, 1);
    } else {
        setTimeout(() => {
            reject("Boy not done");
        }, 1000);
    }
});

let x14 = new Promise((resolve,reject)=>{
    if (flag) {
        setTimeout(() => {
            resolve("Cat Done");
        }, 1);
    } else {
        setTimeout(() => {
            reject("Cat not done");
        }, 1000);
    }
});

Promise.any([x12,x13,x14])
                        .then((result)=>{
                            console.log(result);
                        })
                        .catch((error)=>{
                            console.log(error);
                        })
