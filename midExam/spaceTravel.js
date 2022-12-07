function spaceTravel(input) {
    let index = 0;
    let fuel = Number(input[1]);
    let ammunitions = Number(input[2]);
    let isFailed = false;

    commandArr = input.slice(0, 1);
    commandArr = commandArr[0].split('||');
    commandArr = commandArr = commandArr.join(' ').split(' ')

    for (let i = 0; i < (commandArr.length + 1) / 2; i++) {

        let command = commandArr[index];
        index++;
        let number = Number(commandArr[index]);
        index++;

        if (isFailed) {

            break;
        }

        switch (command) {

            case 'Travel':

                if (fuel >= number) {

                    fuel -= number
                    console.log(`The spaceship travelled ${number} light-years.`);

                } else {

                    console.log(`Mission failed.`);
                    isFailed = true;
                }

                break;

            case 'Enemy':

                if (ammunitions >= number) {

                    ammunitions -= number
                    console.log(`An enemy with ${number} armour is defeated.`);

                } else if (fuel >= number * 2) {

                    console.log(`An enemy with ${number} armour is outmaneuvered.`);

                } else {

                    console.log(`Mission failed.`);
                    isFailed = true;

                }


                break;

            case 'Repair':

                fuel += number
                ammunitions += number * 2

                console.log(`Ammunitions added: ${number * 2}.`);
                console.log(`Fuel added: ${number}.`);

                break;

            case 'Titan':

                console.log(`You have reached Titan, all passengers are safe.`);
                
                break;
        }
    }
}
spaceTravel((['Enemy 1||Travel 0||Repair 0||Titan',
    '0',
    '2'])
)