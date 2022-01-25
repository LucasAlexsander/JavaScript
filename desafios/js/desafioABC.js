var A = 10;
var B = 20;
var C = null;
x1 = null;
y = null;



/* document.write('Dentro da variável A temos o valor: ', A, '<br>');
document.write('Dentro da variável B temos o valor: ', B, '<br>');
document.write('Dentro da variável C temos o valor: ', C, '<br><hr>'); */

for (x = 0; x < 3; x++) {    
    if (x == 0) {

        x1 = A;
        y = 'A';
    
    } else if (x == 1) {
    
        x1 = B;
        y = 'B';
    
    } else {
    
        x1 = C;
        y = 'C';
    
    }
    document.write('Dentro da variável ', y, ' temos o valor: ', x1, '<br>');  
}

document.write('<hr>Alterando os valores: <br>')

C = A;
A = B;
B = C;
C = null;

document.write('Para isso usamos a seguinte formula: C = A | A = B | B = C | C = null <br>');
document.write('Agora temos os seguintes valores para as variáveis: <br><hr>');
/* document.write('Dentro da variável A temos o valor: ', A, '<br>');
document.write('Dentro da variável B temos o valor: ', B, '<br>');
document.write('Dentro da variável C temos o valor: ', C, '<br><hr>'); */
for (x = 0; x < 3; x++) {    
    if (x == 0) {

        x1 = A;
        y = 'A';
    
    } else if (x == 1) {
    
        x1 = B;
        y = 'B';
    
    } else {
    
        x1 = C;
        y = 'C';
    
    }
    document.write('Dentro da variável ', y, ' temos o valor: ', x1, '<br>');  
}