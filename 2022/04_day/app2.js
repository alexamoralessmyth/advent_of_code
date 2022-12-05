var fs = require("fs");
var text = fs.readFileSync("./input_data.txt").toString('utf-8').split("\n");

function overlapAinB(a, b) {
    // 5-5,4-78 // 17-60, 6-6
    const aLow = Number(a.split('-')[0])
    const aHigh = Number(a.split('-')[1])
    const bLow = Number(b.split('-')[0])
    const bHigh = Number(b.split('-')[1])

    if (aLow === bHigh || aHigh === bLow || bLow == aLow || bHigh == aHigh) {
        return true;
    } else if (aLow > bLow && aLow > bHigh) {
        return false;
    } else if (aLow < bLow && aHigh < bLow) { // 1 < 80 3 < 88
        return false;
    } else { //17 > 6 17 < 7
        return true;
    } 
}

function overlapPairs(data) {
    let pairs = [];
    let sum = 0
    for (let i=0; i < data.length; i++) {
        const elementPair = data[i];
        const element = elementPair.split(',')
        const a = element[0]
        const b = element[1]

        if (a === b || b === a) {
            sum = sum + 1;
        } else if (overlapAinB(a, b)) {
            sum = sum + 1;
        } else if (overlapAinB(b, a)) {
            sum = sum + 1;
        }
    };
    return sum;
}
// testing overlap A WITHIN B (not reverse)
testData = '11-91', '9-10';
// console.log(overlapAinB('11-91', '9-10'))

// test 
console.log(overlapPairs(text))