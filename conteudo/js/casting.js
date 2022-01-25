/* var numero1 = prompt('Entre com um número: ')
var numero2 = prompt('Entre com outro número: ')

document.write('String: <br>')
document.write(numero1 + numero2)

if (numero1 == '') {
    numero1 = 0
}

if (numero2 == '') {
    numero2 = 0
}

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)

document.write('<br><hr>Number: <br>')
document.write(numero1 + numero2) */

document.write('<hr><h2>toString:</h2><br>')
var numeroInt = 7
var numeroFrac = 2.455

document.write('Número inteiro: ', numeroInt, '. Número fracionado: ', numeroFrac, '<br>')
document.write('Somando números: ', numeroInt + numeroFrac);
document.write('<br><hr>Transformando em string:<br>')
document.write('Número inteiro: ', numeroInt.toString(), '. Número fracionado: ', numeroFrac.toString(), '<br>')
document.write('Somando string: ', numeroInt.toString() + numeroFrac.toString())