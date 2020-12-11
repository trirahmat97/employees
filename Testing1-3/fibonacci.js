const fibonacci = (n) => {
    try {
        let fibonacci = [];
        if (n < 0) {
            return fibonacci;
        }
        for (var i = 0; i < n; i++) {
            let bil = null;
            if (i < 2) {
                bil = i;
            } else {
                bil = fibonacci[i - 1] + fibonacci[i - 2]
            }
            fibonacci.push(bil);
        }
        return fibonacci.join(" ");
    } catch (err) {
        return err.message;
    }
}

// console.log(fibonacci(10));
module.exports = fibonacci;