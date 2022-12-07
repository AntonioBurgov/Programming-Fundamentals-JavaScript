function solve(firstNumber, lastNumber) {
    let sum = 0;
    let num = ''
    for (let i = firstNumber; i <= lastNumber; i++) {
        num += `${i} `
        sum += i
    }
console.log(num);
console.log(`Sum: ${sum}`);
}
solve(5, 10)