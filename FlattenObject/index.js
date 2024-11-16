let obj = {
    a: 1,
    b: {
      c: {
        d: 3,
      },
      e: 5,
    },
  }

  function flattenObj(obj, parent = '', res = {}) {
    for (const [key, value] of Object.entries(obj)) {
        const propName = parent ? `${parent}.${key}` : key;
        if (typeof value === 'object' && value !== null) {
            flattenObj(value, propName, res);
        } else {
            res[propName] = value;
        }
    }
    return res;
}

console.log(flattenObj(obj))