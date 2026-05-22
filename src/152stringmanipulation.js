/**
 * STRING METHODS: String Manipulation
 * 
 * Information Methods (Read-only):
 * - .length: Number of characters
 * - .indexOf(char): First occurrence index (-1 if not found)
 * - .lastIndexOf(char): Last occurrence index
 * - .includes(substring): Boolean if contains
 * - .startsWith(prefix): Boolean if starts with
 * - .endsWith(suffix): Boolean if ends with
 * - .charCodeAt(index): ASCII/Unicode value at index
 * 
 * Extraction Methods:
 * - .slice(start, end): Extract portion (negative indexes work)
 * - .substring(start, end): Similar to slice (no negative support)
 * - .charAt(index): Character at index
 * 
 * Case Conversion:
 * - .toUpperCase(): All uppercase
 * - .toLowerCase(): All lowercase
 * 
 * Whitespace Handling:
 * - .trim(): Remove leading/trailing whitespace
 * - .trimStart(): Remove leading whitespace
 * - .trimEnd(): Remove trailing whitespace
 * - WHY: Clean user input, normalize API responses
 * 
 * Replacement:
 * - .replace(old, new): Replace FIRST occurrence
 * - .replaceAll(old, new): Replace ALL occurrences
 * - WHY: Data transformation, sanitization
 * 
 * Important: Strings are IMMUTABLE
 * - All methods return NEW string
 * - Original string unchanged
 * - WHY: Functional programming, prevent side effects
 * 
 * Use-Cases in Testing:
 * - Validate text in UI: element.text.includes('expected')
 * - Compare strings: actual.toLowerCase() === expected
 * - Extract info: url.substring(0, 20)
 * - Clean test data: input.trim().toUpperCase()
 * - WHERE: Assertions, test data prep, string validation
 */

let str = "hello";

console.log(str.length); // 5
console.log(str.indexOf('h')); //0
console.log(str.indexOf('p')); //-1 
console.log(str.indexOf('l'));//2
console.log(str.lastIndexOf('l')); //3
console.log(str.includes('ell'));;
console.log(str.startsWith('he'));
console.log(str.endsWith('lo')); // true

// slice
console.log(str.slice(1,3));
console.log(str.slice(-3));
console.log(str.slice(-5,5));

console.log(str.substring(1,4));

console.log(str.charCodeAt(1)); //  ascii value 101

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.trimStart);
console.log(str.trimEnd);
console.log(str.replace('h' ,"n"));


