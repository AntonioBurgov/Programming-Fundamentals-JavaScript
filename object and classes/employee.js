function employee(names) {
    let obj = {};
    for (const el of names) {

        let number = Number(el.length);

        obj.firstName = el;
        obj.specialNumber = number
        
        console.log(`Name: ${obj.firstName} -- Personal Number: ${obj.specialNumber} `);
    }
}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])