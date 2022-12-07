function bossRush(input) {
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/gm
    let count = input.shift();
    let index = 0;
    let employee = pattern.exec(input);
    for (const el of input) {
        if (el === employee[0]) {
            let strength = employee.groups.name.length
            let armor = employee.groups.title.length
            console.log(`${employee.groups.name}, The ${employee.groups.title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
        } else {
            console.log(`Access denied!`);
        }
    }
}
bossRush(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'])
