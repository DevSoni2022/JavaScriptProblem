const Calculator ={
    total :0,

    add : function(val){
        this.total+=val;
        return this
    },
    sub : function(val){
        this.total-=val;
        return this
    },
    mul : function(val){
        this.total*=val;
        return this
    },
    div : function(val){
        this.total/=val;
        return this
    }
}


console.log(">>>>")