var numero = 19.408

document.write('<p><b>Numero usado</b>: ', numero, '</p>')

var redondaCima = Math.ceil(numero)
document.write('<p><b>Math.ceil(número)</b>: Arredonda o número para cima: ', redondaCima, '</p>')

var redondaBaixo = Math.floor(numero)
document.write('<p><b>Math.floor(número)</b>: Arredonda o número para baixo: ', redondaBaixo, '</p>')

var redondaMedia = Math.round(numero)
document.write('<p><b>Math.round(número)</b>: Arredonda o número para com base na sua média, .4 (baixo), .5(cima): ', redondaMedia, '</p>')

var aleatorio = Math.random()
document.write('<p><b>Math.random( )</b>: Gera um número aleátorio entre 0 e 1: ', aleatorio, '</p>')

var potencia = Math.pow(numero, 2)
document.write('<p><b>Math.pow(x, y)</b>: Faz a potência do número: ', potencia, '</p>')

var raizQuad = Math.sqrt(numero)
document.write('<p><b>Math.sqrt(x)</b>: Faz a raiz quadrada do número desejado ', raizQuad, '</p>')