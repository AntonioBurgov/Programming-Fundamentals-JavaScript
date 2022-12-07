function minerTask(input) {

    let resources = {};

    for (let index = 0; index < input.length; index += 2) {

        const resource = input[index];
        const quantity = input[index + 1];

        if (!resources.hasOwnProperty(resource)) {

            resources[resource] = Number(quantity);

        } else {

            resources[resource] += Number(quantity);

        }

    }

    for (const item in resources) {

        console.log(`${item} -> ${resources[item]} `);

    }
}
minerTask(
    [
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ]
);