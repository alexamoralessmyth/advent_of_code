var fs = require("fs");
var text = fs.readFileSync("./input_data.txt").toString('utf-8').split("\n");

const outcomeScoreValues = {
    'Z': 6,
    'Y': 3,
    'X': 0
}

const yourPlay = {
    'A X': 3, //ROCK LOSS SCISSORS
    'A Y': 1, // ROCK DRAW ROCK = 1
    'A Z': 2, // ROCK WIN PAPER = 2
    'B X': 1, // PAPER LOSS ROCK = 1
    'B Y': 2, // PAPER DRAW PAPER = 2
    'B Z': 3, // PAPER WIN SCISS = 3
    'C X': 2, // SCISS LOSS PAPER = 2
    'C Y': 3, // SCISS DRAW SCOSS = 3
    'C Z': 1, // SCISS WIN ROCK = 1
}

function handPlayScore(data) {
    const yourPlayScore = yourPlay[data];
    return yourPlayScore;
}

function totalScore(data) {
    let score = 0;
    for (let i=0; i < data.length; i++) {
        const outcome = data[i][2];
        score = (score + handPlayScore(data[i]) + outcomeScoreValues[outcome]);
    }
    return score;
}

const testData = ['C Z', 'B Y', 'C X', 'B Z', 'C Y'] // [1, 2, 2, 3, 3]
// console.log(`The score of the first 5 rows = 12: ${totalScore(testData) === 11}`);
// console.log(`The outcome score of the first 5 rows = 18: ${totalOutcomeScore(testData) === 18}`)
console.log(`The total score = 29: ${totalScore(testData) === 29}`)

console.log(totalScore(text))
