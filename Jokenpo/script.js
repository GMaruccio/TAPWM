let score = 0;

function play(escolhaPlayer) {
  const escolhas = ['pedra', 'papel', 'tesoura'];
  const escolhaBot = escolhas[Math.floor(Math.random() * 3)];
  const resultaDiv = document.getElementById('resultado');
  const player = document.getElementById('player');
  const bot = document.getElementById('bot');

  player.textContent = escolhaPlayer;
  bot.textContent = escolhaBot;

  let resultado = '';
  if (escolhaPlayer === escolhaBot) {
    resultado = `Empatou! Vocês dois escolheram ${escolhaPlayer}.`;
  } else if (
    (escolhaPlayer === 'pedra' && escolhaBot === 'tesoura') ||
    (escolhaPlayer === 'papel' && escolhaBot === 'pedra') ||
    (escolhaPlayer === 'tesoura' && escolhaBot === 'papel')
  ) {
    score++;
    resultado = `Você venceu! ${escolhaPlayer} ganha de ${escolhaBot}.`;
  } else {
    resultado = `Voc^^e perdeu... ${escolhaBot} ganha de ${escolhaPlayer}.`;
  }

  document.getElementById('score').textContent = score;
  resultaDiv.textContent = resultado;
}

function resetGame() {
  document.getElementById('resultado').textContent = '';
  document.getElementById('player').textContent = '-';
  document.getElementById('bot').textContent = '-';
}
