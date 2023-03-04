// // let arr = [1,2,3,4,5]

// // const data = arr.reduce((previousvalue,currentvalue)=>{

// //     const data = previousvalue + currentvalue ; 

// //     return data;
// // },0)

// // console.log(data)
// let val=2
// // const promise = new Promise((resolve,reject)=>{
// //     setTimeout( ()=>{
// //         resolve('promise resolve')

// //         console.log('promise reesolveed')
// //     },6000)
    
// // })

// // const promise2 = new Promise((resolve, reject) => {
// //     // a promise that will resolve after
// //     // 5 second
// //     setTimeout(() => {
// //     resolve("Hello World!");
// //     }, 5000);
// //     })

//     // console.log(promise,'promise')
//     // setTimeout(() => {
//     //     console.log(promise);
//     //     }, 6000);
        
//     //     promise
//     //     .then((val) => { return "ABC "+ val; })
//     //     .then((val) => { console.log(val); })
//     //     .finally(() => { console.log("task done"); });
//     // console.log(promise2,'promise')


//     // const promise = new Promise((resolve, reject) => {
//     //     // a promise that will reject after
//     //     // 5 second
//     //     setTimeout(() => {
//     //     reject("Error 404");
//     //     }, 5000);
//     //     });
//     //     promise.then(null, (error) => {
//     //     console.error("Called from then method", error);
//     //     });
//     //     // "Called from then method" "Error 404"
//     //     promise.catch((error) => {
//     //     console.error("Called from catch method", error);
//     //     });
//     //     promise.finally(() => {
//     //         console.log(" Then block finally done");
//     //         });
            
        

//     //     console.log(promise)

//     // const obj ={
//     //     id:'111',
//     //     data:"Devendra",
//     //     invoke:function(){
//     //         console.log(this.id)
//     //     }
//     // }
//     // console.log(obj.invoke())



//     function example(){
//         // in strict mode this refers to undefined
//         this.blog = "learnersbucket";
//         this.displayBlog = function(){
//         console.log(`Awesome ${this.blog}`)
//         }
//         }
//         // example();s
//         // console.log(this.blog);
//         // "learnersbucket"
//         this.displayBlog();










// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// let all =  Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// console.log(all)


// const id = setTimeout((()=>{
//     console.log("Hello World")
// }),1000)

// console.log(id)

const key = 'shortName';

const language ={
    name:'JavaScript',
    [key]:'js',
};
console.log(language.shortName)