// p(n,r) = n!/r!(4-2)!=hasil

const combination = (n, r) => {
    try {
        const rN = resultN(n);
        const rR = resultR(r);
        const rNR = subtraction(n, r);
        const result = rR * rNR;
        return rN / result;
    } catch (err) {
        return err.message;
    }
}

function resultN(n) {
    var result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}

function resultR(r) {
    var result = 1;
    for (let i = r; i > 0; i--) {
        result *= i;
    }
    return result;
}

function subtraction(n, r) {
    var result = 1;
    var data = n - r;
    for (let i = data; i > 0; i--) {
        result *= i;
    }
    return result;
}

// console.log(combination(4, 2));
module.exports = combination;