function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32)
const pessoa3 = criaPessoa('João', 'Moreira', 55)
const pessoa4 = criaPessoa('Júnior', 'Lara', 44)
const pessoa5 = criaPessoa('Jean', 'Otávio', 69)






const pessoa6 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    incrementaIdade() {
        this.idade++
        console.log(this.idade)
    }
};


pessoa6.fala()
pessoa6.incrementaIdade()