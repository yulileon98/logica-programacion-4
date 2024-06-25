document.getElementById('btnGenerate').addEventListener('click', function() {
    let numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingrese un número entero positivo válido.");
        return;
    }

    let fibonacciSeries = [];
    if (numero >= 1) {
        fibonacciSeries.push(0);
    }
    if (numero >= 2) {
        fibonacciSeries.push(1);
    }

    for (let i = 2; i < numero; i++) {
        fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
    }

    mostrarResultado(fibonacciSeries);
});

function mostrarResultado(resultado) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<strong>Serie de Fibonacci:</strong> " + resultado.join(', ');
}