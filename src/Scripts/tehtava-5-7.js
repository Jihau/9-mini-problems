"use strict";
let number = readNumber("Anna luku.");
const upperLimit = 100;
let numbers = [];
for (let i = 0; i < number; i++) {
    numbers.push(getRandomNumber(upperLimit * (-1), upperLimit));
}
let text = "****************************************\n";
text += "Alkuperäisestä taulukosta on filteröity uuteen taulukkoon" + "\n";
text += "parilliset numerot filter() metodilla." + "\n";
text += "****************************************\n";
printToTextArea(text);

let square = Math.sqrt(numbers.length);
document.write(drawTable(numbers, Math.ceil(square)));
let dataEvenNumber = filterEvenNumbers(numbers);
document.write(drawTable(dataEvenNumber, Math.ceil( Math.sqrt(dataEvenNumber.length))));

function getEven(numbers) {
    return (numbers % 2 == 0);
}

function filterEvenNumbers(numbers) {
    const evenNumber = numbers.filter((n) => getEven(n));
    return evenNumber;
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
        table += "<td>" + (cellContents[cellContentsKey]) + "</td>";
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