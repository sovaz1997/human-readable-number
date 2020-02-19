module.exports = function toReadable (number) {
    const UNITS = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }

    const DOZENS = {
        0: '',
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'fourthy',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }



    const units = number % 10;
    const dozens = Math.floor(number / 10) % 10;
    const hundreds = Math.floor(number / 100)  % 10;

    let res = '';

    if(hundreds) {
        res += UNITS[hundreds] + ' hundred';
    }

    res += (' ' + DOZENS[dozens]);

    if(units) {
        res += (' ' + UNITS[units]);
    }

    return res;
}
