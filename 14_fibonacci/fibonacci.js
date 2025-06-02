const fibonacci = function(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    if (num < 0) return "OOPS";
    return fibonacci(num - 1) + fibonacci(num - 2);
};

for (let i = 0; i < 10; i++) {
    console.log(i, fibonacci(i));
}

// Do not edit below this line
module.exports = fibonacci;
