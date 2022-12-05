var fs = require("fs");
var text = fs.readFileSync("./input_data.txt").toString('utf-8').split("\n");

const charPointValue = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
}

function repeatedItem(rucksack) {
    const compartmentOne = rucksack.slice(0, (rucksack.length/2));
    const compartmentTwo = rucksack.slice((rucksack.length/2));
    const sortedCompartmentOne =compartmentOne.split('').sort();
    const compareCompartmentOne = stripRepeatedLetters(sortedCompartmentOne);

    for (let i=0; i < compareCompartmentOne.length; i++) {
        if (compartmentTwo.match(compareCompartmentOne[i])){
            return compareCompartmentOne[i];
        }
    }
}

function stripRepeatedLetters(compartment) {
    let unique = [];
    for (let i=0; i < compartment.length; i++) {
        if (i === 0) {
            unique.push(compartment[i]);
        } else {
            if (compartment[i] !== compartment[i - 1]) {
                unique.push(compartment[i]);
            }
        }
    }
    return unique;
}

function points(character) {
    if (character === character.toLowerCase()) {
        return charPointValue[character.toLowerCase()];
    } else {
        return (charPointValue[character.toLowerCase()] + 26)
    }
}

function total(data) {
    let sum = 0;
    for (let i=0; i < data.length; i++) {
        const valueOfItem = points(repeatedItem(data[i]));
        sum = sum + valueOfItem;
    }
    return sum;
}

console.log(total(text));