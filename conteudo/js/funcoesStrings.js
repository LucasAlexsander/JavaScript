var nome = 'Lucas Alexsander Barbosa Cruz'

document.write('<p><b>Nome usado</b>: ', nome, '</p>')

var tamanho = nome.length
document.write('<p><b>Lenght( )</b>: Conta o tamanho da string: ', tamanho, '</p>')

var posicao = nome.charAt(8)
document.write('<p><b>charAt( )</b>: Retorna um caractere com base no valor entrado (8): ', posicao, '</p>')

var primeiroCaracter = nome.indexOf('a')
document.write('<p><b>indexOf( )</b>: Retorna com base no primeiro caractere, o momento em que ele apareceu pela primeira vez "a" ', primeiroCaracter, '</p>')

var trocaValor = nome.replace('Alexsander', 'Barbosa')
document.write('<p><b>replace( )</b>: Procura o valor e se existir trocar pela valor do segundo parâmetro. Alexsander -> Barbosa', trocaValor, '</p>')

var cortaVar = nome.substr(6, 10)
document.write('<p><b>Substr( )</b>: Recorta um pedaço da variável com base nos parâmetros: ', cortaVar, '</p>')

var maiuscula = nome.toUpperCase()
document.write('<p><b>toUpperCase( )</b>: Transforma todos os caracteres em maiúsculos ', maiuscula, '</p>')

var minusculo = nome.toLowerCase()
document.write('<p><b>toLowerCase( )</b>: Transforma todos os caracteres em minúsculas ', minusculo, '</p>')

var noSpace = nome.trim()
document.write('<p><b>trim( )</b>: Remove todos os espaços em branco nas extremindades ', noSpace, '</p>')