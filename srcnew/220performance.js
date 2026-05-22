/**
 * PERFORMANCE OPTIMIZATION: Debouncing, Throttling, Memoization
 * 
 * DEBOUNCING
 * ===========
 * What is Debouncing:
 * - Delay execution until activity stops
 * - Cancel previous timers on new call
 * - Executes AFTER pause period
 * - Use case: Search input, resize, scroll
 * 
 * How It Works:
 * - Call function multiple times
 * - Each call resets timer
 * - Only executes when timer completes
 * - Reduces function calls significantly
 * 
 * THROTTLING
 * ===========
 * What is Throttling:
 * - Execute at most once per interval
 * - Allows periodic execution
 * - Executes at regular intervals
 * - Use case: Scroll events, mouse move
 * 
 * How It Works:
 * - Allow execution, disable for interval
 * - Next call queued after interval
 * - Guarantees minimum delay between calls
 * - Rate-limited execution
 * 
 * Debounce vs Throttle:
 * - Debounce: Wait for pause
 * - Throttle: Periodic execution
 * - Debounce: Search (final result)
 * - Throttle: Scroll (continuous)
 * 
 * MEMOIZATION
 * ============
 * What is Memoization:
 * - Cache function results
 * - Return cached result for same input
 * - Avoids recomputation
 * - Improves performance
 * 
 * How It Works:
 * - Create cache object/map
 * - Check cache before computing
 * - Store result in cache
 * - Return cached value on hit
 * 
 * WHY These Patterns:
 * - Debounce: Reduce server requests
 * - Throttle: Smooth performance
 * - Memoization: Cache expensive computations
 * - All improve user experience
 * 
 * WHERE Used:
 * - Debounce: Input validation, search, autocomplete
 * - Throttle: Scroll, resize, mouse move
 * - Memoization: API calls, calculations, DOM queries
 * 
 * Use-Cases in Testing:
 * - Test debounce behavior
 * - Test throttle timing
 * - Test memoization hit/miss
 * - Test cache invalidation
 * 
 * WHERE: Performance, event handling, caching
 */

// ========== DEBOUNCING ==========

// Example 1: Simple Debounce
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

// Usage: Search input
const search = (query) => console.log("Searching:", query);
const debouncedSearch = debounce(search, 500);

// Multiple calls, only last executes after 500ms
debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("jav");
debouncedSearch("java"); // Only this executes


// Example 2: Debounce with Leading/Trailing
function debounceAdvanced(func, delay, options = {}) {
    let timeoutId;
    let lastCallTime = 0;
    
    return function(...args) {
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        
        clearTimeout(timeoutId);
        
        if (options.leading && timeSinceLastCall >= delay) {
            func(...args);
            lastCallTime = now;
        } else {
            timeoutId = setTimeout(() => {
                if (options.trailing !== false) {
                    func(...args);
                }
                lastCallTime = now;
            }, delay);
        }
    };
}


// Example 3: Debounce Form Input
const handleInput = (event) => {
    console.log("Input value:", event.target.value);
    // Validate or fetch data
};

const debouncedInput = debounce(handleInput, 300);

// Simulate input events
// input.addEventListener("input", debouncedInput);


// ========== THROTTLING ==========

// Example 4: Simple Throttle
function throttle(func, interval) {
    let lastCallTime = 0;
    
    return function(...args) {
        const now = Date.now();
        
        if (now - lastCallTime >= interval) {
            func(...args);
            lastCallTime = now;
        }
    };
}

// Usage: Scroll event
const handleScroll = () => console.log("Scroll position");
const throttledScroll = throttle(handleScroll, 1000);

// Multiple calls, executes max every 1000ms


// Example 5: Throttle with Pending Flag
function throttleAdvanced(func, interval) {
    let isThrottled = false;
    let pendingArgs = null;
    
    return function(...args) {
        if (!isThrottled) {
            func(...args);
            isThrottled = true;
            
            setTimeout(() => {
                isThrottled = false;
                
                if (pendingArgs) {
                    func(...pendingArgs);
                    pendingArgs = null;
                }
            }, interval);
        } else {
            pendingArgs = args;
        }
    };
}


// Example 6: Request Animation Frame Throttle
function throttleRAF(func) {
    let isScheduled = false;
    
    return function(...args) {
        if (!isScheduled) {
            isScheduled = true;
            requestAnimationFrame(() => {
                func(...args);
                isScheduled = false;
            });
        }
    };
}

// Usage: Mouse move, resize
// window.addEventListener("mousemove", throttleRAF(handleMouseMove));


// ========== MEMOIZATION ==========

// Example 7: Simple Memoization
function memoize(func) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            console.log("Cache hit for", key);
            return cache[key];
        }
        
        console.log("Computing for", key);
        const result = func(...args);
        cache[key] = result;
        return result;
    };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

