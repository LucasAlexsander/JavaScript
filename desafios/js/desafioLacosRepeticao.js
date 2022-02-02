function percorrendoEListando() {
    var lista_frutas = ['Banana', 'Maçã', ' Morango', 'Uva', 'Goiaba']

    document.write('<b>Array:</b> ', lista_frutas, '<hr>')

    for (var x = 0; x < lista_frutas.length; x++) {
        document.write(lista_frutas[x], '<br>')
    }
}

function tabuada() {
    var lin = 1
    while (lin <= 10) {
        var col = 1
        document.write('Tabuada do ', lin, ':<br>')
        while (col <= 10) {
            document.write(lin, ' x ', col, ' = ', lin*col)

            if (col != 10) {
                document.write(' | ')
            }
            col ++
        }
        document.write('<br><br>')
        lin ++
    }
}