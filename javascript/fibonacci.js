const fibNums = [0,1];
function fibonacci(num) {
    if(fibNums[num] !== undefined) return fibNums[num];
    fibNums.push(fibonacci(num-1) + fibonacci(num-2));
    return fibNums[num];
}

if (require.main === module) {
// add your own tests in here
console.log("Expecting: 0");
console.log("=>", fibonacci(2));

console.log("");

console.log("Expecting: 1");
console.log("=>", fibonacci(2));

console.log("");

console.log("Expecting: 55");
console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution