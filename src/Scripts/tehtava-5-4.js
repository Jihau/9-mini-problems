let numbers = [];
for (let i = 0; i < 3; i++) {
    let number = readNumber("Anna luku numero: " + (i + 1));
    if (number != null) {
        numbers.push(number);
    }
}
if (numbers.length == 0) {
    document.write("Et syöttänyt yhtään lukua.");
} else {
    let largestNumber = getLargestNumber(numbers);
    document.write("Suurin antamistasi luvuista on " + largestNumber + ".");
}

function getLargestNumber(numbers) {
    let maxValue = null;
    for (let i = 0; i < numbers.length; i++) {
        if (maxValue == null || numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    }
    return maxValue;
}

function readNumber(inputTextMessage) {
    let input = prompt(inputTextMessage, '0');
    if (input == null) return null;
    input = Number(input);
    return isNaN(input) ? readNumber(inputTextMessage) : input;
}