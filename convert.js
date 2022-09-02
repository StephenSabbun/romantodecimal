function converter(rNumeral) {
    const romanNumerals = {
        'I': 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    decimalResult = 0;
    for (let index = 0; index < rNumeral.length; index++) {
        let decimalValue = romanNumerals[rNumeral[index]]
        if (index < rNumeral.length - 1 && decimalValue < romanNumerals[rNumeral[index + 1]]) {
            decimalResult -= decimalValue
        }
        else {
            decimalResult += decimalValue
        }
    }
    console.log(rNumeral + ' = ' + decimalResult)
}

const prompt = require("prompt-sync")({ sigint: true })
let romanNumeral = prompt("Roman Numeral: ")
converter(`${romanNumeral}`)