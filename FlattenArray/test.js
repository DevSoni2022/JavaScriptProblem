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

  console.log(  flatten([1, [2, [3, [4, [5]]]]]))