memoizedAdd(5, 3); // Computing...
memoizedAdd(5, 3); // Cache hit


// Example 8: Memoization with Map
function memoizeMap(func) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = func(...args);
        cache.set(key, result);
        return result;
    };
}


// Example 9: Expensive Calculation Memoization
const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const memoFib = memoize(fibonacci);

console.log(memoFib(10)); // Fast (with memoization)


// Example 10: API Response Memoization
const memoizedFetch = memoize((url) => {
    console.log("Fetching:", url);
    return fetch(url).then(r => r.json());
});

// memoizedFetch("/api/users"); // Fetches
// memoizedFetch("/api/users"); // Cached


// Example 11: LRU Cache (Least Recently Used)
function lruMemoize(func, maxSize = 10) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            // Move to end (most recent)
            const value = cache.get(key);
            cache.delete(key);
            cache.set(key, value);
            return value;
        }
        
        const result = func(...args);
        cache.set(key, result);
        
        // Remove oldest if exceeded max size
        if (cache.size > maxSize) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
        
        return result;
    };
}


// Example 12: Comparing Debounce vs Throttle
function compareDebouncThrottle() {
    let debounceCount = 0;
    let throttleCount = 0;
    
    const debounceFunc = debounce(() => debounceCount++, 100);
    const throttleFunc = throttle(() => throttleCount++, 100);
    
    // Simulate 10 rapid calls
    for (let i = 0; i < 10; i++) {
        debounceFunc();
        throttleFunc();
    }
    
    // After 100ms: debounce=1, throttle=1-2
    setTimeout(() => {
        console.log("After debounce/throttle window:");
        console.log("Debounce executed:", debounceCount, "times");
        console.log("Throttle executed:", throttleCount, "times");
    }, 150);
}


// Example 13: Testing Debounce
async function testDebounce() {
    let callCount = 0;
    const debouncedFunc = debounce(() => callCount++, 100);
    
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    
    console.assert(callCount === 0, "Should not call immediately");
    
    await new Promise(resolve => setTimeout(resolve, 150));
    console.assert(callCount === 1, "Should call once after delay");
}


// Example 14: Testing Memoization
function testMemoization() {
    let computeCount = 0;
    const expensive = () => {
        computeCount++;
        return Math.random();
    };
    
    const memoized = memoize(expensive);
    
    const result1 = memoized(1, 2);
    const result2 = memoized(1, 2);
    
    console.assert(result1 === result2, "Should return same cached result");
    console.assert(computeCount === 1, "Should compute only once");
}


// Example 15: Practical Example - Auto-Save
function createAutoSave(saveFunc, delay = 1000) {
    const debouncedSave = debounce(saveFunc, delay);
    
    return {
        onChange: debouncedSave,
        saveNow: () => saveFunc() // Force save
    };
}

const autoSave = createAutoSave(
    () => console.log("Saving..."),
    500
);

// Multiple edits, saves only after pause
// input.addEventListener("change", autoSave.onChange);
// button.addEventListener("click", autoSave.saveNow);


// Example 16: Practical Example - Search with Debounce
async function createSmartSearch(searchFunc, delay = 300) {
    const debouncedSearch = debounce(searchFunc, delay);
    
    return async (query) => {
        if (query.length < 3) return [];
        debouncedSearch(query);
    };
}


// Example 17: Practical Example - Window Resize
const handleResize = () => {
    console.log("Window resized to:", window.innerWidth);
};

const throttledResize = throttle(handleResize, 250);
// window.addEventListener("resize", throttledResize);


// Example 18: Combination Pattern - Debounce + Memoize
function debounceAndMemoize(func, delay = 300) {
    const memoized = memoize(func);
    return debounce(memoized, delay);
}


// Example 19: Performance Comparison
function comparePerformance() {
    console.time("Without optimization");
    for (let i = 0; i < 1000000; i++) {
        // Expensive operation
    }
    console.timeEnd("Without optimization");
    
    console.time("With memoization");
    const cached = memoize(() => {
        let sum = 0;
        for (let i = 0; i < 1000; i++) sum++;
        return sum;
    });
    
    for (let i = 0; i < 1000000; i++) {
        cached(); // Instant return from cache
    }
    console.timeEnd("With memoization");
}


// Example 20: Cheat Sheet
const optimizationCheatSheet = {
    debounce: "Use for: Search input, form validation",
    throttle: "Use for: Scroll, resize, mousemove",
    memoize: "Use for: Expensive calculations, repeated calls",
    combined: "Use all three for maximum optimization"
};

console.log("Optimization techniques:", optimizationCheatSheet);
