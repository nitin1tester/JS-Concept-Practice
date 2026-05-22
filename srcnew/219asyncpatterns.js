/**
 * ADVANCED ASYNC PATTERNS: Promise Sequencing, Race, allSettled, Any
 * 
 * Promise.all():
 * - Wait for ALL promises to resolve
 * - Fails if ANY promise rejects
 * - Returns array of results in order
 * - Parallel execution
 * - Use when: All required, fail on any error
 * 
 * Promise.race():
 * - Wait for FIRST promise to settle
 * - Returns value/error of winner
 * - Cancels other promises (not really)
 * - First one determines result
 * - Use when: Need first result, timeout
 * 
 * Promise.allSettled():
 * - Wait for ALL to settle (resolve or reject)
 * - Never rejects
 * - Returns array of {status, value/reason}
 * - All results included
 * - Use when: Need all results regardless
 * 
 * Promise.any():
 * - Wait for FIRST to resolve
 * - Ignores rejections
 * - Fails if all reject
 * - Like race but different
 * - Use when: Need first success
 * 
 * Promise Sequencing:
 * - Execute promises in order
 * - One after another
 * - Previous result to next
 * - reduce() or async loops
 * 
 * WHY These Methods:
 * - all(): Coordinate parallel
 * - race(): Timeout, first win
 * - allSettled(): Robust handling
 * - any(): First success focus
 * - sequencing: Order matters
 * 
 * WHERE Used:
 * - API calls (parallel)
 * - Race conditions
 * - Robust error handling
 * - Timeout patterns
 * - Data loading
 * 
 * Use-Cases in Testing:
 * - Test parallel requests
 * - Test error handling
 * - Test timeouts
 * - Test result ordering
 * - Test failure scenarios
 * 
 * WHERE: Async coordination, parallel execution
 */

// Example 1: Promise.all() - Wait for All
async function promiseAllExample() {
    const promises = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
    ];
    
    const results = await Promise.all(promises);
    console.log("All results:", results); // [1, 2, 3]
}

// promiseAllExample();


// Example 2: Promise.all() with APIs
async function fetchMultipleAPIs() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch("https://api.example.com/users").then(r => r.json()),
            fetch("https://api.example.com/posts").then(r => r.json()),
            fetch("https://api.example.com/comments").then(r => r.json())
        ]);
        
        console.log("All data fetched:", { users, posts, comments });
    } catch (err) {
        console.log("Error fetching data:", err);
    }
}


// Example 3: Promise.all() Failure
async function promiseAllFailure() {
    try {
        const results = await Promise.all([
            Promise.resolve(1),
            Promise.reject(new Error("Failed")),
            Promise.resolve(3)
        ]);
    } catch (err) {
        console.log("Promise.all rejected:", err.message); // "Failed"
    }
}

// promiseAllFailure();


// Example 4: Promise.race() - First Winner
async function promiseRaceExample() {
    const promises = [
        new Promise(resolve => setTimeout(() => resolve("Slow"), 1000)),
        new Promise(resolve => setTimeout(() => resolve("Fast"), 100)),
        new Promise(resolve => setTimeout(() => resolve("Medium"), 500))
    ];
    
    const winner = await Promise.race(promises);
    console.log("Race winner:", winner); // "Fast"
}

// promiseRaceExample();


// Example 5: Promise.race() for Timeout
async function raceWithTimeout() {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 5000)
    );
    
    try {
        const result = await Promise.race([
            fetch("https://api.example.com/data").then(r => r.json()),
            timeout
        ]);
        console.log("Got data:", result);
    } catch (err) {
        console.log("Error:", err.message);
    }
}


// Example 6: Promise.allSettled() - Get All Results
async function allSettledExample() {
    const results = await Promise.allSettled([
        Promise.resolve("Success 1"),
        Promise.reject(new Error("Failed")),
        Promise.resolve("Success 2")
    ]);
    
    console.log("All settled:", results);
    // [
    //   { status: 'fulfilled', value: 'Success 1' },
    //   { status: 'rejected', reason: Error },
    //   { status: 'fulfilled', value: 'Success 2' }
    // ]
}

// allSettledExample();


// Example 7: Promise.allSettled() - Process Results
async function processAllResults() {
    const results = await Promise.allSettled([
        fetch("https://api1.example.com").then(r => r.json()),
        fetch("https://api2.example.com").then(r => r.json()),
        fetch("https://api3.example.com").then(r => r.json())
    ]);
    
    const successful = results
        .filter(r => r.status === "fulfilled")
        .map(r => r.value);
    
    const failed = results
        .filter(r => r.status === "rejected")
        .map(r => r.reason);
    
    console.log("Successful:", successful.length);
    console.log("Failed:", failed.length);
}


// Example 8: Promise.any() - First Success
async function anyExample() {
    try {
        const result = await Promise.any([
            Promise.reject(new Error("Failed 1")),
            Promise.reject(new Error("Failed 2")),
            Promise.resolve("Success!")
        ]);
        
        console.log("First success:", result); // "Success!"
    } catch (err) {
        console.log("All failed:", err.message);
    }
}

// anyExample();


