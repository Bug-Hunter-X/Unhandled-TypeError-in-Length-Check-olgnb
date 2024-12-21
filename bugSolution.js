function foo(x) {
  if (x === null || typeof x !== 'object' || x.length === undefined) {
    return 0; // Handle null, non-objects, and objects without length
  }
  return x.length;
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(5)); // Output: 0
console.log(foo({})); // Output: 0