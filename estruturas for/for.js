const nome = ['Wesley', 'Rafael']


//For clássico - Geralmente com iteráveis ( arrays e strings )
for (let i = 0 ; i < nome.length ; i++){
    console.log(nome[i])
}

console.log('\n####\n')

//for in - retorna o índice ou chave ( strings, arrays, objetos )
for (let i in nome){
    console.log(nome[i])
}

console.log('\n####\n')

// for of - retorna o valor em si ( iteráveis, arrays, strings )
for (let valor of nome){
    console.log(valor)
}

console.log('\n####\n')


nome.forEach(function (el) {
    console.log(el)
})