var fs = require("fs");
const { format } = require("path");
var text = fs.readFileSync("./input_data.txt").toString('utf-8').split("\n");

const startFormation = {
    //TOP ............BOTTOM
    1: ['W', 'R', 'T', 'G'],
    2: ['W', 'V', 'S', 'M', 'P', 'H', 'C', 'G'],
    3: ['M', 'G', 'S', 'T', 'L', 'C'],
    4: ['F', 'R', 'W', 'M', 'D', 'H', 'J'],
    5: ['J', 'F', 'W', 'S', 'H', 'L', 'Q', 'P'],
    6: ['S', 'M', 'F', 'N', 'D', 'J', 'P'],
    7: ['J', 'S', 'C', 'G', 'F', 'D', 'B', 'Z'],
    8: ['B', 'T', 'R'],
    9: ['C', 'L', 'W', 'N', 'H']
}

function cleanData(data) {

    const amountOfBoxesToMove = Number(data.split(" ")[1]);
    const fromColumn = Number(data.split(" ")[3]);
    const toColumn = Number(data.split(" ")[5]);

    // return data.split('from');
    return [amountOfBoxesToMove, fromColumn, toColumn];
}

function moveBoxes(data) {
    let formation = startFormation;

    for (let i=0; i < data.length; i++) {
        const amountOfBoxesToMove = cleanData(data[i])[0];
        const fromColumn = cleanData(data[i])[1];
        const toColumn = cleanData(data[i])[2];
        
        //remove boxes from column
        const newTop =(formation[fromColumn].splice(0, amountOfBoxesToMove)).flat()

        // add new boxes to new column
        formation[toColumn].unshift(newTop);
        const newToColumn = formation[toColumn].flat();
        formation[toColumn] = newToColumn;
    };
    return formation;
}
// testing overlap A WITHIN B (not reverse)
testData = [
    'move 3 from 4 to 3',  'move 3 from 8 to 6',  'move 2 from 3 to 8',
]

    // 1: ['W', 'R', 'T', 'G'],
    // 2: ['W', 'V', 'S', 'M', 'P', 'H', 'C', 'G'],
    // 3: ['W', 'R', 'F', 'M', 'G', 'S', 'T', 'L', 'C'],
    // 4: ['M', 'D', 'H', 'J'],
    // 5: ['J', 'F', 'W', 'S', 'H', 'L', 'Q', 'P'],
    // 6: ['R', 'T', 'B', 'S', 'M', 'F', 'N', 'D', 'J', 'P'],
    // 7: ['J', 'S', 'C', 'G', 'F', 'D', 'B', 'Z'],
    // 8: ['R', 'W'],
    // 9: ['C', 'L', 'W', 'N', 'H']

// test 
console.log(moveBoxes(text))
// console.log(text)