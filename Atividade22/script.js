function somar(valor1, valor2) {
    var resultado = valor1 + valor2;
    var mensagem = 'O resultado da soma é ';
    alert(mensagem + resultado);

    var condicao = true;

    if (condicao)
        alert('Condição verdadeira');
    else
        alert('Condição falsa');
}

function calcularRaiz(numero) {
    var resultadoRaiz = Math.sqrt(numero);
    alert('A raiz quadrada de ' + numero + ' é ' + resultadoRaiz);
}

function inserirTexto() {
    var textoInserido = prompt("Digite algo:");
    document.getElementById("areaTexto").innerHTML = textoInserido;
}

function listarNumeros() {
    var numero = parseInt(prompt("Digite um número:"));

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, insira um número válido maior que zero.");
        return;
    }

    var divNumeros = document.getElementById("listaNumeros");

    divNumeros.innerHTML = "";

    for (var i = 1; i <= numero; i++) {
        divNumeros.innerHTML += i + "<br>";
    }
}

function exibirTextoModal() {
    var textoModal = prompt("Digite o texto para exibir no modal:");

    if (textoModal) {
        document.getElementById("corpoModal").innerText = textoModal;

        var modalExibicao = new bootstrap.Modal(document.getElementById('meuModal'));
        modalExibicao.show();
    } else {
        alert("Por favor, insira um texto válido.");
    }
}
