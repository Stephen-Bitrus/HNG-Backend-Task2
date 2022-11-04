const {
    numpy
} = require('./worker');

function getEnumType(words) {
    const lent = words.split(' ');
    let numType = Object.keys(numpy);
    let ans;
    console.log(numType);
    lent.forEach((word) => {
        switch (word) {
            case 'addition': {
                ans = numType[0];
            }
                break;
            case 'plus': {
                ans = numType[0];
            }
                break;
            case 'sum': {
                ans = numType[0];
            }
                break;
            case 'add': {
                ans = numType[0];
            }
                break;
            case 'summation': {
                ans = numType[0];
            }
                break;
            case 'subtraction': {
                ans = numType[1];
            }
                break;
            case 'subtract': {
                ans = numType[1];
            }
                break;
            case 'difference': {
                ans = numType[1];
            }
                break;
            case 'minus': {
                ans = numType[1];
            }
                break;
            case 'multiplication': {
                ans = numType[2];
            }
                break;
            case 'multiply': {
                ans = numType[2];
            }
                break;
            case 'product': {
                ans = numType[2];
            }
                break;
            case 'times': {
                ans = numType[2];
            }
                break;
        }
    });
    return (ans);
}

module.exports = {
    getEnumType,
}