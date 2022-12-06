const { sign } = require("crypto");
var fs = require("fs");
var text = fs.readFileSync("./input_data.txt").toString('utf-8').split("\n");

function startOfPacket(data) {

    let signal = [];

    for (let i=0; i < (data.length-3); i++) {
        const letter = data[i];
        signal.push(letter)
        
        const letter2 = data[i+1];
        const letter3 = data[i+2];
        const letter4 = data[i+3];
        
        const signalGroup = [letter, letter2, letter3, letter4]

        for (let i=0; i < signalGroup.length; i++) {
            const checkLetter = signalGroup[i];

            if (signal.find(element => element === checkLetter) === undefined) {
                signal.push(checkLetter);
            }
        };

        if (signal.length === 4) {
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
        }
    };
    return {
        1: firstSignalIndexes,
        2: secondSignalIndexes,
        3: thirdSignalIndexes,
        4: fourthSignalIndexes
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
            indexesOfSignal['4'].find(element => element === (firstSignalIndex + 3))
        ) {
            signalLocation = firstSignalIndex + 4;
        }
    
    };

    return signalLocation;
}



// test 
const testData = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
console.log(signalLocation(testData))