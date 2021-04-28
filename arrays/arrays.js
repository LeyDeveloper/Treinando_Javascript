const alunos = ['luiz', 'Maria', 'Joao', 1 , true, null]


//inserir no fim
alunos.push(5)
alunos[7] = 1024
alunos[alunos.length] = 'yara'

//fatiando arrays
alunos.slice(0, -2) //eu pedi para que começasse do 0 e diminuisse -2 ao tamanho do array

//inserindo no inicio da array
alunos.unshift('josé')

//removendo da array
alunos.shift('josé')




console.log(alunos)