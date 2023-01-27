const clearTimeOutId = []
let count =0;
const originalFunction = window.setTimeout;

window.setTimeout = function setTimeout(fn,delay){
const id =originalFunction(fn,delay)
clearTimeOutId.push(id);
return id
}
function clearAllTimeOut(){
while(clearTimeOutId.length)
{
   clearTimeout( clearTimeOutId.pop())
    console.log(`TimeOut Id:${++count} Cleared`)
}
    
}

setTimeout((()=>{console.log("one")}),1000)
setTimeout((()=>{console.log("two")}),1000)
setTimeout((()=>{console.log("three")}),1000)
setTimeout((()=>{console.log("four")}),1000)
clearAllTimeOut()