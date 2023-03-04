 function flatten(arg) {
    let arr= [];
    
    let flattenArr= (arg)=>{
      arg.forEach(dt=>{
        if(Array && Array.isArray(dt))
        {
          flattenArr(dt)
        }
        else{
          arr.push(dt)
        }
      })
    }
    flattenArr(arg);
    
    return arr;
    }
let test = [
  1, 2, 3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11, 12, 13,
  [14, [[[[[15, [16]]]]]]],
  17, 18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
];

console.log(test.toString().split(',').map((ele)=>Number(ele)))
//   console.log(  flatten([
//     1, 2, 3,
//     [4],
//     [5, 6, [7], [8, [9, [10]]]],
//     11, 12, 13,
//     [14, [[[[[15, [16]]]]]]],
//     17, 18,
//     [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
// ]))