function furniture(input) {

    let index = 0;
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+[.]?[\d]+)!(?<quantity>[\d]+)/gm
    let totalSum = 0;

    console.log('Bought furniture:');
    
    while (input[index] !== 'Purchase') {

        let product = pattern.exec(input[index]);

        while (product !== null) {

            let name = product.groups.name
            console.log(name);

            let price = product.groups.price

            let quantity = product.groups.quantity

            let sum = price * quantity

            totalSum += sum

            product = pattern.exec(input[index]);
        }
        index++;
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])