/**
 * GENERATORS & ITERATORS: Advanced Iteration with yield
 * 
 * What is an Iterator:
 * - Object with next() method
 * - next() returns { value, done }
 * - value: current item
 * - done: true when iteration complete
 * - Implements Iterator Protocol
 * 
 * What is Iterable:
 * - Object with Symbol.iterator method
 * - Symbol.iterator returns an Iterator
 * - Can be used in for...of loops
 * - Implements Iterable Protocol
 * 
 * What is a Generator:
 * - Function that can pause and resume
 * - Uses yield keyword to pause
 * - Returns Generator object (iterator)
 * - Syntax: function* name() { yield value; }
 * 
 * Generator Syntax:
 * - function*(): asterisk marks generator
 * - yield: pause execution, return value
 * - yield*: delegate to other generator
 * - return: final value
 * - next(): resume, get next value
 * 
 * Generator Flow:
 * 1. gen = generatorFunc() - create generator
 * 2. gen.next() - first yield, returns { value, done: false }
 * 3. gen.next() - resume, next yield
 * 4. gen.next() - until done: true
 * 
 * WHY Generators:
 * - Lazy evaluation (compute on demand)
 * - Memory efficient (don't precompute all)
 * - Stateful iteration
 * - Infinite sequences possible
 * - Cleaner async code
 * 
 * WHERE Used:
 * - Pagination (yield page at a time)
 * - Streaming (yield chunks)
 * - Tree traversal (recursive iteration)
 * - Infinite sequences (Fibonacci)
 * - Async iteration (async generators)
 * 
 * Use-Cases in Testing:
 * - Generate test data on demand
 * - Paginate large test sets
 * - Lazy assertion generation
 * - Mock data streams
 * - Scenario iteration
 * 
 * WHERE: Lazy evaluation, pagination, streaming
 * 
 * Key Methods:
 * - gen.next(): Resume and get next value
 * - gen.return(value): Stop and return value
 * - gen.throw(error): Throw error in generator
 * - for...of loop: Automatically calls next()
 */

// Example 1: Manual Iterator
function createIterator(array) {
    let index = 0;
    
    return {
        next() {
            if (index < array.length) {
                return { value: array[index++], done: false };
            } else {
                return { done: true };
            }
        }
    };
}

const iter = createIterator([1, 2, 3]);
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { done: true }


// Example 2: Iterable Object with Symbol.iterator
const iterableObj = {
    data: [1, 2, 3],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                }
                return { done: true };
            }
        };
    }
};

for (const value of iterableObj) {
    console.log(value); // 1, 2, 3
}


// Example 3: Simple Generator Function
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = simpleGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }


// Example 4: Generator with for...of
function* countTo(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}

for (const num of countTo(5)) {
    console.log(num); // 1, 2, 3, 4, 5
}


// Example 5: Infinite Generator (Fibonacci)
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3


// Example 6: Generator with Parameters
function* range(start, end, step = 1) {
    for (let i = start; i <= end; i += step) {
        yield i;
    }
}

for (const num of range(0, 10, 2)) {
    console.log(num); // 0, 2, 4, 6, 8, 10
}


// Example 7: Generator Delegation with yield*
function* delegated() {
    yield 1;
    yield 2;
}

function* delegator() {
    yield* delegated();
    yield 3;
}

for (const val of delegator()) {
    console.log(val); // 1, 2, 3
}


// Example 8: Generator Return Value
function* generatorWithReturn() {
    yield 1;
    yield 2;
    return "done";
}

const genReturn = generatorWithReturn();
console.log(genReturn.next()); // { value: 1, done: false }
console.log(genReturn.next()); // { value: 2, done: false }
console.log(genReturn.next()); // { value: "done", done: true }


// Example 9: Two-way Communication with yield
function* twoWay() {
    const value1 = yield "first";
    console.log("Received:", value1);
    
    const value2 = yield "second";
    console.log("Received:", value2);
}

const tw = twoWay();
tw.next(); // Start
tw.next("hello"); // Pass value to first yield
tw.next("world"); // Pass value to second yield


// Example 10: Generator for Pagination
function* paginate(items, pageSize) {
    for (let i = 0; i < items.length; i += pageSize) {
        yield items.slice(i, i + pageSize);
    }
}

const data = Array.from({ length: 25 }, (_, i) => i + 1);
for (const page of paginate(data, 10)) {
    console.log("Page:", page);
}


// Example 11: Generator for Tree Traversal
function* treeWalk(node) {
    if (node.value) {
        yield node.value;
    }
    if (node.left) {
        yield* treeWalk(node.left);
    }
    if (node.right) {
        yield* treeWalk(node.right);
    }
}

const tree = {
    value: 1,
    left: { value: 2, left: { value: 4 }, right: { value: 5 } },
    right: { value: 3, right: { value: 6 } }
};

for (const val of treeWalk(tree)) {
    console.log(val); // 1, 2, 4, 5, 3, 6
}


// Example 12: Generator with Error Handling
function* errorGenerator() {
    try {
        yield "start";
        yield "middle";
    } catch (err) {
        console.log("Caught error:", err.message);
        yield "recovered";
    }
}

const errGen = errorGenerator();
errGen.next(); // "start"
errGen.throw(new Error("oops")); // Caught error: oops
errGen.next(); // "recovered"


// Example 13: Generator for Lazy Mapping
function* lazyMap(array, mapper) {
    for (const item of array) {
        yield mapper(item);
    }
}

const numbers = [1, 2, 3, 4, 5];
const doubled = lazyMap(numbers, x => x * 2);

for (const val of doubled) {
    console.log(val); // 2, 4, 6, 8, 10
}


// Example 14: Async Generator
async function* asyncCounter(n) {
    for (let i = 1; i <= n; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        yield i;
    }
}

async function runAsyncGen() {
    for await (const num of asyncCounter(3)) {
        console.log("Async:", num); // 1, 2, 3 (with delays)
    }
}


// Example 15: Testing with Generators
function* testDataGenerator(count) {
    for (let i = 1; i <= count; i++) {
        yield {
            id: i,
            name: `User${i}`,
            email: `user${i}@example.com`,
            active: i % 2 === 0
        };
    }
}

// Use in test
for (const userData of testDataGenerator(5)) {
    console.log(`Testing user: ${userData.name}`);
}
