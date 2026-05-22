/**
 * Performance Test: Demonstrating function call overhead in a loop
 * This file tests how many times a function can be called within a limited time.
 * Useful for understanding performance bottlenecks and optimization needs.
 * In practical testing scenarios (like automation), this helps identify
 * when code is running inefficiently or has infinite loops.
 * 
 * this code was to explain concept of turbofan optimization in JavaScript engines,
 * where the engine optimizes code that is executed frequently. In this case, the add 
 * function is called a very large number of times, which may lead to performance issues 
 * or even cause the script to run indefinitely if not handled properly. This example 
 * serves as a demonstration of how performance can degrade with excessive function calls 
 * and highlights the importance of optimizing code for better performance.
 * 
 */

function add(a, b) {
  return a + b;
}
for (let i = 0; i < 1000000000000000; i++) {
  add(2, 3);
}