let arr = ['a', 'b', ['c', 'd', ['e', 'f'], 'g'], 'h'];


const flattenArray=(arr,depth=null)=>{
let newObj = {}
    arr.forEach((ele,index)=>{
let newDepth = depth ? `${depth}.${index}` : `${index + 1}`
        if(Array && Array.isArray(ele)){
            newObj ={...newObj,...flattenArray(ele,newDepth)}
        }else{
            newObj[ele] = newDepth
        }
    })
    return newObj;
}

console.log(flattenArray(arr,''))