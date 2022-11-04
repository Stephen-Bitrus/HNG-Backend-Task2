function addition(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

function multiply(x, y) {
    return (x * y);
}

const Numpy = Object.freeze({
    'addition': addition,
    subtract,
    multiply
});

console.log(Numpy.addition(9, 6));