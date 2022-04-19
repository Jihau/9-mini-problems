const number = readNumber('Monennen luvun haluat Fibonaccin lukujonosta?');

const fibonacci = (number) => (number < 2) ? number: (fibonacci(number - 1) + fibonacci(number - 2));

document.write("Numero on: " + fibonacci(number));

function readNumber(inputTextMessage) {
    let input = prompt(inputTextMessage, '0');
    if (input == null) return null;
    input = Number(input);
    return isNaN(input) ? readNumber(inputTextMessage) : input;
}