function exibirArtigo (id, callbackSucesso, callbackErro) { //Função principal
    //Lógica: recuperar id via requisição http
    
    if (true) {
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas')     
        
    } else {
        callbackErro ('Não foi póssivel recuperar os dados.')
    }
}

//Função para printar na tela caso de tudo certo
var callbackSucesso = function (titulo, descricao) {
    document.write('<h2>', titulo, '</h2>')
    document.write('<p>', descricao, '</p>')
}

// Função caso dê algum erro
var callbackErro = function (erro) {
    document.write('<p><b>Erro:</b> ', erro, '</p>')
}

//Chamamos a função exibirArtigo e atribuimos os parâmetros
exibirArtigo (1, callbackSucesso, callbackErro) 

// Podemos fazer isso mas fica ficil para decodificar futuramente 
//exibirArtigo(id, function(){...}, fucntion() {...})