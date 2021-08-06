module.exports = function toReadable(number) {
    if (number < 10) {
        return sayNumber(number);
    }

    if (number < 20) {
        return sayTeen(number);
    }

    let resultP3 = "", resultP2 = "", resultP1 = "";
    num3 = number % 10;
    num2 = Math.floor(number / 10) % 10;
    num1 = Math.floor(number / 100) % 10;
    resultP1 = sayNumber(num1) + ' hundred';

    if (num2 == 0 && num3 == 0) {
        return resultP1;
    }
    if (number % 100 >= 10 && number % 100 <= 19) {
        resultP2 = sayTeen(number % 100);
        return resultP1 + ' ' + resultP2;
    }

    if (num3 !== 0) {
        resultP3 = ' ' + sayNumber(num3);
    }

    if (num2 !== 0) {
        resultP2 = sayTy(num2);
    }
    else {
        return resultP1 + resultP3;
    }


    if (number < 100) {
        return resultP2 + resultP3;
    }

    return resultP1 + ' ' + resultP2 + resultP3;
}

function sayNumber(n) {
    switch (n) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 0:
            return 'zero';
    }
}

function sayTeen(n) {
    switch (n) {
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}

function sayTy(n) {
    switch (n) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
}