// Example 9: Promise.any() All Fail
async function anyAllFail() {
    try {
        const result = await Promise.any([
            Promise.reject(new Error("Failed 1")),
            Promise.reject(new Error("Failed 2")),
            Promise.reject(new Error("Failed 3"))
        ]);
    } catch (err) {
        console.log("All promises rejected:", err instanceof AggregateError);
    }
}

// anyAllFail();


// Example 10: Retry with Promise.any()
async function retryPromise(fn, retries = 3) {
    const promises = Array.from({ length: retries }, (_, i) =>
        fn().catch(err => {
            console.log(`Attempt ${i + 1} failed`);
            throw err;
        })
    );
    
    return Promise.any(promises);
}


// Example 11: Sequential Promise Execution
async function sequentialExecute() {
    const tasks = [
        () => new Promise(resolve => setTimeout(() => resolve("Task 1"), 100)),
        () => new Promise(resolve => setTimeout(() => resolve("Task 2"), 100)),
        () => new Promise(resolve => setTimeout(() => resolve("Task 3"), 100))
    ];
    
    const results = [];
    for (const task of tasks) {
        const result = await task();
        results.push(result);
    }
    
    console.log("Sequential results:", results);
}

// sequentialExecute();


// Example 12: Promise Chain with reduce()
async function sequentialReduce() {
    const tasks = [
        (prev) => Promise.resolve(`${prev} → 1`),
        (prev) => Promise.resolve(`${prev} → 2`),
        (prev) => Promise.resolve(`${prev} → 3`)
    ];
    
    const result = await tasks.reduce(
        (acc, task) => acc.then(task),
        Promise.resolve("Start")
    );
    
    console.log("Chained result:", result);
}

// sequentialReduce();


// Example 13: Comparing Promise Methods
async function comparePromiseMethods() {
    const createPromise = (delay, result) =>
        new Promise(resolve => setTimeout(() => resolve(result), delay));
    
    // all - waits for all
    const allResult = await Promise.all([
        createPromise(100, "A"),
        createPromise(200, "B"),
        createPromise(300, "C")
    ]);
    console.log("all:", allResult); // Takes 300ms
    
    // race - waits for first
    const raceResult = await Promise.race([
        createPromise(100, "A"),
        createPromise(200, "B"),
        createPromise(300, "C")
    ]);
    console.log("race:", raceResult); // Takes 100ms
    
    // allSettled - waits for all
    const allSettledResult = await Promise.allSettled([
        createPromise(100, "A"),
        createPromise(200, "B"),
        createPromise(300, "C")
    ]);
    console.log("allSettled:", allSettledResult.length); // Takes 300ms
}


// Example 14: Batch Processing with allSettled
async function batchProcess(items, processor, batchSize = 3) {
    const batches = [];
    
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        const promises = batch.map(item => processor(item));
        
        const results = await Promise.allSettled(promises);
        batches.push(results);
    }
    
    return batches;
}


// Example 15: Testing Async Patterns
async function testAsyncPatterns() {
    // Test Promise.all
    const all = await Promise.all([
        Promise.resolve(1),
        Promise.resolve(2)
    ]);
    console.assert(all.length === 2, "Promise.all failed");
    
    // Test Promise.race
    const race = await Promise.race([
        new Promise(r => setTimeout(() => r("winner"), 100)),
        new Promise(r => setTimeout(() => r("loser"), 200))
    ]);
    console.assert(race === "winner", "Promise.race failed");
    
    // Test Promise.allSettled
    const settled = await Promise.allSettled([
        Promise.resolve("ok"),
        Promise.reject("error")
    ]);
    console.assert(settled.length === 2, "Promise.allSettled failed");
    
    console.log("All async pattern tests passed!");
}

// testAsyncPatterns();


// Example 16: Error Recovery with allSettled
async function recoveryPattern() {
    const results = await Promise.allSettled([
        fetch("https://api1.example.com").then(r => r.json()),
        fetch("https://api2.example.com").then(r => r.json()),
        fetch("https://api3.example.com").then(r => r.json())
    ]);
    
    // Use successful ones, skip failures
    const data = results
        .filter(r => r.status === "fulfilled")
        .map(r => r.value);
    
    // Optionally log failures for debugging
    results
        .filter(r => r.status === "rejected")
        .forEach(r => console.error("Failed request:", r.reason));
    
    return data;
}


// Example 17: Timeout Wrapper
function withTimeout(promise, ms) {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), ms)
        )
    ]);
}


// Example 18: Parallel Limit
async function parallelLimit(promises, limit) {
    const results = [];
    
    for (let i = 0; i < promises.length; i += limit) {
        const batch = promises.slice(i, i + limit);
        const batchResults = await Promise.all(batch);
        results.push(...batchResults);
    }
    
    return results;
}


// Example 19: First Success Pattern
async function firstSuccess(promises) {
    for (const promise of promises) {
        try {
            return await promise;
        } catch {
            // Continue to next
        }
    }
    throw new Error("All promises failed");
}


// Example 20: Promise Method Cheat Sheet
const promiseCheatSheet = {
    all: "Wait for ALL promises - fails if any rejects",
    race: "Wait for FIRST promise - returns first settled",
    allSettled: "Wait for ALL to settle - never rejects",
    any: "Wait for FIRST success - ignores rejections",
    sequential: "Execute one after another",
    parallel: "Execute all at once"
};

console.log("Promise methods:", promiseCheatSheet);
