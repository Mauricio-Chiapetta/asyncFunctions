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

// function waitfor(seconds) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, seconds * 1000);
//     });
// }

// const numbers = [1, 2, 3, 4, 5];

// // Promise.all((squares)).then((results)=>{
// //     console.log(results)
// // })

// // console.log(squares)

// async function execute() {
//     console.time('tempo')
//     const squares = await Promise.all(
//         numbers.map(async (number) => {
//             await waitfor(2);
//             return number * number;
//         }))
// console.log(squares)
// console.timeEnd('tempo')
// }

// execute()

// EXERCICIO REFATORANDO AS PROMISES (EXERCICIO 24)

// EXERCICIO - treinando o uso de promises
// IMC = peso/(altura x altura)

async function imc(peso, altura) {
    if (isNaN(peso) || isNaN(altura)) {
        return Promise.reject("Os parâmetros não são números!");
    }
    return peso / (altura * altura);

}

async function exibeImc(peso, altura) {
    try {
        console.log(`Calculando o IMC para peso ${peso} e altura ${altura}`);
        const calcResult = await imc(peso, altura)
        console.log(`O resultado do IMC foi de ${calcResult}`)

        if (calcResult < 18.5) {
            console.log("magreza");
        } else if (calcResult < 25) {
            console.log("normal");
        } else if (calcResult < 30) {
            console.log("sobrepeso");
        } else if (calcResult < 40) {
            console.log("obesidade");
        } else {
            console.log("OBESIDADE GRAVE");
        }

    } catch (err) {
        console.log(err)
    }



    // .then((result) => {
    //   console.log(`O resultado do calculo foi: ${result}`);
    //   if (result < 18.5) {
    //     console.log("magreza");
    //   } else if (result < 25) {
    //     console.log("normal");
    //   } else if (result < 30) {
    //     console.log("sobrepeso");
    //   } else if (result < 40) {
    //     console.log("obesidade");
    //   } else {
    //     console.log("OBESIDADE GRAVE");
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

}

exibeImc(71, 1.74);
exibeImc(48, 1.6);
exibeImc(71, "texto");
exibeImc(82, 1.72);
exibeImc(120, 1.8);
