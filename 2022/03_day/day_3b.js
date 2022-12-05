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

function repeatedItem(group) {
    const elfOne = stripRepeatedLetters(group[0].split('').sort());

    let matchBetweenOneAndTwo = [];
    for (let i=0; i < elfOne.length; i++) {
        if (group[1].match(elfOne[i])){
            matchBetweenOneAndTwo.push(elfOne[i]);
        }
    }

    let finalMatch = [];
    for (let i=0; i < matchBetweenOneAndTwo.length; i++) {
        if (group[2].match(matchBetweenOneAndTwo[i])){
            finalMatch.push(matchBetweenOneAndTwo[i]);
        }
    }
    return finalMatch[0];
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

function groupedElves(data) {
    let elves = [];
    for (let i=0; i < data.length; i++) {
        if (((i+1) % 3) === 0) {
            elves.push([data[i-2], data[i-1], data[i]]);
        }
    }
    return elves;
}

function total(groupedElfData) {
    let sum = 0;
    console.log(groupedElfData[99])
    for (let i=0; i < groupedElfData.length; i++) {
        sum = sum + points(repeatedItem(groupedElfData[i]));
    }
    return sum;
}


//tests

console.log(total(groupedElves(text)))