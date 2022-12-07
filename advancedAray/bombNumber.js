function bombNumber(numbers, specialNumbers) {
    let bombNumber = specialNumbers[0];
    let detonatror = specialNumbers[1];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        let currentNumber = numbers[i];

        if (currentNumber === bombNumber) {
            if (i - detonatror < 0) {
                numbers.splice((i + 1), detonatror);
                for (let j = 0; j <= i; j++) {
                    numbers.shift()
                }
            } else {
                numbers.splice((i - detonatror), detonatror * 2 + 1);
            }
            i = -1;
        }
    }

    for (const el of numbers) {
        sum += Number(el)
    }
    console.log(sum);
}
bombNumber([1, 2, 3, 4, 5, 6, 7, 8, 2, 5, 6, 7, 8, 2, 3, 4, 5, 6],
    [2, 3]
)

