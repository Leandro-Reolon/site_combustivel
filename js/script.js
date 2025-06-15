// 1. Pegar os elementos do HTML com os quais vamos interagir
const alcoolInput = document.getElementById('alcool');
const gasolinaInput = document.getElementById('gasolina');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// 2. Adicionar um "ouvinte" de evento. Quando o botão for clicado, ele vai chamar a função 'calcular'.
calculateBtn.addEventListener('click', calcular);

// 3. Esta é a função principal que faz todo cálculo acontecer.
function calcular() {
    // 3.1. Pega os valores digitados e converte para número.
    const precoAlcool = parseFloat(alcoolInput.value);
    const precoGasolina = parseFloat(gasolinaInput.value);

    // 3.2. Verifica se os valores são válidos. Se não forem, mostra um alerta. Função isNaN e operador || q é o ou
    if (isNaN(precoAlcool) || isNaN(precoGasolina) || precoAlcool <= 0 || precoGasolina <= 0) {
        alert("Por favor, insira valores válidos e positivos para os dois combustíveis.");
        return; // Para a execução da função aqui.
    }

    // 3.3. Faz o cálculo da regra dos 70%.
    const ratio = precoAlcool / precoGasolina;

    // 3.4. Prepara as variáveis para o resultado.
    let tituloResultado = '';
    let dicaResultado = '';
    let classeCSS = ''; // Para mudar a cor do box de resultado

    // 3.5. Decide qual combustível é melhor e define as mensagens.
    if (ratio < 0.7) {
        // Se o álcool for mais vantajoso
        tituloResultado = 'Escolha ÁLCOOL!';
        dicaResultado = 'Dica: Manter os pneus calibrados ajuda o álcool a render ainda mais.';
        classeCSS = 'result-alcool'; // Classe CSS para o fundo verde
    } else {
        // Se a gasolina for mais vantajosa
        tituloResultado = 'Escolha GASOLINA!';
        dicaResultado = 'Dica: Evite acelerar e frear bruscamente para economizar gasolina.';
        classeCSS = 'result-gasolina'; // Classe CSS para o fundo azul
    }

    // Monta o HTML que será inserido na div de resultado.
    resultDiv.innerHTML = `
                <h2>${tituloResultado}</h2>
                <p>${dicaResultado}</p>
            `;

    // Adiciona a classe CSS para colorir o fundo e depois mostra o resultado.
    // Primeiro removemos qualquer classe de cor que já exista.
    resultDiv.className = 'result-box';
    // Agora adicionamos a classe correta.
    resultDiv.classList.add(classeCSS);
    // Finalmente, tornamos a div visível.
    resultDiv.style.display = 'block';
}



// CÓDIGO PARA CÁLCULO DE MÉDIA DE CONSUMO


// 1. Pegar os elementos do HTML da calculadora de média
const distanciaInput = document.getElementById('distancia');
const litrosInput = document.getElementById('litros');
const calculateMediaBtn = document.getElementById('calculateMediaBtn');
const resultMediaDiv = document.getElementById('resultMedia');

// 2. Adicionar o "ouvinte" de evento para o novo botão
if (calculateMediaBtn) {
    calculateMediaBtn.addEventListener('click', calcularMedia);
}

// 3. Função que calcula a média
function calcularMedia() {
    const distancia = parseFloat(distanciaInput.value);
    const litros = parseFloat(litrosInput.value);

    if (isNaN(distancia) || isNaN(litros) || distancia <= 0 || litros <= 0) {
        alert("Por favor, insira valores válidos e positivos para distância e litros.");
        return;
    }

    const media = distancia / litros;
    resultMediaDiv.innerHTML = `<h2>Sua média é de ${media.toFixed(2)} km/L</h2>`;
    resultMediaDiv.className = 'result-box result-gasolina'; // Reutiliza o estilo azul
    resultMediaDiv.style.display = 'block';
}



//  CÓDIGO PARA CÁLCULO DE TROCA DE ÓLEO

// 1. Pegar os elementos do HTML da calculadora de óleo
const kmAtualInput = document.getElementById('kmAtual');
const kmUltimaTrocaInput = document.getElementById('kmUltimaTroca');
const intervaloOleoInput = document.getElementById('intervaloOleo');
const calculateOleoBtn = document.getElementById('calculateOleoBtn');
const resultOleoDiv = document.getElementById('resultOleo');

// 2. Adicionar o "ouvinte" de evento para o novo botão
if (calculateOleoBtn) {
    calculateOleoBtn.addEventListener('click', calcularOleo);
}

// 3. Função que calcula a troca de óleo
function calcularOleo() {
    const kmAtual = parseFloat(kmAtualInput.value);
    const kmUltimaTroca = parseFloat(kmUltimaTrocaInput.value);
    const intervalo = parseFloat(intervaloOleoInput.value);

    if (isNaN(kmAtual) || isNaN(kmUltimaTroca) || isNaN(intervalo) || kmUltimaTroca < 0 || intervalo <= 0) { // Verifica se os valores são válidos
        alert("Por favor, insira valores válidos para as quilometragens e o intervalo."); // Se algum valor não for válido, mostra um alerta
        return;
    }

    if (kmAtual < kmUltimaTroca) {
        alert("A quilometragem atual não pode ser menor que a da última troca.");
        return;
    }

    const proximaTroca = kmUltimaTroca + intervalo;
    const kmRestantes = proximaTroca - kmAtual;

    let resultadoHTML = '';
    let classeCSS = 'result-gasolina'; // Estilo azul padrão

    if (kmRestantes > 0) {
        resultadoHTML = `
            <h2>Próxima troca em: ${proximaTroca.toLocaleString('pt-BR')} km</h2>
            <p>Faltam ${kmRestantes.toLocaleString('pt-BR')} km para a próxima troca.</p>
        `;
    } else {
        classeCSS = 'result-alcool'; // Reutiliza o estilo verde como um alerta
        resultadoHTML = `
            <h2>Atenção: Troca de óleo atrasada!</h2>
            <p>Você deveria ter trocado em ${proximaTroca.toLocaleString('pt-BR')} km. Já se passaram ${Math.abs(kmRestantes).toLocaleString('pt-BR')} km.</p>
        `;
    }

    resultOleoDiv.innerHTML = resultadoHTML;
    resultOleoDiv.className = 'result-box';
    resultOleoDiv.classList.add(classeCSS);
    resultOleoDiv.style.display = 'block';
}