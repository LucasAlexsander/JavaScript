function calcularAreaTerreno (altura, largura) {
    var area = altura * largura
    return area
}

var area = calcularAreaTerreno (15, 25);

document.write('O calculo do terreno é de ', area , ' metros ao quadrado')