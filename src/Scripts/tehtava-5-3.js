let y = readNumber('Anna luku josta haluat laskea itseisarvon.');

document.write(getAbsoluteValue(y) + ' on lukusi itseisarvo.');

function getAbsoluteValue(value){
    return Math.abs(value);
}
function readNumber(inputTextMessage) {
    let input = prompt(inputTextMessage, '0');
    input = Number(input);
    return isNaN(input) ? readNumber(inputTextMessage) : input;
}