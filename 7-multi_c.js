const x = parseInt(process.argv[2], 10); // Convert argument to an integer

if (isNaN(x) || x <= 0) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
