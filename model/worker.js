function addition(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

function multiply(x, y) {
    return (x * y);
}

const numpy = Object.freeze({
    'addition': addition,
    'subtraction': subtract,
    'multiplication': multiply,
});

// let ans;
// let x;
// let y;
// const wordNum = [];

// function numWord(word) {
//     let numed = Number(word)
//     if ((!isNaN(numed))) {
//         wordNum.push(numed);
//     }
// }

// function compose(word, x, y) {
//     switch (word) {
//         case 'addition': {
//             ans = numpy.addition(x, y);
//         }
//             break;
//         case 'multiply': {
//             ans = numpy.multiply(x, y);
//         }
//             break;
//         case 'subtract': {
//             ans = numpy.subtract(x, y);
//         }
//     }
// }

function postWorker(req) {
    const words = req.body.operation_type;
    const lent = words.split(' ');
    const lentO = lent.length;
    const cent = words.split(' ');
    const x = Number(req.body.x);
    const y = Number(req.body.y);
    const wordNum = [];
    let ans;
    if ((lentO > 1) && (!x || !y)) {
        lent.forEach((word) => {
            let numed = Number(word)
            if ((!isNaN(numed))) {
                wordNum.push(numed);
            }
        });
        cent.forEach((word) => {
            switch (word) {
                case 'addition': {
                    ans = numpy.addition(wordNum[0], wordNum[1]);
                }
                    break;
                case 'plus': {
                    ans = numpy.addition(wordNum[0], wordNum[1]);
                }
                    break;
                case 'sum': {
                    ans = numpy.addition(wordNum[0], wordNum[1]);
                }
                    break;
                case 'add': {
                    ans = numpy.addition(wordNum[0], wordNum[1]);
                }
                    break;
                case 'summation': {
                    ans = numpy.addition(wordNum[0], wordNum[1]);
                }
                    break;
                case 'subtraction': {
                    ans = numpy.subtraction(wordNum[0], wordNum[1]);
                }
                    break;
                case 'subtract': {
                    ans = numpy.subtraction(wordNum[0], wordNum[1]);
                }
                    break;
                case 'difference': {
                    ans = numpy.subtraction(wordNum[0], wordNum[1]);
                }
                    break;
                case 'minus': {
                    ans = numpy.subtraction(wordNum[0], wordNum[1]);
                }
                    break;
                case 'multiplication': {
                    ans = numpy.multiplication(wordNum[0], wordNum[1]);
                }
                    break;
                case 'multiply': {
                    ans = numpy.multiplication(wordNum[0], wordNum[1]);
                }
                    break;
                case 'product': {
                    ans = numpy.multiplication(wordNum[0], wordNum[1]);
                }
                    break;
                case 'times': {
                    numpy.multiplication(wordNum[0], wordNum[1]);
                }
                    break;
            }
        });
        console.log(wordNum);
    } else if ((lentO > 1)) {
        lent.forEach((word) => {
            let numed = Number(word)
            if ((!isNaN(numed))) {
                wordNum.push(numed);
            }
        });
        cent.forEach((word) => {
            switch (word) {
                case 'addition': {
                    ans = numpy.addition(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'plus': {
                    ans = numpy.addition(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'sum': {
                    ans = numpy.addition(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'add': {
                    ans = numpy.addition(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'summation': {
                    ans = numpy.addition(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'subtraction': {
                    ans = numpy.subtraction(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'subtract': {
                    ans = numpy.subtraction(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'difference': {
                    ans = numpy.subtraction(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'minus': {
                    ans = numpy.subtraction(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'multiplication': {
                    ans = numpy.multiplication(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'multiply': {
                    ans = numpy.multiplication(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'product': {
                    ans = numpy.multiplication(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
                case 'times': {
                    numpy.multiplication(wordNum[0] || x, wordNum[1] || y);
                }
                    break;
            }
        });
        console.log(wordNum);
    }
    else {
        cent.forEach((word) => {
            switch (word) {
                case 'addition': {
                    ans = numpy.addition(x, y);
                }
                    break;
                case 'plus': {
                    ans = numpy.addition(x, y);
                }
                    break;
                case 'sum': {
                    ans = numpy.addition(x, y);
                }
                    break;
                case 'add': {
                    ans = numpy.addition(x, y);
                }
                    break;
                case 'summation': {
                    ans = numpy.addition(x, y);
                }
                    break;
                case 'subtraction': {
                    ans = numpy.subtraction(x, y);
                }
                    break;
                case 'subtract': {
                    ans = numpy.subtraction(x, y);
                }
                    break;
                case 'difference': {
                    ans = numpy.subtraction(x, y);
                }
                    break;
                case 'minus': {
                    ans = numpy.subtraction(x, y);
                }
                    break;
                case 'multiplication': {
                    ans = numpy.multiplication(x, y);
                }
                    break;
                case 'multiply': {
                    ans = numpy.multiplication(x, y);
                }
                    break;
                case 'product': {
                    ans = numpy.multiplication(x, y);
                }
                    break;
                case 'times': {
                    ans = numpy.multiplication(x, y);
                }
                    break;
            }
        });
    }
    return (ans);
}

module.exports = {
    numpy,
    postWorker,
};