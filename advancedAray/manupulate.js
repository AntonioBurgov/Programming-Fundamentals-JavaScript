function manipulate(numbers, commands) {
    
    let sumArray = [];

    for (const el of commands) {
        let array = el.split(' ')
        switch (array[0]) {
            case 'add':

                numbers.splice(Number(array[1]), 0, Number(array[2]));

                break;

            case 'addMany':

                let index = Number(array[1]);
                let j = 0;

                for (let i = 2; i < array.length; i++) {
                    let num = Number(array[i]);
                    numbers.splice(index + j, 0, num)
                    j++;
                }

                break;

            case 'contains':

                let isTrue = true;

                for (let i = 0; i < numbers.length; i++) {
                    if (Number(array[1]) === numbers[i]) {
                        console.log(i);
                        isTrue = false;
                    }
                }

                if (isTrue) {
                    console.log('-1');
                }

                break;

            case 'remove':
                numbers.splice(Number(array[1]), 1)

                break;

            case 'shift':

                for (let i = 0; i < Number(array[1]); i++) {
                    let num = numbers.shift()
                    numbers.push(num)
                }

                break;

            case 'sumPairs':

                let sum = 0;

                for (let i = 0; i < numbers.length; i += 2) {
                    let num1 = Number(numbers[i]);
                    let num2 = Number(numbers[i + 1]);

                    if (num2 > Number.MIN_SAFE_INTEGER && num2 < Number.MAX_SAFE_INTEGER) {
                        sum = num1 + num2;
                    } else {
                        sum = num1;
                    }
                    sumArray.push(sum)
                }
                numbers = sumArray
                sumArray = [];
                break;

            case 'print':

                console.log(numbers);

                break;
        }
    }
}
manipulate([1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
)








