//{(({}))}

const isValid = (str)=>{

    const map={
        '}' : '{',
        ')' : '(',
        ']' : '['
    }
    const arr=[]
let counter =0
    for(const char of str){
        if(!map[char]){
            arr.push(char)
        }
        else if(arr.pop() !==map[char] ){
            return false;
        }
    }
    return arr.length === 0
}
console.log(isValid("(){{}}"))
