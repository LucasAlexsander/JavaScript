var idade = prompt('Entre com sua idade:')

if (0 <= idade && idade < 15) {

    document.write('Criança')
    alert('Criança')
} else if (15 <= idade && idade < 30) {

    document.write('Jovem')
    alert('Jovem')
} else if (30 <= idade && idade < 60) {

    document.write('Adulto')
    alert('Adulto')
} else {

    document.write('Idoso')
    alert('Idoso')
}