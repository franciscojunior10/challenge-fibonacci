'use strict'

const fibonacci = () => {
    const array = [0, 1];
    while(array[array.length-1] <= 350) {
        const num = array[array.length-1] + array[array.length-2]
        array.push(num);
    }
    return array;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}