const data = new Date('1994-09-09')
const diaSemana = data.getDay()
const diaSem = getSemanaTexto(diaSemana)

function getSemanaTexto(diaSemana){
    let diaSemTexto

    switch(diaSemana){

        case 0: diaSemTexto = 'Domingo'
            break
    
        case 1: diaSemTexto = 'Segunda-Feira'
            break
    
        case 2: diaSemTexto = 'Terça-feira'
            break
    
        case 3: diaSemTexto = 'Quarta-feira'
            break
    
        case 4: diaSemTexto = 'Quinta-feira'
            break
    
        case 5: diaSemTexto = 'Sexta-feira'
            break
    
        case 6: diaSemTexto = 'Sábado'
            break
    
        default: 'Opção inválida'
    }

    return diaSemTexto
    
}
console.log(diaSem)