// Função para obter os números dos inputs
function obterNumeros() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(num1) || isNaN(num2)) {
        exibirResultado('Entrada inválida!');
        return null;
    }

    return { num1, num2 };
}

// Função para exibir o resultado
function exibirResultado(resultado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = resultado;
}

// Soma
function somar() {
    const numeros = obterNumeros();
    if (numeros) {
        const resultado = numeros.num1 + numeros.num2;
        exibirResultado(resultado.toFixed(2));
    }
}

// Subtração
function subtrair() {
    const numeros = obterNumeros();
    if (numeros) {
        const resultado = numeros.num1 - numeros.num2;
        exibirResultado(resultado.toFixed(2));
    }
}

// Multiplicação
function multiplicar() {
    const numeros = obterNumeros();
    if (numeros) {
        const resultado = numeros.num1 * numeros.num2;
        exibirResultado(resultado.toFixed(2));
    }
}

// Divisão
function dividir() {
    const numeros = obterNumeros();
    if (numeros) {
        if (numeros.num2 === 0) {
            exibirResultado('Erro: Divisão por zero!');
            return;
        }
        const resultado = numeros.num1 / numeros.num2;
        exibirResultado(resultado.toFixed(2));
    }
}

// Limpar tudo
function limpar() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    exibirResultado('0');
    document.getElementById('numero1').focus();
}
