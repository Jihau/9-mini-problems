let numberOfEntries = readNumber("Anna merkkien/sanojen määrä.");
if (numberOfEntries == null || numberOfEntries == 0) {
    document.write("Ei mitään näytettävää.");
} else {
    let strings = [];
    for (let i = 0; i < numberOfEntries; i++) {
        let text = readText("Anna ensimmäinen merkki/sana " + (i + 1));
        if (text != null) {
            strings.push(text);
        }
    }
    document.write(concatenate(strings));
}

function concatenate(array) {
    return array.join("");
}

function readText(inputTextMessage) {
    let input = prompt(inputTextMessage, '');
    return input == undefined || input.trim().length == 0 || input.trim() == '' ? readText(inputTextMessage) : input;
}

function readNumber(inputTextMessage) {
    let input = prompt(inputTextMessage, '0');
    if (input == null) return null;
    input = Number(input);
    return isNaN(input) ? readNumber(inputTextMessage) : input;
}