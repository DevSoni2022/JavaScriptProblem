// Implement a function that takes two parameters: an Object and a Path.
// It returns the value of the object following path
// Please Implement in JavaScript

// get({ developer: "Software Engineer" }, "developer"); // => 'Software Engineer'
// get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName"); //=>'Cruz
// get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"); //=>0
// get([{ developer: "Tom" }, [0, null]], "[1][1]"); //=>null

function get(obj, str) {
    str = str.replaceAll("[", ".");
    str = str.replaceAll("]", "");
    let current = obj;
  
    let path = str.split(".").filter(Boolean);
    console.log(path)
    for (let i = 0; i < path.length; i++) {
      current = current[path[i]];
      if (current === undefined) return undefined;
    }
  
    return current;
  }
console.log(get({ developer: "Software Engineer" }, "developer"))
console.log(get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName"))
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"))
console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]"))

// get({ developer: "Software Engineer" }, "developer"); // => 'Software Engineer'
// get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName"); //=>'Cruz
// get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"); //=>0
// get([{ developer: "Tom" }, [0, null]], "[1][1]"); //=>null