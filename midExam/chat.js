function chat(input) {
    
    let arr = input.join(' ').
        split(' ');

    let chat = [];
    let index = 0;

    for (let i = 0; i < arr.length; i++) {

        let command = arr[index];
        index++;
        let isTrue = command === 'Chat' || command === 'Edit' || command === 'Spam' || command === 'Delete' || command === 'Pin' || command === 'end'
        
        if (isTrue) {

            switch (command) {

                case 'Chat':

                    let message1 = arr[index];
                    index++;
                    chat.push(message1);

                    break;

                case 'Edit':

                    let message2 = arr[index];
                    index++;
                    let editedMessage = arr[index];
                    index++;

                    for (let i = 0; i < chat.length; i++) {
                        let element = chat[i];
                        if (element === message2) {
                            chat.splice(i, 1, editedMessage)
                        }
                    }

                    break;

                case 'Spam':

                    let message3 = arr[index];

                    while (message3 !== 'Chat' && message3 !== 'Edit' && message3 !== 'Spam' && message3 !== 'Delete' && message3 !== 'Pin' && message3 !== 'end') {
                        chat.push(message3)
                        index++;
                        message3 = arr[index];
                    }

                    break;

                case 'Delete':

                    let message4 = arr[index];
                    index++;

                    for (let i = 0; i < chat.length; i++) {
                        let element = chat[i];
                        if (element === message4) {
                            chat.splice(i, 1);
                        }
                    }

                    break;

                case 'Pin':

                    let message5 = arr[index];
                    index++;

                    for (let i = 0; i < chat.length; i++) {
                        let element = chat[i];
                        if (element === message5) {
                            let spliced = chat.splice(i, 1);
                            chat.push(spliced);
                        }
                    }

                    break;

                case 'end':

                    console.log(chat.join('\n'));

                    break;
            }
        }
    }
}
chat(["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"])
