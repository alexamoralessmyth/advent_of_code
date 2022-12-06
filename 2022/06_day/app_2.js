const { sign } = require("crypto");
var fs = require("fs");
var text = fs.readFileSync("./input_data.txt").toString('utf-8').split("\n");

function startOfPacket(data) {

    let signal = [];

    for (let i=0; i < (data.length-13); i++) {
        const letter = data[i];
        signal.push(letter)
        
        const letter2 = data[i+1];
        const letter3 = data[i+2];
        const letter4 = data[i+3];
        const letter5 = data[i+4];
        const letter6 = data[i+5];
        const letter7 = data[i+6];
        const letter8 = data[i+7];
        const letter9 = data[i+8];
        const letter10 = data[i+9];
        const letter11 = data[i+10];
        const letter12 = data[i+11];
        const letter13 = data[i+12];
        const letter14 = data[i+13];
        
        const signalGroup = [
            letter, letter2, letter3, letter4,
            letter5, letter6, letter7, letter8,
            letter9, letter10, letter11, letter12,
            letter13, letter14
        ]

        for (let i=0; i < signalGroup.length; i++) {
            const checkLetter = signalGroup[i];

            if (signal.find(element => element === checkLetter) === undefined) {
                signal.push(checkLetter);
            }
        };

        if (signal.length === 14) {
            return signal;
        } else {
            signal = [];
        }
    };

}

function findIndexesOfSignal(data) {
    const marker = startOfPacket(data);
    let firstSignalIndexes = [];
    let secondSignalIndexes = [];
    let thirdSignalIndexes = [];
    let fourthSignalIndexes = [];
    let fifthSignalIndexes = [];
    let sixthSignalIndexes = [];
    let seventhSignalIndexes = [];
    let eighthSignalIndexes = [];
    let ninthSignalIndexes = [];
    let tenthSignalIndexes = [];
    let eleventhSignalIndexes = [];
    let twelfthSignalIndexes = [];
    let thirteenthSignalIndexes = [];
    let fourteenthSignalIndexes = [];

    for (let i=0; i < data.length; i++) {
        const dataLetter = data[i];
       
        if (dataLetter === marker[0] ) {
            firstSignalIndexes.push(i);
        } else if (dataLetter === marker[1]) {
            secondSignalIndexes.push(i);
        } else if (dataLetter === marker[2]) {
            thirdSignalIndexes.push(i);
        } else if (dataLetter === marker[3]) {
            fourthSignalIndexes.push(i);
        } else if (dataLetter === marker[4]) {
            fifthSignalIndexes.push(i);
        } else if (dataLetter === marker[5]) {
            sixthSignalIndexes.push(i);
        } else if (dataLetter === marker[6]) {
            seventhSignalIndexes.push(i);
        } else if (dataLetter === marker[7]) {
            eighthSignalIndexes.push(i);
        } else if (dataLetter === marker[8]) {
            ninthSignalIndexes.push(i);
        } else if (dataLetter === marker[9]) {
            tenthSignalIndexes.push(i);
        } else if (dataLetter === marker[10]) {
            eleventhSignalIndexes.push(i);
        } else if (dataLetter === marker[11]) {
            twelfthSignalIndexes.push(i);
        } else if (dataLetter === marker[12]) {
            thirteenthSignalIndexes.push(i);
        } else if (dataLetter === marker[13]) {
            fourteenthSignalIndexes.push(i);
        } 
    };
    return {
        1: firstSignalIndexes,
        2: secondSignalIndexes,
        3: thirdSignalIndexes,
        4: fourthSignalIndexes,
        5: fifthSignalIndexes,
        6: sixthSignalIndexes,
        7: seventhSignalIndexes,
        8: eighthSignalIndexes,
        9: ninthSignalIndexes,
        10: tenthSignalIndexes,
        11: eleventhSignalIndexes,
        12: twelfthSignalIndexes,
        13: thirteenthSignalIndexes,
        14: fourteenthSignalIndexes,
    };
}

function signalLocation(data) {
    const indexesOfSignal = findIndexesOfSignal(data);
    let signalLocation = 0;

    for (let i=0; i < indexesOfSignal['1'].length; i++) {
        const firstSignalIndex = indexesOfSignal['1'][i];

        if (
            indexesOfSignal['2'].find(element => element === (firstSignalIndex + 1)) &&
            indexesOfSignal['3'].find(element => element === (firstSignalIndex + 2)) &&
            indexesOfSignal['4'].find(element => element === (firstSignalIndex + 3)) &&
            indexesOfSignal['5'].find(element => element === (firstSignalIndex + 4)) &&
            indexesOfSignal['6'].find(element => element === (firstSignalIndex + 5)) &&
            indexesOfSignal['7'].find(element => element === (firstSignalIndex + 6)) &&
            indexesOfSignal['8'].find(element => element === (firstSignalIndex + 7)) &&
            indexesOfSignal['9'].find(element => element === (firstSignalIndex + 8)) &&
            indexesOfSignal['10'].find(element => element === (firstSignalIndex + 9)) &&
            indexesOfSignal['11'].find(element => element === (firstSignalIndex + 10)) &&
            indexesOfSignal['12'].find(element => element === (firstSignalIndex + 11)) &&
            indexesOfSignal['13'].find(element => element === (firstSignalIndex + 12)) &&
            indexesOfSignal['14'].find(element => element === (firstSignalIndex + 13))
        ) {
            signalLocation = firstSignalIndex + 14;
        }
    
    };

    return signalLocation;
}



// test 
const testData = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
console.log(signalLocation(text[0]))