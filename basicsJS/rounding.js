function solve(number, precision) {
    if (precision > 15) {
        precision = 15
    }
    number = parseFloat(number.toFixed(precision))
    console.log(number);
}
solve(3.1415926535897932384626433832795,2)