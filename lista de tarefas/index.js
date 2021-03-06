const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')


// criando um elemento da lista
function criaLi(){
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13){
        if(!inputTarefa.value){
            return
        }
        
        criaTarefa(inputTarefa.value)
        
    }
})

function criarBotãoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}

function limpaImput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
    limpaImput()
    criarBotãoApagar(li)
    salvarTarefas()
    
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value){
        return
    }
    
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(ev) {
    const el = ev.target
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
    
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
  
    for(let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
    }
}
  adicionaTarefasSalvas();