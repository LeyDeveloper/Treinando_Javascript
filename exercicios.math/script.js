var numero = prompt('escreva um número')
var res = document.querySelector('.res')

res.innerHTML += `<p>Raiz quadrada de ${numero} é : ${numero ** (1/2)}</p>`
res.innerHTML += `<p>${numero} é um número inteiro: ${Number.isInteger(Number(numero))}</p>`
res.innerHTML += `<p>${numero} é um NaN: ${Number.isNaN(Number(numero))}</p>`
res.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`
res.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`
res.innerHTML += `<p>Com duas casas decimais: ${Number(numero).toFixed(2)}</p>`