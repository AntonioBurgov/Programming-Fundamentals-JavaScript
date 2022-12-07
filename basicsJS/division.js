function solve(number) {
    dividedNumber = 0;
    if (number % 10 === 0) {
        dividedNumber = 10
    } else if (number % 7 === 0) {
        dividedNumber = 7
    } else if (number % 6 === 0) {
        dividedNumber = 6
    } else if (number % 3 === 0) {
        dividedNumber = 3
    } else if (number % 2 === 0) {
        dividedNumber = 2
    }
    if (dividedNumber !== 0) {
        console.log(`The number is divisible by ${dividedNumber}`);
    } else {
        console.log('Not divisible');
    }
}
solve(1693)