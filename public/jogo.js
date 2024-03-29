const score = document.querySelector('.Score');
const mario = document.querySelector('.Mario');
const pipe = document.querySelector('.Pipe');
const overlay = document.querySelector('.Overlay');
const reset = document.querySelector('.ResetButton');
const overlayScore = document.querySelector('.OverlayScore');
const startGameInfo = document.querySelector('.StartGame');

let countScore = 0;
let startGame = true;
let timerVerifyDead;
let timerScore;
let timerSpeed;

reset.addEventListener('click', () => window.location.reload());

window.addEventListener('click', () => {
  pipe.classList.add('pipeRun');
  mario.classList.add('jump');

  setTimeout(() => mario.classList.remove('jump'), 500);

  if (startGame) {
    let pipeSpeed = 1.5;
    startGameInfo.innerHTML = '';
    startGameInfo.style.background = 'transparent';
    timerScore = setInterval(() => {
      countScore++;
      score.innerHTML = `SCORE ${countScore}`;
    }, 1000);

    timerSpeed = setInterval(() => {
      pipeSpeed -= 0.1;
      if (pipeSpeed <= 0) {
        pipeSpeed = 0.6;
      }
      pipe.style.animationDelay = `pipe-animate ${pipeSpeed}s infinite linear`;
    }, 1000 * 10);
  }

  startGame = false;

  timerVerifyDead = setInterval(() => {
    handleLogicForGameOver();
  }, 10);
});

const handleLogicForGameOver = () => {
  const pipeLocalization = pipe.offsetLeft;
  const marioLocalization = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');

  if (
    pipeLocalization <= 5 &&
    pipeLocalization > 0 &&
    marioLocalization < 110
  ) {
    pipe.style.animation = '';
    pipe.style.left = `${pipeLocalization}px`;

    mario.style.marginLeft = '50px';
    mario.style.bottom = `-200px`;
    mario.style.width = '80px';
    mario.classList.add('dead');

    overlayScore.innerHTML = `SCORE ${countScore}`;
    overlay.style.display = 'flex';

    clearInterval(timerScore);
    clearInterval(timerVerifyDead);
  }
};
