"use strict";
let number = readNumber("Anna luku.");
const upperLimit = 100;
let numbers = [];
for (let i = 0; i < number; i++) {
    numbers.push(getRandomNumber(upperLimit * (-1), upperLimit));
}
let text = "****************************************\n";
text += "Alkuperäiset numerot:\n";
text += numbers.toString() + "\n";
text += "****************************************\n";
printToTextArea(text);

let square = Math.sqrt(numbers.length);
document.write(drawTable(numbers, Math.ceil(square)));

function opposite(number) {
    let result;
    if (!isNaN(Math.sign(number))) {
        result = number * (-1);
    }
    return result;
}

function readNumber(inputTextMessage) {
    let input = prompt(inputTextMessage, '0');
    if (input == null) return null;
    input = Number(input);
    return isNaN(input) ? readNumber(inputTextMessage) : input;
}

function drawTable(cellContents, columnsPerRow) {
    let table = "<div class=\"tableContainer\"><table><tbody>";
    let counter = 0;
    for (const cellContentsKey in cellContents) {
        if (counter == 0) {
            table += "<tr>";
        }
        counter++;
        table += "<td>" + opposite(cellContents[cellContentsKey]) + "</td>";
        if (counter == columnsPerRow) {
            table += "</tr>";
            counter = 0;
        }
    }

    table += "</tbody></table></div>";
    return table;
}

function getRandomNumber(min, max) {
    return (min - 1) + Math.ceil(Math.random() * (max - min + 1))
}

function printToTextArea(message) {
    window.top.postMessage(message,'*');
}