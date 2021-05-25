//IIFE -> immediately invoked function expression

(function (idade, peso, altura ) {

    const sobrenome = 'Rafael'
    function criaNome(nome){
        return nome + ' ' + sobrenome 
    }
    
    function falaNome(){
        console.log(criaNome('Wesley'))
    }

    falaNome()
    console.log(idade, peso, altura)


})(30,80, 1.80)

//estrutura 

/*

(function() {

})() //chamei a função fora

*/

const func = () => {
    return console.log('oi')
}

console.log()