let gallons = readNumber('Anna bensa gallonoissa');
let liters = gallonsToLiters(gallons);


function gallonsToLiters(gallons){
    document.write('Bensan määrä litroissa on ' + (gallons * 3.785) + 'l.');
}
function readNumber(inputTextMessage) {
    let input = prompt(inputTextMessage, '0');
    input = Number(input);
    return isNaN(input) ? readNumber(inputTextMessage) : input;
}