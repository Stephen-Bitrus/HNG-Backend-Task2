function addition(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

function multiply(x, y) {
    return (x * y);
}

const numpy = {
    addition,
    subtract,
    multiply
};

let x = 3;
let y = 8;
let ans;

const words = 'please multiply 5 and 6';
const lent = words.split(' ');
const cent = words.split(' ');
const wordNum = [];
console.log(lent);
lent.forEach((word) => {
    numWord(word);
});
cent.forEach((word) => {
    compose(word);
});

function numWord(word) {
    let numed = Number(word)
    if((!isNaN(numed))){
        wordNum.push(numed);
    }
}

function compose(word) {
    switch (word) {
        case 'addition': {
            ans = numpy.addition(x, y);
        }
            break;
        case 'multiply': {
            ans = numpy.multiply(wordNum[0], wordNum[1]);
        }
            break;
        case 'subtract': {
            ans = numpy.subtract(x, y);
        }
    }
}

function postWorker(req) {
    // const { words, x, y } = req.body;
    const lent = words.split(' ');
    if(lent.length > 1) {
        console.log(lent);
    }
}

postWorker('word');