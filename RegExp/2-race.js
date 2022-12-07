function race(input) {
    let index = 0;

    const racers = input.shift().split(', ');
    const info = {};

    for (const racer of racers) {
        info[racer] = 0;
    }

    const pattern1 = /[A-Za-z]/gm
    const pattern2 = /\d/gm

    while (input[index] !== 'end of race') {

        let row = input[index];
        const words = row.match(pattern1);
        const numbers = row.match(pattern2).map(x => Number(x));

        const name = words.join('');
        const distance = numbers.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);

        index++;

        if (info.hasOwnProperty(name)) {
            info[name] += distance
        }
    }

    let sortedInfo = Object.entries(info).sort((kvpA, kvpB) => kvpB[1]-kvpA[1]);

    console.log(`1st place: ${sortedInfo[0][0]}`);
    console.log(`2nd place: ${sortedInfo[1][0]}`);
    console.log(`3rd place: ${sortedInfo[2][0]}`);

} race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']

)