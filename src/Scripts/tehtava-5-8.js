let number = readNumber('Monennen luvun haluat Fibonaccin lukujonosta?');

document.write("Numero on: " + fibonacci(number));

function fibonacci(number) {
    if (number < 2)
        return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

function readNumber(inputTextMessage) {
    let input = prompt(inputTextMessage, '0');
    if (input == null) return null;
    input = Number(input);
    return isNaN(input) ? readNumber(inputTextMessage) : input;
}