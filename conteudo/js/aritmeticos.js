var num1 = prompt('Entre com um número: ')
var num2 = prompt('"Entre com outro número: ')



if (num1 == '') {
    num1 = 0
}
if (num2 == '') {
    num2 = 0
}

num1 = parseInt(num1)
num2 = parseInt(num2) 

num3 = num1
num5 = num1
num7 = num1

num4 = num2
num6 = num2
num8 = num2


document.write('Valor de num1: ', num1, '<br>')
document.write('Valor de num2: ', num2, '<br>')

document.write('A soma entre o num1 e num2 é: ', num1 + num2, '<br>') 
// ou document.write('A soma entre o num1 e num2 é: ' + (num1 + num2))
document.write('A subtração entre num1 e num2 é: ', num1 - num2 , '<br>')
document.write('A multiplicação entre num1 e num2 é: ', num1 * num2 , '<br>')
document.write('A divisão entre num1 e num2 é: ', num1 / num2 , '<br>')
document.write('O modulo entre num1 e num2 é: ', num1 % num2 , '<br>')
document.write('O incremento pre de num1 Original: [', num1, '] -> ', ++num1, ' e num2 Original: [', num2 , '] -> ', ++num2 , '<br>')
document.write('O incremento pós de num1 Original: [', num5 , '] -> Aplicando: ', num5++, ' -> Depois: ', num5 , '. ')
document.write('Num2 valor Original [', num6 , '] -> Aplicando: ', num6++ , ' -> Depois: ' , num6 , '<br>') 

/* document.write('O decremento pre entre num1 Original: [', --num3,] ' e num2 é: ', --num4 ,Original '[<br>')
docu]ment.write('O decremento pós entre num1 Original: [', num3--,] ' -> ', num3, ' e num2 Originalé:[ ', num4-- ], '<br>') */
 
document.write('O decremento pre de num1 Original: [', num3, '] -> ', --num3, ' e num2 Original: [', num4 , '] -> ', --num4 , '<br>')
document.write('O decremento pós de num1 Original: [', num7 , '] -> Aplicando: ', num7--, ' -> Depois: ', num7 , '.')
document.write('Num2 valor Original [', num8 , '] -> Aplicando: ', num8-- , ' -> Depois: ' , num8 , '<br>') 