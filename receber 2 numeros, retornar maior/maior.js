const a = 5
const b = 3


const arrowFunction = (a,b) => {
    return a > b ? a : b
}

console.log(arrowFunction(a,b))


function maior (primeiro, segundo){
    let maior
    if(primeiro > segundo){
        return primeiro
    } else {
        return segundo
    }
    
}

function maiorTernário(a,b){
    return a > b ? a : b
}

