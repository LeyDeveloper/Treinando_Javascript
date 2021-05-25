//funções de criação
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        altura: altura,
        peso: peso,

        //GETTER
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //SETTER
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala (assunto) {
            return `${this.nome} está falando sobre ${assunto}.`  
        },
        
        // ao utilizar somentr o imc() ele é dito como método(função)
        get imc(){  //ao utilizar o GETTER (get), o imc vira atributo 
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Wesley', 'Rafael', 1.9, 120)
const p2 = criaPessoa('Patrick', 'Rafael', 1.9, 96)
const p3 = criaPessoa('Juliana', 'Alves', 1.7, 90)

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)