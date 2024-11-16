let arr = ['a', 'b', ['c', 'd', ['e', 'f'], 'g'], 'h'];

function generateNumbering(arr, prefix = '', result = {}) {
    arr.forEach((item, index) => {
        const numbering = prefix ? `${prefix}.${index + 1}` : `${index + 1}`;
        if (Array.isArray(item)) {
            generateNumbering(item, numbering, result);
        } else {
            result[item] = numbering;
        }
    });
    return result;
}

const output = generateNumbering(arr);
console.log(output);
