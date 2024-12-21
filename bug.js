function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // Error if x is not an object with length property
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(5)); // TypeError: Cannot read properties of undefined (reading 'length')