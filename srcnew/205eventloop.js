/**
 * TIMING & EVENT LOOP: setTimeout, setInterval, Event Loop Basics
 * 
 * JavaScript Execution Model:
 * - Single-threaded: One task at a time
 * - Event Loop: Continuously checks for tasks
 * - Call Stack: Currently executing code
 * - Callback Queue: Tasks waiting to execute
 * - Microtask Queue: Promises and higher priority tasks
 * 
 * setTimeout(callback, delay):
 * - Delays execution by minimum 'delay' milliseconds
 * - NOT guaranteed to execute at exact time
 * - Placed in Callback Queue after delay
 * - Executed when Call Stack is empty
 * - Returns timeoutId for cancellation
 * 
 * setInterval(callback, interval):
 * - Repeatedly executes callback every 'interval' milliseconds
 * - Returns intervalId for cancellation
 * - Keep running until clearInterval() called
 * - Can cause memory issues if not cleared
 * 
 * Event Loop Flow:
 * 1. Execute synchronous code (Call Stack)
 * 2. Check Microtask Queue (Promises)
 * 3. Check Callback Queue (setTimeout, events)
 * 4. Render (if needed)
 * 5. Repeat
 * 
 * WHY Event Loop:
 * - Keep app responsive (don't block UI)
 * - Handle multiple operations concurrently
 * - Prioritize important tasks
 * - Manage timing of callbacks
 * 
 * WHERE Used:
 * - Delays: Waiting before action
 * - Polling: Checking status periodically
 * - Animations: Smooth frame updates
 * - Debouncing: Delaying rapid events
 * - Event handling: User interactions
 * 
 * Use-Cases in Testing:
 * - Wait for element: setTimeout before assertion
 * - Polling for completion: Check status every 100ms
 * - Async test timeout: Test must complete within time
 * - Simulating delays: Testing retry logic
 * - Event timing: Testing event sequences
 * 
 * WHERE: Async operations, event handling, animation, polling
 * 
 * Best Practices:
 * - Always clear intervals to prevent memory leaks
 * - Use small delays (not 0, actual queue time varies)
 * - Prefer Promises/async-await over nested timeouts
 * - Test event loop with microtask/callback ordering
 */

// Example 1: Basic setTimeout
console.log("Start");

setTimeout(() => {
    console.log("Delayed by 1000ms");
}, 1000);

console.log("End");

// Output:
// Start
// End
// (after 1s) Delayed by 1000ms


// Example 2: setTimeout(0) - Not Immediate
console.log("1");

setTimeout(() => {
    console.log("2 - setTimeout(0)");
}, 0);

console.log("3");

// Output:
// 1
// 3
// 2 - setTimeout(0)  (still goes to callback queue)


// Example 3: clearTimeout - Cancel Scheduled Task
const timeoutId = setTimeout(() => {
    console.log("This will be cancelled");
}, 2000);

// Cancel before it executes
clearTimeout(timeoutId);
console.log("Timeout cancelled");


// Example 4: setInterval - Repeated Execution
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    
    if (count === 3) {
        clearInterval(intervalId); // Stop after 3 iterations
    }
}, 500);

// Output:
// Count: 1
// Count: 2
// Count: 3


// Example 5: Microtask vs Callback Queue
console.log("Synchronous 1");

setTimeout(() => {
    console.log("setTimeout (Callback Queue)");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise (Microtask Queue)");
    });

console.log("Synchronous 2");

// Output:
// Synchronous 1
// Synchronous 2
// Promise (Microtask Queue)    <- Executes before setTimeout!
// setTimeout (Callback Queue)


// Example 6: Testing Pattern - Wait for Element
async function waitForElement(selector, timeout = 5000) {
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeout) {
        const element = document.querySelector(selector);
        if (element) {
            return element;
        }
        // Wait 100ms before checking again
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    throw new Error(`Element ${selector} not found within ${timeout}ms`);
}


// Example 7: Polling Pattern
function pollForStatus(callback, interval = 1000, maxAttempts = 10) {
    let attempts = 0;
    
    const poll = setInterval(() => {
        attempts++;
        console.log(`Polling attempt ${attempts}`);
        
        if (callback()) {
            clearInterval(poll);
            console.log("Condition met");
        } else if (attempts >= maxAttempts) {
            clearInterval(poll);
            console.log("Max attempts reached");
        }
    }, interval);
    
    return poll; // Return id for manual cancellation
}


// Example 8: Debounce with setTimeout
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId); // Cancel previous
        
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const debouncedSearch = debounce((query) => {
    console.log("Searching for:", query);
}, 500);

// Multiple calls, but only searches after 500ms of inactivity
debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("jav");
debouncedSearch("java"); // Only this one executes after 500ms


// Example 9: Throttle with setTimeout
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

const throttledClick = throttle(() => {
    console.log("Click handled");
}, 1000);

// Multiple rapid clicks, but only handles one per second
throttledClick(); // Executed
throttledClick(); // Ignored
throttledClick(); // Ignored


// Example 10: Event Loop Demonstration
function eventLoopDemo() {
    console.log("Script start");
    
    setTimeout(() => {
        console.log("setTimeout 1");
    }, 0);
    
    Promise.resolve()
        .then(() => console.log("Promise 1"))
        .then(() => console.log("Promise 2"));
    
    setTimeout(() => {
        console.log("setTimeout 2");
    }, 0);
    
    console.log("Script end");
}

eventLoopDemo();

// Output:
// Script start
// Script end
// Promise 1            (Microtask queue)
// Promise 2            (Microtask queue)
// setTimeout 1         (Callback queue)
// setTimeout 2         (Callback queue)


// Example 11: Testing Async Behavior
async function testWithDelay() {
    console.log("Test start");
    
    // Wait for potential UI updates
    await new Promise(resolve => setTimeout(resolve, 0));
    
    // Then make assertion
    const element = document.querySelector(".loaded");
    console.log("Element found:", element !== null);
}


// Example 12: Clear Multiple Intervals
const intervals = [];

function startMultipleIntervals(count) {
    for (let i = 0; i < count; i++) {
        const id = setInterval(() => {
            console.log(`Interval ${i}`);
        }, 1000);
        intervals.push(id);
    }
}

function stopAllIntervals() {
    intervals.forEach(id => clearInterval(id));
    intervals.length = 0; // Clear array
    console.log("All intervals stopped");
}
