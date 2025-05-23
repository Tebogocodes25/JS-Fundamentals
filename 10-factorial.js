function factorial(n) {
    if (isNaN(n) || n < 0) {
        return "NaN";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const num = process.argv[2]; // Get the argument as a string

if (num === undefined) {
    console.log("No argument");  // Fix: Handle missing argument explicitly
} else {
    console.log(factorial(parseInt(num, 10)));
}



