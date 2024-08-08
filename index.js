// async function asyncSum(a, b) {
//     return a + b
// }

// asyncSum(1, 1).then(result => console.log(`1 + 1 é igual a ${result}`))

// async function asyncSubtract(a, b) {
//     return a - b
// }

// const sumResult = asyncSum(50, 33)
// const subtractResult = asyncSubtract(50, 33)

// Promise.all([sumResult, subtractResult]).then(results => {
//     console.log(results)
// })

// const numbers = [4, 9, 5, 13, 77]

// async function asyncSquare(x) {
//     return x * x
// }

// Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
//     console.log(squares)
// })

// async function soma(a,b) {
//     if(isNaN(a)||isNaN(b)){
//         return Promise.reject('params must be a number!')
//     }
//     return a + b
// }

// async function subtracao(a,b){
//     if(isNaN(a)||isNaN(b)){
//         return Promise.reject('params must be a number !')
//     }

//     return a - b
// }

// soma(1,null).then((result)=>{
//     console.log(`resultado : ${result}`)
// }).catch((err)=>{
//     console.log(err)
// })

// subtracao("rola",1).then((result)=>{
//     console.log(`resultado: ${result}`)
// }).catch((err)=>{
//     console.log(err)
// })

// UTILIZANDO AWAIT

// async function soma(a,b) {
//     if(isNaN(a)||isNaN(b)){
//         return Promise.reject('os parametros devem ser numeros!')
//     }
//     return a + b
// }

// async function execute(){
//     const somaResult = await soma(1,2)
//     console.log(somaResult)
// }

// utilizando try catch e await

// async function execute(){
//     try{
//         const somaResult = await soma(2,"ola")
//         console.log(somaResult)
//     }catch(err){
//         console.log(err)
//     }
// }

// execute()

// PROMISE ALL COM ASYNC E AWAIT

function waitfor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

const numbers = [1, 2, 3, 4, 5];

// Promise.all((squares)).then((results)=>{
//     console.log(results)
// })

// console.log(squares)

async function execute() {
    console.time('tempo')
    const squares = await Promise.all(
        numbers.map(async (number) => {
            await waitfor(2);
            return number * number;
        }))
console.log(squares)
console.timeEnd('tempo')    
}

execute()