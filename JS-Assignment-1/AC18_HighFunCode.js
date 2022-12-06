const Arithmetics = {
    add: (a, b) => {
        return `${a} + ${b} = ${a + b}`;
    },
    subtract: (a, b) => {
        return `${a} - ${b} = ${a - b}`
    },
    multiply: (a, b) => {
        return `${a} * ${b} = ${a * b}`
    },
    division: (a, b) => {
        if (b != 0) return `${a} / ${b} = ${a / b}`;
        return `Cannot Divide by Zero!!!`;
    }
}
console.log(Arithmetics.add(10,11))
console.log(Arithmetics.subtract(10,11))
console.log(Arithmetics.multiply(10,11))
console.log(Arithmetics.division(10,11))