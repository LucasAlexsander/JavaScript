var objetos = []

console.log(objetos)

function adicionar() {
    var elemento = document.getElementById('input').value
    if (elemento.length > 0) {
        if (objetos.indexOf(elemento) === -1) {
            objetos.unshift(elemento)            
        } else {            
            document.getElementById('input').value = ''
            document.getElementById('input').placeholder = 'Objeto já foi adicionado'
        }       
    } else {
        document.getElementById('input').placeholder = 'Informe um valor válido'
    }
    document.getElementById('input').value = ''
    console.log(objetos)
}

function ordenar () {
    var ordenar = objetos.sort()
    console.log(ordenar)
}

function enviar() {

    var tecla = event.keyCode;
    
    if (tecla === 13) {
        
        adicionar()
    }
    
}