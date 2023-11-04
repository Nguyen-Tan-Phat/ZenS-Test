const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function minMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const minSum = arr.slice(0, 4).reduce((acc, current) => acc + current, 0);
    const maxSum = arr.slice(1).reduce((acc, current) => acc + current, 0);
    console.log(minSum, maxSum);
}

rl.question('Enter five space-separated integers: ', (input) => {
    const arr = input.split(' ').map(Number);
    minMaxSum(arr);
    rl.close();
});
