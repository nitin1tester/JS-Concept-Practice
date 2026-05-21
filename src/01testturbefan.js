function add(a, b) {
  return a + b;
}
for (let i = 0; i < 1000000000000000; i++) {
  add(2, 3);
}