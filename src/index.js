module.exports = function toReadable(number) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', '', 'fourteen'
    ]
    let changeNumbers = ['', '', 'twen', 'thir', 'for', 'fif', 'six',
        'seven', 'eigh', 'nine'
    ]
    let numToString = number.toString()
    let lengthNum = numToString.length
    let finalStr = ''

    function twoNumbers(num1, num2) {
        if (num1 === '1') {
            if (num2 === '0' || num2 === '1' || num2 === '2' || num2 === '4') {
                finalStr += numbers[`${num1}${num2}`]
            } else {
                let teens = changeNumbers[num2] + 'teen'
                finalStr += teens
            }
        } else if (num1 !== '0') {
            let tens = changeNumbers[num1] + 'ty'
            finalStr += tens
            let units = numbers[num2]
            if (units !== 'zero') {
                finalStr += ' ' + units
            }
        } else {
            let units = numbers[num2]
            if (units !== 'zero') {
                finalStr += units
            }
        }
        return finalStr
    }
    if (lengthNum === 1) {
        finalStr = numbers[number]
    }
    if (lengthNum === 2) {
        finalStr += twoNumbers(numToString[0], numToString[1])
    }
    if (lengthNum === 3) {
        let hundred = numbers[numToString[0]] + ' hundred'
        if (numToString[1] === '0' && numToString[2] === '0') {
            finalStr += hundred
        } else {
            finalStr += hundred + ' ' + twoNumbers(numToString[1], numToString[2])
        }
    }
    return finalStr
}