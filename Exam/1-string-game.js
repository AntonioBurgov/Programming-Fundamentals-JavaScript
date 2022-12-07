function game(input) {
    let string = input.shift();
    let command = input.shift().split(' ');
    while (command[0] !== 'Done') {
        switch (command[0]) {
            case 'Change':
                for (const el of string) {
                    if (el === command[1]) {
                        string = string.replace(el, command[2]);
                    }
                }
                console.log(string);
                break;
            case 'Includes': {
                let isTrue = string.includes(command[1]);
                if (isTrue) {
                    console.log('True');
                    break;
                }
                console.log('False');
                break;
            }
            case 'End': {
                let isTrue = string.endsWith(command[1]);
                if (isTrue) {
                    console.log('True');
                    break;
                }
                console.log('False');
                break;
            }
            case 'Uppercase':
                string = string.toUpperCase();
                console.log(string);
                break;
            case 'FindIndex':
                let index = string.indexOf(command[1]);
                console.log(index);
                break;
            case 'Cut':
                let part = string.slice(Number(command[1]), Number(command[1]) + Number(command[2]));
                console.log(part);
                break;
            case 'Done':
                break;
        }
        command = input.shift().split(' ');
    }
}
game(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])
