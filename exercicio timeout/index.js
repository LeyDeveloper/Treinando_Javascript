function relogio(){
    function getTimeFromSeconds(segundos){
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-Br', {
            hour12 : false,
            timeZone: 'GMT'
        })
    }
    
    const relógio = document.querySelector('.relogio')
    let segundos = 0
    let timer

    function iniciaRelogio(){
        
        timer = setInterval(function() {
            segundos++
            relógio.innerHTML = getTimeFromSeconds(segundos)
        }, 1000)
    }
    
    document.addEventListener('click', function(ev) {
        const el = ev.target
        
        if (el.classList.contains('contar')){
            relógio.classList.remove('relogio-red')
            iniciaRelogio()
        }
    
        if(el.classList.contains('parar')){
            relógio.classList.add('relogio-red')
            clearInterval(timer)
        }
    
        if(el.classList.contains('zerar')){
            clearInterval(timer)
            relógio.innerHTML = `00:00:00`
            segundos = 0
            relógio.classList.remove('relogio-red')
        }
    })
}

relogio()



/*
const botões = document.querySelector('.buttons')
const contar = botões.querySelectorAll('.contar')
const parar = botões.querySelectorAll('.parar')
const zerar = botões.querySelectorAll('.zerar')
const relógio = document.querySelector('.relogio')
let segundos = 0
let timer

contar.addEventListener('click', function(event) {
    relógio.classList.remove('relogio-red')
    iniciaRelogio()
})

parar.addEventListener('click', function(event) {
    relógio.classList.add('relogio-red')
    clearInterval(timer)
})

zerar.addEventListener('click', function(event) {
    clearInterval(timer)
    relógio.innerHTML = `00:00:00`
    segundos = 0
    relógio.classList.remove('relogio-red')
})
*/