const firstNum = parseInt(process.argv[2], 10); // Convert first argument to an integer
const secondNum = parseInt(process.argv[3], 10); // Convert second argument to an integer

function add(a, b) {
    return a + b;
}

if (!isNaN(firstNum) && !isNaN(secondNum)) {
    console.log(add(firstNum, secondNum));
} else {
    console.log("NaN");
}
