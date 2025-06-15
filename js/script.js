        // 1. Pegar os elementos do HTML com os quais vamos interagir
        const alcoolInput = document.getElementById('alcool');
        const gasolinaInput = document.getElementById('gasolina');
        const calculateBtn = document.getElementById('calculateBtn');
        const resultDiv = document.getElementById('result');

        // 2. Adicionar um "ouvinte" de evento. Quando o botão for clicado, ele vai chamar a função 'calcular'.
        calculateBtn.addEventListener('click', calcular);

        // 3. Esta é a função principal que faz toda a mágica acontecer.
        function calcular() {
            // 3.1. Pega os valores digitados e converte para número.
            const precoAlcool = parseFloat(alcoolInput.value);
            const precoGasolina = parseFloat(gasolinaInput.value);

            // 3.2. Verifica se os valores são válidos. Se não forem, mostra um alerta.
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

            // 3.6. Monta o HTML que será inserido na div de resultado.
            resultDiv.innerHTML = `
                <h2>${tituloResultado}</h2>
                <p>${dicaResultado}</p>
            `;
            
            // 3.7. Adiciona a classe CSS para colorir o fundo e depois mostra o resultado.
            // Primeiro removemos qualquer classe de cor que já exista.
            resultDiv.className = 'result-box'; 
            // Agora adicionamos a classe correta.
            resultDiv.classList.add(classeCSS);
            // Finalmente, tornamos a div visível.
            resultDiv.style.display = 'block'; 
        }