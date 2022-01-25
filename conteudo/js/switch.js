var parametro = 2

switch (parametro) {
    case 1: //Na frente do case fica o resultado que queremos
        document.write('Parametro 1')
        break;

    case '2': // ou case 2 === parametro
        document.write('Parametro 2')
        break

    default: // caso nenhuma das opações sejam validas, o default entra em ação
        document.write('Nenhum dos parametros')
        break;
}