const sum =(a)=>(b)=>b? sum(a+b) : a;

console.log(sum(2)(3)(4)())

let sum2 = function (a) {
    return function (b) {
      if (b) {
        return sum(a + b)
      }
      return a
    }
  }
  
  console.log(sum2(3)(5)(9)())