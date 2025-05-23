const argument = process.argv[2]; // Get the first argument from the command line
const number = parseInt(argument, 10); // Convert argument to an integer

if (!isNaN(number)) {
    console.log("My number: " + number);
} else {
    console.log("Not a number");
}
