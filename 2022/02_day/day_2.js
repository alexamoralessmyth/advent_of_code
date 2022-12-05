var fs = require("fs");
var text = fs.readFileSync("./input_data.txt").toString('utf-8').split("\n");

const handShapeScoreValues = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3
}

const outcomeScoreValues = {
    'W': 6,
    'D': 3,
    'L': 0
}

const outcomes = {
    'A X': 'D',
    'A Y': 'W',
    'A Z': 'L',
    'B X': 'L',
    'B Y': 'D',
    'B Z': 'W',
    'C X': 'W',
    'C Y': 'L',
    'C Z': 'D',
}

function handPlayScore(data) {
    const yourPlay = data[2];
    return handShapeScoreValues[yourPlay];
}

function totalHandPlayScore(data) {
    let score = 0;
    for (let i=0; i < data.length; i++) {
        score = score + handPlayScore(data[i]);
    }
    return score;
}

function outcomeScore(data) {
    const outcome = outcomes[data];

    return outcomeScoreValues[outcome];
}

function totalOutcomeScore(data) {
    let score = 0;
    for (let i=0; i < data.length; i++) {
        score = score + outcomeScore(data[i]);
    }
    return score;
}

function totalScore(data) {
    return totalHandPlayScore(data) + totalOutcomeScore(data);
}

// tests
const testData = ['C Z', 'B Y', 'C X', 'B Z', 'C Y'] // [3, 3, 6, 6, 0]
// console.log(`The first line of text should = 'C Z': ${text[0] === 'C Z'}`);
// console.log(`The score of 'C Z' = 6: ${handPlayScore(text[0]) === 6}`);
console.log(`The score of the first 5 rows = 11: ${totalHandPlayScore(testData) === 11}`);
console.log(`The outcome score of the first 5 rows = 18: ${totalOutcomeScore(testData) === 18}`)
console.log(`The total score = 29: ${totalScore(testData) === 29}`)

console.log(`totalOutcomeScore = ${totalOutcomeScore(text)}`)
console.log(`totalHandPlayScore = ${totalHandPlayScore(text)}`)
console.log(`total score = ${totalScore(text)}`)