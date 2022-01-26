// Selecionando pelo ID
/* function ModificarFundo(id) {

    document.getElementById(id).style.background = "#FFFF00"
}

function RevertendoFundo(id) {

    document.getElementById(id).style.background = "#FFF"

    var valor = document.getElementById(id).value.length

    if (valor < 3 ) {

        document.getElementById(id).style.background = "#FF0000"
    } else {

        document.getElementById(id).style.background = "#00FF00"

        console.log(document.getElementsByTagName('input')[posicao])
    }
} */
//Pegando a posição do input
function ModificarFundo(posicao) {

    document.getElementsByTagName('input')[posicao].style.background = "#FFFF00"
}

function RevertendoFundo(posicao) {

    document.getElementsByTagName('input')[posicao].style.background = "#FFF"

    var valor = document.getElementsByTagName('input')[posicao].value.length

    if (valor < 3 ) {

        document.getElementsByTagName('input')[posicao].style.background = "#FF0000"
    } else {

        document.getElementsByTagName('input')[posicao].style.background = "#00FF00"

        console.log(document.getElementsByTagName('input')[posicao])
    }
}