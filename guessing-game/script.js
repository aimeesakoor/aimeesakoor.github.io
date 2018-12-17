/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

var randomNumber = Math.floor(Math.random() * 25) + 1;
      var guesses = document.querySelector('.guesses');
      var lastResult = document.querySelector('.lastResult');
      var lowOrHi = document.querySelector('.lowOrHi');
      var guessSubmit = document.querySelector('.guessSubmit');
      var guessField = document.querySelector('.guessField');
      var guessCount = 1;
      var resetButton;
      guessField.focus();
      function checkGuess() {
        var userGuess = Number(guessField.value);
        if(guessCount === 1) {
          guesses.textContent = 'Guesses so far: ';
        }
        guesses.textContent += userGuess + ' ';
        if(userGuess === randomNumber) {
          lastResult.textContent = 'Woo hoo you did it! :D';
          lowOrHi.textContent = '';
          setGameOver();
        } else if(guessCount === 5) {
          lastResult.textContent = 'Try one more time? :(';
          lowOrHi.textContent = '';
          setGameOver();
        } else {
          lastResult.textContent = 'Wrong!';
          if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Too low!';
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Too high!';
          }
          }
        
        guessCount++;
        guessField.value = '';
        guessField.focus();
      }
      guessSubmit.addEventListener('click', checkGuess);
      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Lets start again!';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }
      function resetGame() {
        guessCount = 1;
        var resetParas = document.querySelectorAll('.resultParas p');
        for(var i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }
        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        randomNumber = Math.floor(Math.random() * 25) + 1;
      }