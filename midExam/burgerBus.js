function bus(input) {

    let index = 1;
    let profit = 0;
    let sum = 0;
    let townCounter = 0;
    let arrLength = (input.length - 1) / 3

    for (let i = 0; i < arrLength; i++) {

        let town = input[index];
        index++;
        townCounter++;
        let earnedMoney = Number(input[index]);
        index++;
        let expenses = Number(input[index]);
        index++;

        if (townCounter % 3 === 0 && townCounter % 15 !== 0) {
            expenses = expenses * 1.5
        }

        if (townCounter % 15 === 0) {
            earnedMoney = earnedMoney * 0.9
        }
        else if (townCounter % 5 === 0) {
            earnedMoney = earnedMoney * 0.9
        }

        profit = earnedMoney - expenses;
        sum += profit
        console.log(`In ${town} Burger Bus earned ${profit.toFixed(2)} leva.`);
        profit = 0;
        
    }

    console.log(`Burger Bus total profit: ${sum.toFixed(2)} leva.`);
}
bus((["3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"])
)