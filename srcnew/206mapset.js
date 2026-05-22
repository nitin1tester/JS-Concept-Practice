/**
 * MAP & SET: Modern Data Structures
 * 
 * What is a Map:
 * - Key-value pairs (like objects but better)
 * - Any type can be key (not just strings/symbols)
 * - Maintains insertion order
 * - Has .size property (objects don't)
 * - Method-based access: .set(), .get(), .has()
 * 
 * Map Methods:
 * - new Map() - Create empty map
 * - map.set(key, value) - Add/update entry
 * - map.get(key) - Retrieve value
 * - map.has(key) - Check if key exists
 * - map.delete(key) - Remove entry
 * - map.clear() - Remove all entries
 * - map.size - Number of entries
 * 
 * Map Iteration:
 * - for (const [key, value] of map)
 * - map.keys() - Get all keys
 * - map.values() - Get all values
 * - map.entries() - Get all [key, value] pairs
 * - map.forEach((value, key) => {})
 * 
 * What is a Set:
 * - Collection of unique values (no duplicates)
 * - Any type of value can be stored
 * - Maintains insertion order
 * - Has .size property
 * - Method-based: .add(), .has(), .delete()
 * 
 * Set Methods:
 * - new Set() - Create empty set
 * - set.add(value) - Add value
 * - set.has(value) - Check if exists
 * - set.delete(value) - Remove value
 * - set.clear() - Remove all values
 * - set.size - Number of values
 * 
 * Set Iteration:
 * - for (const value of set)
 * - set.values() - Get all values
 * - set.keys() - Same as values() for Set
 * - set.entries() - [value, value] pairs
 * - set.forEach(value => {})
 * 
 * WHY Map vs Object:
 * - Map accepts any type as key
 * - Map has .size property
 * - Map is iterable
 * - Map has useful methods
 * - Object is simpler for simple key-value
 * 
 * WHY Set:
 * - Remove duplicates automatically
 * - Fast membership testing
 * - Clean unique collection
 * - Mathematical operations (union, intersection)
 * 
 * WHERE Used:
 * - Map: Caching, lookups, complex keys
 * - Set: Unique collections, deduplication
 * 
 * Use-Cases in Testing:
 * - Map: Storing test fixtures, mock responses
 * - Set: Tracking tested scenarios, unique IDs
 * - Test Data: Map test cases to results
 * - Cache: Memoizing API responses
 * 
 * WHERE: Caching, deduplication, data structures
 */

// Example 1: Map Basics
const userMap = new Map();

// Add entries
userMap.set("user1", { name: "Alice", age: 30 });
userMap.set("user2", { name: "Bob", age: 25 });
userMap.set(1, "numeric key");

console.log("Map size:", userMap.size); // 3
console.log("Get user1:", userMap.get("user1"));
console.log("Has user2:", userMap.has("user2")); // true
console.log("Has user3:", userMap.has("user3")); // false


// Example 2: Map with Different Key Types
const mixedMap = new Map();

mixedMap.set("string", "value1");
mixedMap.set(123, "value2");
mixedMap.set(true, "value3");
mixedMap.set({ id: 1 }, "value4");
mixedMap.set(["array"], "value5");

console.log("String key:", mixedMap.get("string"));
console.log("Number key:", mixedMap.get(123));
console.log("Boolean key:", mixedMap.get(true));


// Example 3: Map Iteration
const countryMap = new Map([
    ["US", "United States"],
    ["UK", "United Kingdom"],
    ["IN", "India"]
]);

// Using for...of
for (const [code, name] of countryMap) {
    console.log(`${code}: ${name}`);
}

// Using entries()
for (const entry of countryMap.entries()) {
    console.log(entry);
}

// Using forEach
countryMap.forEach((value, key) => {
    console.log(`${key} → ${value}`);
});


