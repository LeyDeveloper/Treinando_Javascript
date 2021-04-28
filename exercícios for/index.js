/*
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container')

for(var i = 0 ; i < elementos.length ; i++){
    var {tag, texto} = elementos[i]
    criaElemento(tag, texto)
    
}


function criaElemento(elemento, texto){
    if(elemento == 'footer'){
        var footer = criaFooter(elemento)
        footer.innerHTML = texto
        container.appendChild(footer)
        return footer

    } else if (elemento == 'p'){
        var p = criaP(elemento)
        p.innerHTML = texto
        container.appendChild(p)
        return p

    } else if (elemento == 'div'){
        var div = criaDiv(elemento)
        div.innerHTML = texto
        container.appendChild(div)
        return div

    } else {
        var section = criaSection(elemento)
        section.innerHTML = texto
        container.appendChild(section)
        return section

    }
}

function criaP(elemento){
    const p = document.createElement('p')
    return p
}

function criaDiv(elemento){
    const div = document.createElement('div')
    return div
}

function criaFooter(elemento){
    const footer = document.createElement('footer')
    return footer
}

function criaSection(elemento){
    const section = document.createElement('section')
    return section
} 

*/

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for(let i = 0 ; i < elementos.length ; i++){
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag)
    let textoCriado = document.createTextNode(texto)

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}

container.appendChild(div)