var operacao = prompt('Entre com a operação "soma" ou "subtração" (sem aspas)')
var num1 = parseInt(prompt('Entre com um número:'))
var num2 = parseInt(prompt('Entre com outro número: '))

function calculo (operacao, num1, num2) {

    if (operacao == 'soma') {

        var resultado = num1 + num2

    } else if (operacao == 'subtração') {

        var resultado = num1 - num2

    } else {

        var resultado = ' | Erro: Entre com um dos valores, soma ou subtração no primeiro campo! |<br><br>'
        
    }
    return resultado
}

var resultado = calculo(operacao, num1, num2);

document.write('O resultado é : ', resultado, '<br>')