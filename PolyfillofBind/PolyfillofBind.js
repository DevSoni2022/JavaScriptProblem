let name={
    firstName:"Devendra",
    LastName:"Soni"
}

  let printName = function (homeTown,state) {
    console.log(this.firstName + " " + this.LastName+ '   '  + homeTown + '   '  + state)
  }

  let printMyName = printName.bind(name,"Bhilwadiya")
printMyName("MP")


Function.prototype.mybind = function(...args){

    let obj =this,params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args]);
    }
}

let printMyName2 = printName.mybind(name,"Punarkhedi")
printMyName2("MAd")