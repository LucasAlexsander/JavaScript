function modificarEstilo() {
    var estilo = document.getElementById("mensagem").className
    if (estilo != 'estilo2') {
        document.getElementById("mensagem").className = 'estilo2'
    } else {
        document.getElementById("mensagem").className = 'estilo1'
    }
}