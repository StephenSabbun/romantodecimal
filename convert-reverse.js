function convertToRoman(integerValue) {
    let romanResult = '';
    const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanValues = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    for (let index = 0; index < decimalValues.length; index++) {
        while (decimalValues[index] <= integerValue) {
            romanResult += romanValues[index];
            integerValue -= decimalValues[index];
        }
    }
    console.log(romanResult);
}
const args = process.argv.slice(2)
convertToRoman(`${args[0]}`)