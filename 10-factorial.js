#!/usr/bin/node

// Get the first argument from the command line
const num = parseInt(process.argv[2]);

// Define the factorial function
function factorial(n) {
  if (n < 0) return 1;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Check if num is a number and print factorial
console.log(isNaN(num) ? 1 : factorial(num));




