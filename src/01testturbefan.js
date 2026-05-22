/**
 * Performance Test: Demonstrating function call overhead in a loop
 * This file tests how many times a function can be called within a limited time.
 * Useful for understanding performance bottlenecks and optimization needs.
 * In practical testing scenarios (like automation), this helps identify
 * when code is running inefficiently or has infinite loops.
 */
function add(a, b) {
  return a + b;
}
for (let i = 0; i < 1000000000000000; i++) {
  add(2, 3);
}