// Example 4: Map vs Object Comparison
// Object (old way)
const obj = {};
obj.name = "Test";
obj.age = 30;
console.log("Object size:", Object.keys(obj).length); // No .size property

// Map (modern way)
const mapObj = new Map();
mapObj.set("name", "Test");
mapObj.set("age", 30);
console.log("Map size:", mapObj.size); // Has .size directly


// Example 5: Caching with Map
class DataCache {
    constructor() {
        this.cache = new Map();
    }
    
    set(key, value) {
        this.cache.set(key, value);
    }
    
    get(key) {
        if (this.cache.has(key)) {
            console.log("Cache hit:", key);
            return this.cache.get(key);
        }
        console.log("Cache miss:", key);
        return null;
    }
    
    clear() {
        this.cache.clear();
    }
}

const cache = new DataCache();
cache.set("userId123", { id: 123, name: "Alice" });
cache.get("userId123"); // Cache hit
cache.get("userId456"); // Cache miss


// Example 6: Set Basics
const uniqueNumbers = new Set();

uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(2); // Duplicate, ignored

console.log("Set size:", uniqueNumbers.size); // 3
console.log("Has 2:", uniqueNumbers.has(2)); // true
console.log("Has 5:", uniqueNumbers.has(5)); // false


// Example 7: Set - Remove Duplicates from Array
const arrayWithDuplicates = [1, 2, 2, 3, 3, 3, 4];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log("Unique array:", uniqueArray); // [1, 2, 3, 4]


// Example 8: Set Iteration
const colorSet = new Set(["red", "green", "blue"]);

// for...of
for (const color of colorSet) {
    console.log(color);
}

// forEach
colorSet.forEach(color => {
    console.log(color);
});


// Example 9: Set Operations - Union, Intersection
function setUnion(set1, set2) {
    return new Set([...set1, ...set2]);
}

function setIntersection(set1, set2) {
    return new Set([...set1].filter(x => set2.has(x)));
}

function setDifference(set1, set2) {
    return new Set([...set1].filter(x => !set2.has(x)));
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log("Union:", setUnion(setA, setB)); // Set { 1, 2, 3, 4, 5, 6 }
console.log("Intersection:", setIntersection(setA, setB)); // Set { 3, 4 }
console.log("Difference:", setDifference(setA, setB)); // Set { 1, 2 }


// Example 10: Testing Pattern - Track Test Scenarios
class TestTracker {
    constructor() {
        this.testedScenarios = new Set();
        this.testData = new Map();
    }
    
    addTestData(testId, data) {
        this.testData.set(testId, data);
    }
    
    recordScenario(scenario) {
        this.testedScenarios.add(scenario);
    }
    
    isScenarioTested(scenario) {
        return this.testedScenarios.has(scenario);
    }
    
    getUniqueScenarios() {
        return this.testedScenarios.size;
    }
}

const tracker = new TestTracker();
tracker.addTestData("test1", { input: 5, expected: 10 });
tracker.recordScenario("valid input");
tracker.recordScenario("edge case");
tracker.recordScenario("valid input"); // Duplicate ignored
console.log("Tested scenarios:", tracker.getUniqueScenarios()); // 2


// Example 11: Memoization with Map
function memoize(func) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log("Using cached result");
            return cache.get(key);
        }
        
        const result = func(...args);
        cache.set(key, result);
        return result;
    };
}

const expensiveFunc = memoize((a, b) => {
    console.log("Computing...");
    return a + b;
});

expensiveFunc(5, 3); // Computing... returns 8
expensiveFunc(5, 3); // Using cached result, returns 8


// Example 12: Map vs Object Performance
console.time("Map creation");
const largeMap = new Map();
for (let i = 0; i < 100000; i++) {
    largeMap.set(`key${i}`, i);
}
console.timeEnd("Map creation");

console.time("Object creation");
const largeObj = {};
for (let i = 0; i < 100000; i++) {
    largeObj[`key${i}`] = i;
}
console.timeEnd("Object creation");
