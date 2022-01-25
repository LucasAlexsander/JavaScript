date = new Date()

function diaAtual () {
    var dia = date.getDate()
    var mes = date.getMonth()+1
    var ano = date.getFullYear()

    return dia+'/'+mes+'/'+ano
}

function horasAtuais () {
    var horas = date.getHours()
    var minutos = date.getMinutes()
    var segundos = date.getSeconds()
    
    return horas+':'+minutos+':'+segundos
}

document.write('Dia Atual: ', diaAtual())
document.write('<br>Horas atuais: ', horasAtuais())

document.write('<br><hr>')
document.write('<h3>Manipulando datas:</h3>')

//Manipulando datas, adicionando dias ou qualquer coisa
var dataTest = new Date();
document.write('<b>Data atual</b>: ', dataTest.toString(), '<br>')
//Adicionando um dia a data, a ideia funciona com qualquer dado de data
dataTest.setDate(dataTest.getDate() + 1)
document.write('<b>Nova data</b>: ', dataTest.toString())


document.write('<br><hr>')
document.write('<h3>Diferença entre dias:</h3>')

var data1 = new Date(2017, 0, 15)
var data2 = new Date(2018, 7, 27)

document.write('Data1: ', data1.toString(), '<br>')
document.write('Data2: ', data2.toString(), '<br>')

document.write('<hr>')
//Convertendo para milessegundos

var milessegundosData1 = data1.getTime()
var milessegundosData2 = data2.getTime()

document.write('Data1 em milessegundo desde 1/1/1970: ', milessegundosData1, ' milessegundos.<br>')
document.write('Data2 em milessegundo desde 1/1/1970: ', milessegundosData2, ' milessegundos.<br>')

document.write('<hr>')
//Pegando a diferença
var diferenca = Math.abs(milessegundosData1 - milessegundosData2)
document.write('Diferença entre a data1 e a data2 é: ', diferenca, ' milessegundos.<br>')

document.write('<hr>')
//Convertendo para dias os milessegundos
/* 1 dia tem: 24 horas, 60 minutos, 60 segundos, 1000 milessegundos
1 dia é igual a: 24*60*60*1000 milessegundos */
var diaMs = 24*60*60*1000
document.write('1 dia tem ', diaMs, ' milessegundos.<br>')

//Dividindo a diferença com o dia
var diferencaDia = diferenca / diaMs
document.write('A diferença entre a data1 e a data2 é de ', diferencaDia, 'dia(s).')