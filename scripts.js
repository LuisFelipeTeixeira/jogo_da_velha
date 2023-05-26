
// Define os jogadores e a vez atual
    let players = ['X', 'O'];
    let currentPlayer = players[0];
    player1Points = 0;
    player2Points = 0;


    // Seleciona todas as c�lulas do tabuleiro
    let cells = document.querySelectorAll('.cell');

    // Adiciona um ouvinte de evento de clique a cada c�lula
    cells.forEach(function(cell) {
        cell.addEventListener('click', function () {
            // Verifica se a c�lula j� est� marcada
            if (cell.textContent !== '') {
                return;
            }
            // Marca a c�lula com o s�mbolo do jogador atual
            cell.textContent = currentPlayer;
            // Verifica se h� um vencedor
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

    // Verifica se h� um vencedor
    function checkWinner() {
        // Define as poss�veis combina��es vencedoras
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
  // Verifica se alguma combina��o vencedora foi alcan�ada
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
    // Desativa o clique nas c�lulas do tabuleiro
    cells.forEach(function(cell) {
        cell.removeEventListener('click', handleClick);
  });
}
    // Atualiza a mensagem do status
    function updateStatus() {
        let status = document.querySelector('.status');
    status.textContent = `Vez do Jogador ${currentPlayer}`;
}

    // Adiciona um ouvinte de evento ao bot�o 'Reiniciar Jogo'
    document.getElementById('reset-game').addEventListener('click', function() {
        // Limpa o conte�do de todas as c�lulas
        cells.forEach(function (cell) {
            cell.textContent = '';
            // Reativa o ouvinte de eventos na c�lula
            cell.addEventListener('click', handleClick);
        });
    // Define o jogador atual como o primeiro da lista
    currentPlayer = players[0];
    // Atualiza a mensagem do status para a vez do jogador atual
    updateStatus();
});

    // Adiciona um ouvinte de evento ao bot�o 'Reiniciar Placar'
    document.getElementById('reset-score').addEventListener('click', function() {
        // Define a pontua��o dos jogadores como zero
        player1Points = 0;
    player2Points = 0;
    // Atualiza a mensagem do status para indicar que nenhum jogador marcou ainda
    document.querySelector('reset-score').textContent = 'Placar: Jogador 1 - 0 / Jogador 2 - 0';
});

    // Fun��o para lidar com cliques nas c�lulas

    function handleClick() {
  // Verifica se a c�lula j� est� marcada
  if (this.textContent !== '') {
    return;
  }
    // Marca a c�lula com o s�mbolo do jogador atual
    this.textContent = currentPlayer;
    // Verifica se h� um vencedor
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

    // Adiciona um ouvinte de evento de clique a cada c�lula
    cells.forEach(function(cell) {
        cell.addEventListener('click', handleClick);
});

    // Reinicia o jogo
    function resetGame() {
        // Limpa o conte�do de todas as c�lulas
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
        // dentro da fun��o atualizaPlacar()
        let spanPlayer1 = document.getElementById('player1Points');
    spanPlayer1.innerHTML = player1Points;
    // dentro da fun��o atualizaPlacar()
    let spanPlayer2 = document.getElementById('player2Points');
    spanPlayer2.innerHTML = player2Points;


}

    // Adiciona um ouvinte de evento ao bot�o 'Reiniciar Jogo'
    document.getElementById('reset-game').addEventListener('click', resetGame);

    // Adiciona um ouvinte de evento ao bot�o 'Reiniciar Placar'
    document.getElementById('reset-score').addEventListener('click', resetScore);

    // Inicia o jogo
    resetGame();