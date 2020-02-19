module.exports = function toReadable (number) {
    if(number === 0) {
        return 'zero';
    }

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
        10: 'ten',
    }

    const DOZENS = {
        0: '',
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    const MAGICS = {
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    
    if(number <= 10) {
        return UNITS[number];
    }

    const isMagic = (number % 100) > 10 && (number % 100) < 20;

    let magic = '';
    if(isMagic) {
        magic = MAGICS[number % 100];
    }


    const units = number % 10;
    const dozens = Math.floor(number / 10) % 10;
    const hundreds = Math.floor(number / 100)  % 10;

    let res = [];

    if(hundreds) {
        res.push(UNITS[hundreds] + ' hundred');
    }

    if(magic.length) {
        res.push(magic);
        return res.join(' ');
    }

    if(dozens) {
        res.push(DOZENS[dozens]);
    }

    if(units) {
        res.push(UNITS[units]);
    }

    return res.join(' ');
}
