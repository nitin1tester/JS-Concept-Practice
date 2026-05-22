/**
 * WHY TYPESCRIPT: Limitations of JavaScript
 * 
 * Problem 1: Type Safety
 * - JavaScript is dynamically typed (type can change anytime)
 * - let x = 10; x = "nitin"; // No error, but BUG!
 * - Runtime error: calling string method on unexpected value
 * - In large codebases, hard to track type changes
 * - SOLUTION (TypeScript): Strict types, compile-time errors
 * 
 * Problem 2: No IDE Suggestions
 * - JavaScript: No auto-complete for methods
 * - Parameter hints don't show expected types
 * - Relying on JSDoc comments (hacky workaround)
 * - Must memorize API or look documentation
 * - SOLUTION (TypeScript): Full IDE support, IntelliSense
 * 
 * Problem 3: Runtime Errors
 * - Passing wrong type causes runtime error
 * - myName(10) → toString() fails (type error at runtime)
 * - JavaScript accepts anything, finds error later
 * - Hard to debug in CI/CD pipelines
 * - SOLUTION (TypeScript): Compile-time type checking
 * 
 * Example Problem:
 * - JavaScript: function myName(stName) { return stName.toLowerCase(); }
 * - myName(10) → Works at parse time, crashes at runtime
 * - TypeScript: function myName(stName: string) → Error at compile time
 * 
 * Benefits of TypeScript:
 * - Type Safety: Catch errors before runtime
 * - IDE Support: Auto-complete, suggestions, refactoring
 * - Self-Documenting: Types show what function expects
 * - Better Maintainability: Less debugging, more confidence
 * - Enterprise Ready: Scalable, team collaboration
 * 
 * Drawbacks of JavaScript:
 * - Type Safety: None, errors at runtime
 * - Scalability: Hard to maintain large projects
 * - Team Development: Easy to introduce bugs
 * - Refactoring: Risky without types
 * 
 * Use-Cases for TypeScript:
 * - Large projects: Type safety matters
 * - Teams: Type prevents miscommunication
 * - Long-term maintenance: Types as documentation
 * - Critical systems: Cannot tolerate runtime errors
 * 
 * Use-Cases Still Using JavaScript:
 * - Small projects, scripts
 * - Prototypes, learning
 * - Browser-only projects
 * - Where build step not available
 * 
 * WHERE: Modern web development, large apps, test frameworks
 * 
 * Note: TypeScript compiles to JavaScript
 * - TypeScript is superset of JavaScript
 * - Adds types, compiles to JS for browsers
 * - No performance overhead in runtime (errors caught pre-runtime)
 */

// Problem with JS 

// 1. data type can be change in middle by other dev 
let x = 10;
x = "nitin"; // someone change data type in middle then in 
// large code base its diffcult to debug this code. 
console.log(x);
// app.ts(strict type & show compile time error for 'X' even after CE it will give output "nitin" ) 
//  >> app.js(not strict type(no error)) >> O/p :- nitin 

// 2. No suggestion during function implimentation during implimentation ex: stName must 
// be a student name but its not giving method suggestion. we use hack of function documenction  
// to get suggestion.
function myName(stName){
    return stName.toLowerCase();
}
console.log(myName("NITIN HERE"));
// 3. if I am passing number in place of string then error will come to know during runtime
// but in TS i will see CE when i will pass 10 below. 
console.log(myName(10));

