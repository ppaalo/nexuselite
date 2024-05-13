function preencherTabela() {
    const tbody = document.getElementById('pontuacaoBody');

    // Simulação de uma requisição GET para a URL
    fetch('http://195.35.42.134:3000/pontuacoes/getAll')
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                const tr = document.createElement('tr');

                const tdPosicao = document.createElement('td');
                tdPosicao.textContent = (index + 1) + 'º'; // Adiciona a posição baseada no índice
                tr.appendChild(tdPosicao);

                const tdEquipe = document.createElement('td');
                tdEquipe.textContent = item.Equipe.nome; // Obtém o nome da equipe
                tr.appendChild(tdEquipe);

                const tdPontuacao = document.createElement('td');
                tdPontuacao.textContent = item.pontuacaoTotal; // Obtém a pontuação total
                tr.appendChild(tdPontuacao);

                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erro ao obter dados:', error));
}

window.onload = preencherTabela;
