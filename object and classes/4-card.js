function cardGame(input) {

    let information = {};
    let result = {};
    let power = 0;

    input.forEach(line => {

        let [name, cards] = line.split(': ');
        cards = cards.split(' ');
        information[name] = [];
        if (cards.lenght === 3) {
            for (const [cardNumber1, cardNumber2, cardSymbol] of cards) {
                result[name] = Number(power);
                let cardNumber = cardNumber1 + cardNumber2;
                if (!((information[name]).includes(cardNumber + cardSymbol))) {

                    information[name].push(cardNumber);

                    switch (cardSymbol) {

                        case 'S':
                            if (cardNumber !== 'J' && cardNumber !== 'Q' && cardNumber !== 'K' && cardNumber !== 'A') {
                                power += Number(cardNumber) * 4
                            } else {
                                switch (cardNumber) {
                                    case 'J':
                                        power += 11 * 4
                                        break;
                                    case 'Q':
                                        power += 12 * 4
                                        break;
                                    case 'K':
                                        power += 13 * 4
                                        break;
                                    case 'A':
                                        power += 14 * 4
                                        break;
                                }
                            }

                            break;

                        case 'H':
                            if (cardNumber !== 'J' && cardNumber !== 'Q' && cardNumber !== 'K' && cardNumber !== 'A') {
                                power += Number(cardNumber) * 3
                            } else {
                                switch (cardNumber) {
                                    case 'J':
                                        power += 11 * 3
                                        break;
                                    case 'Q':
                                        power += 12 * 3
                                        break;
                                    case 'K':
                                        power += 13 * 3
                                        break;
                                    case 'A':
                                        power += 14 * 3
                                        break;
                                }
                            }

                            break;

                        case 'D':
                            if (cardNumber !== 'J' && cardNumber !== 'Q' && cardNumber !== 'K' && cardNumber !== 'A') {
                                power += Number(cardNumber) * 2
                            } else {
                                switch (cardNumber) {
                                    case 'J':
                                        power += 11 * 2
                                        break;
                                    case 'Q':
                                        power += 12 * 2
                                        break;
                                    case 'K':
                                        power += 13 * 2
                                        break;
                                    case 'A':
                                        power += 14 * 2
                                        break;
                                }
                            }

                            break;

                        case 'C':
                            if (cardNumber !== 'J' && cardNumber !== 'Q' && cardNumber !== 'K' && cardNumber !== 'A') {
                                power += Number(cardNumber)
                            } else {
                                switch (cardNumber) {
                                    case 'J':
                                        power += 11
                                        break;
                                    case 'Q':
                                        power += 12
                                        break;
                                    case 'K':
                                        power += 13
                                        break;
                                    case 'A':
                                        power += 14
                                        break;
                                }
                            }

                            break;
                    }
                } else {

                    console.log('gogo');
                }

                result[name] = Number(power);
            }
        } else {
            for (const [cardNumber, cardSymbol] of cards) {
                result[name] = Number(power);

                if (!((information[name]).includes(cardNumber + cardSymbol))) {

                    information[name].push(cardNumber + cardSymbol);

                    switch (cardSymbol) {

                        case 'S':
                            if (cardNumber !== 'J' && cardNumber !== 'Q' && cardNumber !== 'K' && cardNumber !== 'A') {
                                power += Number(cardNumber) * 4
                            } else {
                                switch (cardNumber) {
                                    case 'J':
                                        power += 11 * 4
                                        break;
                                    case 'Q':
                                        power += 12 * 4
                                        break;
                                    case 'K':
                                        power += 13 * 4
                                        break;
                                    case 'A':
                                        power += 14 * 4
                                        break;
                                }
                            }

                            break;

                        case 'H':
                            if (cardNumber !== 'J' && cardNumber !== 'Q' && cardNumber !== 'K' && cardNumber !== 'A') {
                                power += Number(cardNumber) * 3
                            } else {
                                switch (cardNumber) {
                                    case 'J':
                                        power += 11 * 3
                                        break;
                                    case 'Q':
                                        power += 12 * 3
                                        break;
                                    case 'K':
                                        power += 13 * 3
                                        break;
                                    case 'A':
                                        power += 14 * 3
                                        break;
                                }
                            }

                            break;

                        case 'D':
                            if (cardNumber !== 'J' && cardNumber !== 'Q' && cardNumber !== 'K' && cardNumber !== 'A') {
                                power += Number(cardNumber) * 2
                            } else {
                                switch (cardNumber) {
                                    case 'J':
                                        power += 11 * 2
                                        break;
                                    case 'Q':
                                        power += 12 * 2
                                        break;
                                    case 'K':
                                        power += 13 * 2
                                        break;
                                    case 'A':
                                        power += 14 * 2
                                        break;
                                }
                            }

                            break;

                        case 'C':
                            if (cardNumber !== 'J' && cardNumber !== 'Q' && cardNumber !== 'K' && cardNumber !== 'A') {
                                power += Number(cardNumber)
                            } else {
                                switch (cardNumber) {
                                    case 'J':
                                        power += 11
                                        break;
                                    case 'Q':
                                        power += 12
                                        break;
                                    case 'K':
                                        power += 13
                                        break;
                                    case 'A':
                                        power += 14
                                        break;
                                }
                            }

                            break;
                    }
                } else {

                    console.log('gogo');
                }

                result[name] = Number(power);
            }
        }
    });
    console.log(result);
}
cardGame([
    'Peter: 10C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
);