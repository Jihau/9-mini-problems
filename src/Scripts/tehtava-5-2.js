let y = readNumber('Anna bensa gallonoissa');
let z = gallonsToLiters(y);

document.write('Bensan määrä litroissa on ' + z + 'l.');

function gallonsToLiters(gallons){
    let x = gallons * 3.785;
    return x;
}
function readNumber(inputTextMessage) {
    let input = prompt(inputTextMessage, '0');
    input = Number(input);
    return isNaN(input) ? readNumber(inputTextMessage) : input;
}