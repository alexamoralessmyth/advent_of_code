var fs = require("fs");
var text = fs.readFileSync("./input_data.txt").toString('utf-8').split("\n");

function findEmptyIndex(data) {
    let lineBreaks = []
    for (let i=0; i < text.length; i++) {
        if (data[i] === "") {
            lineBreaks.push(i);
        }
    }
    return lineBreaks;
}

function sumOf(numbers) {
    let totalValue = 0;
    
    for (let i=0; i < numbers.length; i++) {
        totalValue = (Number(numbers[i]) + totalValue)
    }
    return totalValue;
}

function caloriesByElf(data) {
    let caloriesByElf = [];
    const blankLines = findEmptyIndex(data);

    for (let i=0; i < blankLines.length; i++) {
        if ( i === 0 ) {
            const elfItemizedCalories = data.slice(0, blankLines[i]);
            caloriesByElf.push(sumOf(elfItemizedCalories));

        } else if (i === (blankLines.length - 1)) {
            const elfItemizedCalories = data.slice(blankLines[i]);
            caloriesByElf.push(sumOf(elfItemizedCalories));
        } else {
            const elfItemizedCalories = data.slice(blankLines[i-1], blankLines[i]);
            caloriesByElf.push(sumOf(elfItemizedCalories));
        }
    }

    return caloriesByElf;
}

function compareNumbers(a, b) {
    return a - b; 
}

function orderedCalories(data) {
    const calsByElf = caloriesByElf(data);

    return calsByElf.sort(compareNumbers);
    return orderedCalsByElf[(orderedCalsByElf.length - 1)];
}

function mostCalories(data) {
    const orderCalsByElf = orderedCalories(data);
    return orderCalsByElf[(orderCalsByElf.length - 1)];
}

function topThreeCalories(data) {
    const topThree = orderedCalories(data).slice[(orderCalsByElf.length - 1)]
}

// TEST FIRST 5 GROUPS
console.log(`Elf_1 = ${caloriesByElf(text)[0] === 49461}`)
console.log(`Elf_2 = ${caloriesByElf(text)[1] === 41296}`)
console.log(`Elf_3 = ${caloriesByElf(text)[2] === 53895}`)
console.log(`Elf_last = ${caloriesByElf(text)[247] === 58989}`)

console.log(`most calories = ${orderedCalories(text)}`)