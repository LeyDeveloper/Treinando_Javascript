// FILTER -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.


// retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// modelo filter


/*
const numerosFiltrados = numeros.filter(valor =>  valor > 10)
console.log(numerosFiltrados)



// Maneira de mostrar os números maiores que 10


for(let numero of numeros){
    if(numero > 10){
        console.log(numero)
    }
}





// Retornar pessoas com nome maior que 7 letras
// Retornar pessoas com idade maior que 22 anos
// Retornar pessoas cujo nome termina com a 
const pessoas  = [
    { Nome: 'Wesley', idade: 26 },
    { Nome: 'Rejane', idade: 42 },
    { Nome: 'Nathania', idade: 28 },
    { Nome: 'Patrick', idade: 21 },
    { Nome: 'Juliana', idade: 24 },
    { Nome: 'Alice', idade: 02 }
]

const pessoasComNomeGrande = pessoas.filter(valor => valor.Nome.length >= 7)
const pessoasComMaisDeVinteEDois = pessoas.filter(valor => valor.idade > 22)
const pessoasCujoNomeTerminaComA = pessoas.filter(valor => valor.Nome.slice(-1) == 'a')

console.log(pessoasComNomeGrande)
console.log(pessoasComMaisDeVinteEDois)
console.log(pessoasCujoNomeTerminaComA)
*/





// ------------------------------------//------------------------------------







/*
// MAP -> Altera os valores do meu array
//dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map(valor => valor * 2)
console.log(numerosEmDobro)

//para cada elemento: 
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome" do objeto
//adicione uma chave id para cada objeto
const pessoas  = [
    { Nome: 'Wesley', idade: 26 },
    { Nome: 'Rejane', idade: 42 },
    { Nome: 'Nathania', idade: 28 },
    { Nome: 'Patrick', idade: 21 },
    { Nome: 'Juliana', idade: 24 },
    { Nome: 'Alice', idade: 02 }
]

const nomes = pessoas.map(valor => valor.Nome)


const idades = pessoas.map(valor => {
    delete valor.Nome
    return valor
})


//OU

const idades = pessoas.map(valor => ({idade: valor.idade}))
const comIDS = pessoas.map((valor, indice) => {
    valor.id = indice + 1
    return valor
})


console.log(nomes)
console.log(idades)
console.log(comIDS)
*/





/*
//Reduce -> Reduzir um array em um elemento

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, índice, array) {
    acumulador += valor
    console.log(acumulador)
    return acumulador
}, 0)

console.log(total)
*/




/*
//Filter + Map + Reduce
//retorne  a soma do dobro de todos os pares
//filtrar pares
//dobrar os valores
//reduzir ( somar tudo )
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const dobro = numeros.map(valor => valor * 2)

const somaDobro = dobro.reduce(function(acum, val) {
    acum += val
    return acum
}, 0)

const numerosPares = numeros.filter(valor => valor % 2 === 0)
const dobroDosPares = numerosPares.map(valor => valor * 2)
const somaDoDobroDosPares = dobroDosPares.reduce(function(acum, valor) {
    acum += valor
    return acum
},0)

console.log(dobro)
console.log(somaDobro)
console.log(numerosPares)
console.log(dobroDosPares)
console.log(somaDoDobroDosPares)
*/
