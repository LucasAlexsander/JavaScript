function distribuirCaracter() {
    //Selecionar o valor digitado
    var caracter = document.getElementById("entrada").value.trim()
    //Limpar o campo de difitação
    document.getElementById("entrada").value = ''
    
    num = parseInt(caracter)
    
    for (x=0; x <= 9; x++) {
        
        if (num === x) {
            //Adicionamos o número no campo número
            document.getElementById("numero").value += caracter
            break
        } 
    }
    if (num != x) {
        //Adicinoamos a letra no campo letras
        document.getElementById("letra").value += caracter
    }
}