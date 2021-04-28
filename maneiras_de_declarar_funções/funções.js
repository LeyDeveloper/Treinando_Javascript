/*

// Declaração de função (Function Hoisting)
falaOi()
function falaOi(){
    console.log('oie')
}

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function () {
    console.log('sou um dado')
}



function executaFuncao(funcao){
    console.log('vou executar sua função abaixo')
    funcao()
}

executaFuncao(souUmDado)

// Arrow function
const arrow = () => {
    console.log('sou uma arrow funtion')
}
arrow()

// dentro do objeto
const obj = {
    falar(){
        console.log('estou falando...')
    }
    
}


*/


// parâmetros
//quando defino uma função com a palavra function
//ou quando jogamos ela em uma variável, o parâmetro dela
//se chama arguments
function funcao(){
    console.log(arguments)
}
funcao('valor', 0,1,2,3,4,5,6,7,8,9)

//exemplo:

function funcao2(a, b, c, d, e, f){
    let total = 0
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total, a, b, c, d, e, f)
}

funcao2(1,2,3)