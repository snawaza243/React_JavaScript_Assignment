const Calculate = {
    add: (a, b) => {
        return a + b;
    },
    subs: (a, b) => {
        return a - b;
    },
    product: (a, b) => {
        return a * b;
    },
    divide: (a, b) => {
        if (b != 0) {
            return a / b;
        }
        return 'not valid';
    }
}