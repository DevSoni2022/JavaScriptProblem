const obj = {
    a:{
        b : (a,b,c)=>a+b+c,
        c:(a,b,c)=>a+b-c
    },
    d: (a,b,c)=>a-b-c
}

function Fn(obj){
return function(...args){
    for(let key in obj){
        const val = obj[key];
        if( typeof val ==="function"){
            debugger
            obj[key]=val(...args)
        }
        else if(val && typeof val === "object" && !Array.isArray(val)){
            Fn(val)(...args)
        }
    }
}
}
Fn(obj)(1,1,1)
console.log(obj)