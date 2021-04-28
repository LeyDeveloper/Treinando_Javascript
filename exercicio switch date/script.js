const titulo = document.querySelector('.titulo')

const data = new Date()
const diaDaSemana = data.getDay()
const diaSemana = pegarOdiaDaSemana(diaDaSemana)
const dia = data.getDate()
const mês = data.getMonth()
const nomeMês = PegarOMes(mês)
const ano = data.getFullYear()
const hora = zeroAEsquerda(data.getHours())
const minutos = zeroAEsquerda(data.getMinutes())


titulo.innerHTML = `${diaSemana}, ${dia} de ${nomeMês} de ${ano} ${hora}:${minutos}`


function PegarOMes(mês) {
    let nomeMês

    switch (mês) {
        case 0: nomeMês = 'Janeiro'
            break

        case 1: nomeMês = 'Fevereiro'
            break

        case 2: nomeMês = 'Março'
            break

        case 3: nomeMês = 'Abril'
            break

        case 4: nomeMês = 'Maio'
            break

        case 5: nomeMês = 'Junho'
            break

        case 6: nomeMês = 'Julho'
            break

        case 7: nomeMês = 'Agosto'
            break

        case 8: nomeMês = 'Setembro'
            break

        case 9: nomeMês = 'Outubro'
            break

        case 10: nomeMês = 'Novembro'
            break

        case 11: nomeMês = 'Dezembro'
            break
    }

    return nomeMês
}


function pegarOdiaDaSemana(diaDaSemana) {
    let diaSem
    switch (diaDaSemana) {
        case 0: diaSem = 'Domingo'
            break

        case 1: diaSem = 'Segunda-feira'
            break

        case 2: diaSem = 'Terça-feira'
            break

        case 3: diaSem = 'Quarta-feira'
            break

        case 4: diaSem = 'Quinta-feira'
            break

        case 5: diaSem = 'Sexta-feira'
            break

        case 6: diaSem = 'Sábado'
            break

    }

    return diaSem
}


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}





