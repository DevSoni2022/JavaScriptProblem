//{(({}))}

const isValid = (str)=>{

    const map={
        '}' : '{',
        ')' : '(',
        ']' : '['
    }
    const arr=[]
    for(const char of str){
        console.log(char,map[char])
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
