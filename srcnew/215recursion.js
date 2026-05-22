/**
 * RECURSION & TAIL RECURSION: Functions Calling Themselves
 * 
 * What is Recursion:
 * - Function calling itself
 * - Must have base case (stop condition)
 * - Each call reduces problem size
 * - Call stack grows with each call
 * 
 * Recursion Structure:
 * 1. Base Case: Stop condition
 * 2. Recursive Case: Function calls itself
 * 3. Progress: Move toward base case
 * 
 * How It Works:
 * - Each call creates stack frame
 * - Stack grows: call1 → call2 → call3...
 * - Base case returns value up stack
 * - Stack unwinds returning results
 * 
 * Stack Overflow:
 * - Too deep recursion exhausts stack
 * - Error: Maximum call stack size exceeded
 * - Happens with no base case or infinite recursion
 * - Browser/Node.js have stack limits (~1000-10000 calls)
 * 
 * Tail Recursion:
 * - Last operation is recursive call
 * - Compiler can optimize (tail call optimization)
 * - Reuses stack frame (doesn't create new)
 * - JavaScript engines don't guarantee TCO
 * - Safari does optimize, V8 limited support
 * 
 * WHY Recursion:
 * - Natural for tree/graph traversal
 * - Cleaner code than loops for some problems
 * - Divides problem recursively
 * - Mathematical elegance
 * 
 * WHERE Used:
 * - Tree/graph traversal (DOM, file systems)
 * - Divide and conquer (merge sort, quick sort)
 * - Parsing (recursive descent parsers)
 * - Math (factorial, Fibonacci)
 * - Backtracking (puzzle solving)
 * 
 * Use-Cases in Testing:
 * - Test recursive data structures
 * - Traverse nested test objects
 * - Generate test cases recursively
 * - DOM element traversal
 * - Fixture tree generation
 * 
 * WHERE: Tree/graph operations, mathematical problems
 * 
 * Common Recursion Patterns:
 * 1. Linear recursion: Single recursive call
 * 2. Binary recursion: Two recursive calls
 * 3. Multiple recursion: More than two calls
 * 4. Tail recursion: Recursive call at end
 * 5. Mutual recursion: Functions calling each other
 */

// Example 1: Simple Recursion - Factorial
function factorial(n) {
    // Base case
    if (n <= 1) return 1;
    
    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120


// Example 2: Counting Down
function countDown(n) {
    // Base case
    if (n === 0) {
        console.log("Done!");
        return;
    }
    
    console.log(n);
    // Recursive case
    countDown(n - 1);
}

countDown(3); // 3, 2, 1, Done!


// Example 3: Tree Traversal
const tree = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4 },
        right: { value: 5 }
    },
    right: {
        value: 3,
        right: { value: 6 }
    }
};

function traverseTree(node) {
    if (!node) return;
    
    console.log(node.value);
    traverseTree(node.left);
    traverseTree(node.right);
}

traverseTree(tree); // 1, 2, 4, 5, 3, 6


// Example 4: Sum Array Elements
function sumArray(arr, index = 0) {
    // Base case
    if (index === arr.length) return 0;
    
    // Recursive case
    return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4])); // 10


// Example 5: Search in Nested Array
function findInNested(arr, target) {
    for (const item of arr) {
        if (item === target) return true;
        if (Array.isArray(item) && findInNested(item, target)) {
            return true;
        }
    }
    return false;
}

const nested = [1, [2, [3, 4]], 5];
console.log(findInNested(nested, 3)); // true
console.log(findInNested(nested, 10)); // false


// Example 6: Flatten Nested Array
function flatten(arr) {
    const result = [];
    
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item)); // Recursive
        } else {
            result.push(item);
        }
    }
    
    return result;
}

console.log(flatten([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]


// Example 7: Power Function
function power(base, exp) {
    // Base case
    if (exp === 0) return 1;
    
    // Recursive case
    return base * power(base, exp - 1);
}

console.log(power(2, 3)); // 8


// Example 8: Fibonacci (Inefficient)
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8 (but very slow for large n)


// Example 9: Fibonacci with Memoization (Optimized)
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

console.log(fibonacciMemo(10)); // 55 (fast even for large n)


// Example 10: Binary Search
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1; // Base case: not found
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid; // Found
    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right); // Recursive: right half
    }
    return binarySearch(arr, target, left, mid - 1); // Recursive: left half
}

console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3


// Example 11: Tail Recursion - Power
function powerTail(base, exp, result = 1) {
    // Base case
    if (exp === 0) return result;
    
    // Tail recursive - last operation is recursive call
    return powerTail(base, exp - 1, result * base);
}

console.log(powerTail(2, 3)); // 8 (potential for optimization)


// Example 12: Tail Recursion - Sum
function sumTail(arr, index = 0, acc = 0) {
    if (index === arr.length) return acc;
    
    // Tail recursive
    return sumTail(arr, index + 1, acc + arr[index]);
}

console.log(sumTail([1, 2, 3, 4])); // 10


// Example 13: DOM Tree Recursion
function collectElementIds(element, ids = []) {
    if (element.id) {
        ids.push(element.id);
    }
    
    for (const child of element.children) {
        collectElementIds(child, ids);
    }
    
    return ids;
}

// Would work on actual DOM
// const ids = collectElementIds(document.body);


// Example 14: Quick Sort (Divide and Conquer)
function quickSort(arr) {
    if (arr.length <= 1) return arr; // Base case
    
    const pivot = arr[0];
    const left = arr.slice(1).filter(x => x < pivot);
    const right = arr.slice(1).filter(x => x >= pivot);
    
    // Recursive case
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, 1, 4, 1, 5, 9, 2, 6])); // [1, 1, 2, 3, 4, 5, 6, 9]


// Example 15: Testing Recursion
function testRecursion() {
    // Test factorial
    console.assert(factorial(5) === 120, "Factorial failed");
    console.assert(factorial(0) === 1, "Factorial(0) failed");
    
    // Test tree traversal (count nodes)
    let count = 0;
    function countNodes(node) {
        if (!node) return;
        count++;
        countNodes(node.left);
        countNodes(node.right);
    }
    countNodes(tree);
    console.assert(count === 6, "Tree traversal failed");
    
    console.log("All recursion tests passed!");
}

testRecursion();
