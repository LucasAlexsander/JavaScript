var nome = prompt('Entre com seu nome:')
var altura = parseFloat(prompt('Entre com sua altura em cm (somente número): '))
var peso = parseFloat(prompt('Entre com o seu peso (somente número): '))
var classificacao;

altura /= 100

var massa = peso / (altura*altura)

if (massa < 16) {

   classificacao = '<span>Baixo peso, muito grave!</span>'

} else if (16 < massa && massa < 16.99) {

   classificacao = '<span>Baixo peso, grave!</span>'

} else if (17 < massa && massa < 18.49) {

   classificacao = '<span>Baixo peso</span>'

} else if (18.50 < massa && massa < 24.99) {

   classificacao = 'Peso normal'

} else if (25 < massa && massa < 29.99) {

   classificacao = '<span>Sobrepeso</span>'

} else if (30 < massa && massa < 34.99) {

   classificacao = '<span>Obesidade grau I</span>'

} else if (35 < massa && massa < 39.99) {

   classificacao = '<span>Obsesidade grau II</span>'

} else if (massa > 40) {
   classificacao = '<span>Obesidade grau III</span>'
}

document.write(nome, ' possui um índice de massa corporal igual a ', massa.toFixed(2), ', sendo classificado como: ', classificacao,'.')
//toFixed(numero) Escolhe quantas casas decimais terá