var fs = require("fs");
var text = fs.readFileSync("./input_data.txt").toString('utf-8').split("\n");

function overlapAinB(a, b) {
    const aLow = Number(a.split('-')[0])
    const aHigh = Number(a.split('-')[1])
    const bLow = Number(b.split('-')[0])
    const bHigh = Number(b.split('-')[1])

    if (aLow >= bLow && aHigh <= bHigh ) {
        return true;
    } else {
        return false;
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