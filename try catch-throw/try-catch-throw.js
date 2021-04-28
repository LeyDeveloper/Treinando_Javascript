/*
try{
    console.log(nãoExisto)
} catch(err) {
    console.log('nãoExisto não existe')
}
*/

/*
function soma(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números.')
    }

    return x + y
}

try{
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch(error){
    console.log(error)
}
*/




/*
try{
    //Executado quando não há erros
    console.log(a) // simulando um erro
    console.log('abri um arquivo')
    console.log('Manipulei um arquivo e gerou erro')
    console.log('Fechei o arquivo')
} catch (e){
    //Executado quando há erros
    console.log('Tratando o erro')
} finally {
    console.log('FINALLY: Eu sempre sou executado')
}
*/

function retornaHora(data){
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if(!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
    const data = new Date('01,01,1970 12:58:12')
    const hora = retornaHora(hora)
    console.log(hora)
} catch (e) {
    // tratar erro
    console.log(e)
} finally {
    console.log('Tenha um bom dia.')
}
