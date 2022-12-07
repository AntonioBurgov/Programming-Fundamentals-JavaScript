function solve(numbers) {
    let condensed = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.length === 1) {
            console.log(numbers);
            break;
        }
        if (condensed.length < numbers.length - 1) {
            condensed[i] = numbers[i] + numbers[i + 1];
        } else {
            numbers = condensed;
            condensed = [];
            i = - 1;
        }
    }
}
solve([5, 10, 3])