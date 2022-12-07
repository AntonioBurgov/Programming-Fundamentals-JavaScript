function users(input) {
    let result = {};
    input.forEach(line => {

        let [company, user] = line.split(' -> ');

        if (!result.hasOwnProperty(company)) {
            result[company] = [user];

        } else {

            if (!result[company].includes(user)) {
                result[company].push(user);
            }
        }
    });

    let sortedResult = Object.entries(result).sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const [company, ID] of sortedResult) {
        console.log(`${company}`);
        console.log('-- ' + ID.join('\n-- '));

    }
}
users([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]

)