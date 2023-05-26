
// Define os jogadores e a vez atual
    let players = ['X', 'O'];
    let currentPlayer = players[0];
    player1Points = 0;
    player2Points = 0;


    // Seleciona todas as células do tabuleiro
    let cells = document.querySelectorAll('.cell');

    // Adiciona um ouvinte de evento de clique a cada célula
    cells.forEach(function(cell) {
        cell.addEventListener('click', function () {
            // Verifica se a célula já está marcada
            if (cell.textContent !== '') {
                return;
            }
            // Marca a célula com o símbolo do jogador atual
            cell.textContent = currentPlayer;
            // Verifica se há um vencedor
            if (checkWinner()) {
                endGame();
                return;
            }
            // Alterna o jogador atual
            currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
            // Atualiza a mensagem do status
            updateStatus();
        });
});

    // Verifica se há um vencedor
    function checkWinner() {
        // Define as possíveis combinações vencedoras
        let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
    if(winningCombos){
  // Verifica se alguma combinação vencedora foi alcançada
  return winningCombos.some(function(combo) {
    return combo.every(function(index) {
      return cells[index].textContent === currentPlayer;
    });
  });
  }
}


    // Finaliza o jogo
    function endGame() {
        // Define a mensagem do status para indicar o vencedor
        let status = document.querySelector('.status');
    status.textContent = `O jogador ${currentPlayer} venceu!`;
    if (currentPlayer == 'X'){
        player1Points = player1Points + 1;
    updateScore();
  } else{
        player2Points = player2Points + 1;
    updateScore();
  }
    // Desativa o clique nas células do tabuleiro
    cells.forEach(function(cell) {
        cell.removeEventListener('click', handleClick);
  });
}
    // Atualiza a mensagem do status
    function updateStatus() {
        let status = document.querySelector('.status');
    status.textContent = `Vez do Jogador ${currentPlayer}`;
}

    // Adiciona um ouvinte de evento ao botão 'Reiniciar Jogo'
    document.getElementById('reset-game').addEventListener('click', function() {
        // Limpa o conteúdo de todas as células
        cells.forEach(function (cell) {
            cell.textContent = '';
            // Reativa o ouvinte de eventos na célula
            cell.addEventListener('click', handleClick);
        });
    // Define o jogador atual como o primeiro da lista
    currentPlayer = players[0];
    // Atualiza a mensagem do status para a vez do jogador atual
    updateStatus();
});

    // Adiciona um ouvinte de evento ao botão 'Reiniciar Placar'
    document.getElementById('reset-score').addEventListener('click', function() {
        // Define a pontuação dos jogadores como zero
        player1Points = 0;
    player2Points = 0;
    // Atualiza a mensagem do status para indicar que nenhum jogador marcou ainda
    document.querySelector('reset-score').textContent = 'Placar: Jogador 1 - 0 / Jogador 2 - 0';
});

    // Função para lidar com cliques nas células

    function handleClick() {
  // Verifica se a célula já está marcada
  if (this.textContent !== '') {
    return;
  }
    // Marca a célula com o símbolo do jogador atual
    this.textContent = currentPlayer;
    // Verifica se há um vencedor
    if (checkWinner()) {
        endGame();
    resetGame();
    return;
  }
    // Alterna o jogador atual
    currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
    // Atualiza a mensagem do status
    updateStatus();
}

    // Adiciona um ouvinte de evento de clique a cada célula
    cells.forEach(function(cell) {
        cell.addEventListener('click', handleClick);
});

    // Reinicia o jogo
    function resetGame() {
        // Limpa o conteúdo de todas as células
        cells.forEach(function (cell) {
            cell.textContent = '';
        });
    // Define o jogador atual como o primeiro da lista
    currentPlayer = players[0];
    // Atualiza a mensagem do status para a vez do jogador atual
    updateStatus();
}

    // Reinicia o placar
    function resetScore() {
        player1Points = 0;
    player2Points = 0;
    updateScore();
}

    // Atualiza o placar
    function updateScore() {
        // dentro da função atualizaPlacar()
        let spanPlayer1 = document.getElementById('player1Points');
    spanPlayer1.innerHTML = player1Points;
    // dentro da função atualizaPlacar()
    let spanPlayer2 = document.getElementById('player2Points');
    spanPlayer2.innerHTML = player2Points;


}

    // Adiciona um ouvinte de evento ao botão 'Reiniciar Jogo'
    document.getElementById('reset-game').addEventListener('click', resetGame);

    // Adiciona um ouvinte de evento ao botão 'Reiniciar Placar'
    document.getElementById('reset-score').addEventListener('click', resetScore);

    // Inicia o jogo
    resetGame();