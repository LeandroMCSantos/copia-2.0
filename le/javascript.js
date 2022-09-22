let arraya = []

function calcular () {
    document.getElementById('resultado').innerHTML = ''
    let deslocamento = document.getElementById('distancia').value;
    let tempo = document.getElementById('tempo').value;
    let desloFloat = parseFloat(deslocamento)
    let tempoFloat = parseFloat(tempo)
    let resultado;

    if (deslocamento && tempo) {
        resultado = desloFloat / tempoFloat
        arraya.push(resultado)
        document.getElementById('velocidade').value = resultado
    }

    for (let i in arraya) {
        document.getElementById('resultado').innerHTML += arraya[i] + "<br>"
    }
}

function limpar () {
    document.getElementById('distancia').value=''
    document.getElementById('tempo').value=''
    document.getElementById('velocidade').value=''
    arraya = []
}

function irparahome () {
    location.href="index.html"
}

function irparasobre () {
    location.href="sobre.html"
}