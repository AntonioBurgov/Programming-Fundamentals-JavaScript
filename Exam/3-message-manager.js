function message(input) {
    let capacity = Number(input.shift());
    let line = input.shift();
    let arr = [];
    let obj = {
        name: 0,
        sent: 0,
        received: 0,
        sum: 0
    };
    while (line !== 'Statistics') {
        let [command, ...data] = line.split('=');
        switch (command) {
            case 'Add': {
                let username = data[0];
                let sent = Number(data[1]);
                let received = Number(data[2]);
                if (!Object.hasOwnProperty(username)) {
                    obj.name = username;
                    obj.sent = sent;
                    obj.received = received;
                    obj.sum = sent + received
                    arr.push(obj);
                    obj = {};
                }
                break;
            }
            case 'Message': {
                let sender = data[0];
                let receiver = data[1];

                let person = arr.find(({ name }) => name === sender);
                let person1 = arr.find(({ name }) => name === receiver);

                if (person && person1) {
                    person.sent += 1;
                    person.sum += 1
                    person1.received += 1;
                    person1.sum += 1
                }
                if (person.sum >= capacity) {
                    let index = arr.indexOf(person);
                    arr.splice(index, 1);
                    console.log(`${person.name} reached the capacity!`);
                } if (person1.sum >= capacity) {
                    let index = arr.indexOf(person1);
                    arr.splice(index, 1);
                    console.log(`${person1.name} reached the capacity!`);
                }
                break;
            }
            case 'Empty':
                let username = data[0]
                let person = arr.find(({ name }) => name === username);
                if (person) {
                    let index = arr.indexOf(person);
                    arr.splice(index, 1);
                }
                if (data[0] === 'All') {
                    arr = [];
                }
                break;
        }
        // let removed = arr.find(({ sum }) => sum >= capacity);
        //  if (removed) {
        //   let index = arr.indexOf(removed);
        //  arr.splice(index, 1);
        //  console.log(`${removed.name} reached the capacity!`);
        //  }
        line = input.shift();
    }
    console.log(`Users count: ${arr.length}`);
    arr.forEach(p => console.log(`${p.name} - ${p.sum}`));
}
message(["10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"])


